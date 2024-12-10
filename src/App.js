import { Console } from '@woowacourse/mission-utils';
import { INPUT } from './Constants/Message.js';
import { validateInputBlank, validateInputOverlap, validateWorkerNameLength } from './Validation.js';

class App {
  getWorkingDate = async () => {
    const input = await Console.readLineAsync(INPUT.date);

    validateInputBlank(input);
    return input;
  };

  getWeekdayWorker = async () => {
    const input = await Console.readLineAsync(INPUT.weekdayWorker);

    validateInputBlank(input);

    const weekdayWorker = input.split(',').map((nickname) => {
      validateWorkerNameLength(nickname);
      return nickname;
    });

    validateInputOverlap(weekdayWorker);

    return weekdayWorker;
  };

  getHolidayWorker = async () => {
    const input = await Console.readLineAsync(INPUT.holidayWorker);
    validateInputBlank(input);

    const holidayWorker = input.split(',').map((nickname) => {
      validateWorkerNameLength(nickname);
      return nickname;
    });

    validateInputOverlap(holidayWorker);

    return holidayWorker;
  };

  async run() {
    try {
      await this.getWorkingDate();
      await this.getWeekdayWorker();
      await this.getHolidayWorker();
    } catch (err) {
      Console.print(err.message);
      throw err;
    }
  }
}

export default App;
