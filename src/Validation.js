import { ERROR } from './Constants/Message.js';

const DAY_REGEX = /월화수목금토일/;
const NUMBER_REGEX = /[1-9]\d*$/;

const validateInputBlank = (input) => {
  if (input === null || input === '') {
    throw new Error(ERROR.invalidInput);
  }
};

const validateInputDay = (input) => {
  if (DAY_REGEX.test(input) !== true) {
    throw new Error(ERROR.invalidInput);
  }
};

const validateInputzero = (input) => {
  if (input.includes(0) === true) {
    throw new Error(ERROR.invalidInput);
  }
};

const validateInputOverlap = (input) => {
  if (new Set(input).size !== input.length) {
    throw new Error(ERROR.invalidInput);
  }
};

const validateWorkerNameLength = (input) => {
  if (input.length > 5) {
    throw new Error(ERROR.invalidInput);
  }
};

const validateWorkerNumber = (input) => {
  if (input.length < 5 || input.length > 35) {
    throw new Error(ERROR.invalidInput);
  }
};

export {
  validateInputDay,
  validateInputzero,
  validateInputBlank,
  validateInputOverlap,
  validateWorkerNameLength,
  validateWorkerNumber,
};
