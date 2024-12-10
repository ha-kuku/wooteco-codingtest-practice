import { Console } from '@woowacourse/mission-utils';
import { INPUT, ERROR } from './Constants/Message.js';

class App {
  getWorkingDate = async () => {
    const input = await Console.readLineAsync(INPUT.date);
    return input.trim();
  };

  getWeekdayWorker = async () => {
    const input = await Console.readLineAsync(INPUT.weekdayWorker);
    return input.trim();
  };

  getHolidayWorker = async () => {
    const input = await Console.readLineAsync(INPUT.holidayWorker);
    return input.trim();
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
