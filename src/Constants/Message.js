const INPUT = Object.freeze({
  date: '비상 근무를 배정할 월과 시작 요일을 입력하세요> ',
  weekdayWorker: '평일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
  holidayWorker: '휴일 비상 근무 순번대로 사원 닉네임을 입력하세요> ',
});

const PREFIX_ERROR = '[ERROR]';

const ERROR = {
  invalidInput: `${PREFIX_ERROR} 유효하지 않은 입력 값입니다. 다시 입력해 주세요.`,
};

export { INPUT, ERROR };
