import getRandomNumber from '../getRandomNumber.js';

const findGCD = (a, b) => {
  if (a === 0) {
    return b;
  }
  return findGCD(b % a, a);
};

export default () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);

  return { question, correctAnswer };
};
