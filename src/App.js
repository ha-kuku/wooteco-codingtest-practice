import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './Constants/Message.js';
import {
  validateInputBlank,
  validateInputOverlap,
  validateWorkerNameLength,
  validateWorkerNumber,
} from './Validation.js';

class App {
  getWorkingDate = async () => {
    while (true) {
      try {
        const input = await Console.readLineAsync(INPUT.date);

        validateInputBlank(input);

        const [month, day] = input.split(',');
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

        return weekdayWorker, holidayWorker;
      } catch (err) {
        Console.print(err.message);
      }
    }
  };

  async run() {
    await this.getWorkingDate();
    await this.getWorker();
  }
}

export default App;
