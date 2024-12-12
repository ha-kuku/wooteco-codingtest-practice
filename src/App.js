import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './Constants/Message.js';
import {
  validateInputBlank,
  validateInputOverlap,
  validateWorkerNameLength,
  validateWorkerNumber,
  validateInputzero,
} from './Validation.js';

class App {
  getWorkingDate = async () => {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT.date);

        validateInputBlank(input);

        const [month, day] = input.split(',');
        validateInputzero(month);

        return [Number(month), day.trim()];
      } catch (err) {
        Console.print(err.message);
      }
    }
  };

  getWorker = async () => {
    while (true) {
      try {
        const weekdayWorkerInput = await Console.readLineAsync(INPUT.weekdayWorker);
        const holidayWorkerInput = await Console.readLineAsync(INPUT.holidayWorker);

        validateInputBlank(weekdayWorkerInput, holidayWorkerInput);

        const weekdayWorker = weekdayWorkerInput.split(',').map((weeknickname) => {
          validateWorkerNameLength(weeknickname);
          return weeknickname;
        });

        const holidayWorker = holidayWorkerInput.split(',').map((holinickname) => {
          validateWorkerNameLength(holinickname);
          return holinickname;
        });

        validateInputOverlap(weekdayWorker);
        validateInputOverlap(holidayWorker);

        validateWorkerNumber(weekdayWorker);
        validateWorkerNumber(holidayWorker);

        return [weekdayWorker, holidayWorker];
      } catch (err) {
        Console.print(err.message);
      }
    }
  };

  generateSchedule(startDate, weekdayWorkers, holidayWorkers) {
    const schedule = [];
    const [startMonth, startDay] = startDate;

    //월별 마지막 날짜 계산 (예: 4월 -> 30일)
    const last_day = new Date(2024, startMonth, 0).getDate();

    //요일 배열 (0:일요일, ..., 6: 토요일)
    const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];
    let currentWeekdayIndex = daysOfWeek.indexOf(startDay);

    for (let day = 1; day <= last_day; day++) {
      const dayOfWeek = daysOfWeek[currentWeekdayIndex];
      const worker = dayOfWeek === '토' || dayOfWeek === '일' ? holidayWorkers.shift() : weekdayWorkers.shift();

      schedule.push(`${startMonth}월 ${day}일 ${dayOfWeek} ${worker}`);
      currentWeekdayIndex = (currentWeekdayIndex + 1) % 7;

      //작업자 배열 순환
      if (dayOfWeek !== '토' && dayOfWeek !== '일') weekdayWorkers.push(worker);
      else holidayWorkers.push(worker);
    }
    return schedule;
  }

  printSchedule(schedule) {
    schedule.forEach((line) => Console.print(line));
  }

  async run() {
    const startDate = await this.getWorkingDate();
    const [weekdayWorkers, holidayWorkers] = await this.getWorker();

    const schedule = this.generateSchedule(startDate, weekdayWorkers, holidayWorkers);
    this.printSchedule(schedule);
  }
}

export default App;
