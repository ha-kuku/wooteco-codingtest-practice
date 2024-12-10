import { ERROR } from './Constants/Message.js';

const validateInputBlank = (input) => {
  if (input === null || input === '') {
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

export { validateInputBlank, validateInputOverlap, validateWorkerNameLength };
