import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGCD = (a, b) => {
  if (a === 0) {
    return b;
  }
  return findGCD(b % a, a);
};

const gcd = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);

  const question = `${num1} ${num2}`;
  const correctAnswer = findGCD(num1, num2);

  return { question, correctAnswer };
};

export default () => {
  startGame(gcd, description);
};
