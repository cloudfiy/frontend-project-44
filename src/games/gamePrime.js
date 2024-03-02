import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const prime = () => {
  const question = getRandomNumber(1, 100);
  const correctAnswer = isPrime(question);

  return { question, correctAnswer };
};

export default () => {
  startGame(prime, description);
};
