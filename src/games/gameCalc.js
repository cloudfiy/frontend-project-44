import getRandomNumber from '../getRandomNumber.js';
import startGame from '../index.js';

const description = 'What is the result of the expression?';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: '${operator}'`);
  }
};

const calc = () => {
  const operators = ['+', '-', '*'];
  const currentOperator = operators[Math.floor(Math.random() * operators.length)];

  const num1 = getRandomNumber();
  const num2 = getRandomNumber();

  const question = `${num1} ${currentOperator} ${num2}`;
  const correctAnswer = calculate(num1, num2, currentOperator);

  return { question, correctAnswer };
};

export default () => {
  startGame(calc, description);
};
