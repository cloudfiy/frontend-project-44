import getRandomNumber from '../getRandomNumber.js';

const generateRandomArray = (length, step) => {
  const firstNum = getRandomNumber(1, 100);
  return Array.from({ length }, (_, i) => firstNum + i * step);
};

export default () => {
  const minArrLength = 5;
  const maxArrLength = 10;

  const arrLength = getRandomNumber(minArrLength, maxArrLength);
  const step = getRandomNumber(1, 10);
  const arr = generateRandomArray(arrLength, step);

  const index = getRandomNumber(1, arr.length - 1);

  const correctAnswer = arr[index];
  const question = arr.map((num) => (num === correctAnswer ? '..' : num)).join(' ');

  return { question, correctAnswer };
};
