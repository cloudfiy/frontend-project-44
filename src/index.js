import readlineSync from 'readline-sync';
import gameEven from './games/gameEven.js';
import gameCalc from './games/gameCalc.js';
import gameGcd from './games/gameGcd.js';
import gameProgression from './games/gameProgression.js';
import gamePrime from './games/gamePrime.js';

const playGame = (gameFunction, descriptionGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  console.log(descriptionGame);

  for (let round = 0; round < 3; round += 1) {
    const { question, correctAnswer } = gameFunction();
    console.log(`Question: ${question}`);
    console.log(correctAnswer);
    const answer = readlineSync.question('Your answer: ');

    if (answer === correctAnswer.toString()) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

const startGame = (gameName, descriptionGame) => {
  switch (gameName) {
    case 'brain-even':
      playGame(gameEven, descriptionGame);
      break;
    case 'brain-calc':
      playGame(gameCalc, descriptionGame);
      break;
    case 'brain-gcd':
      playGame(gameGcd, descriptionGame);
      break;
    case 'brain-progression':
      playGame(gameProgression, descriptionGame);
      break;
    case 'brain-prime':
      playGame(gamePrime, descriptionGame);
      break;
    default:
      return { error: 'Bug!' };
  }
  return { error: 'Unknown gameName' };
};

export default startGame;
