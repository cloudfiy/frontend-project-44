import getRandomNumber from '../getRandomNumber.js';

export default () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[Math.floor(Math.random() * operators.length)];

  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${currentOperator} ${num2}`;

  let correctAnswer;

  switch (currentOperator) {
    case '+':
      correctAnswer = num1 + num2;
      break;
    case '-':
      correctAnswer = num1 - num2;
      break;
    case '*':
      correctAnswer = num1 * num2;
      break;
    default:
      console.log('Unknown operator!');
  }

  return { question, correctAnswer };
};
