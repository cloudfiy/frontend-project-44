import getRandomNumber from '../getRandomNumber.js';

const isEven = (number) => (number % 2 === 0 ? 'yes' : 'no');

export default () => {
  const question = getRandomNumber();
  const correctAnswer = isEven(question);

  return { question, correctAnswer };
};
