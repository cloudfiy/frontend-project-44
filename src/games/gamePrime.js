import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  if (num < 2) {
    return 'no';
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question);

  return { question, correctAnswer };
};
