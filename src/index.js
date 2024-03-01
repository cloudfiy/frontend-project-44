import readlineSync from 'readline-sync'
import gameEven from './games/gameEven.js'
import gameCalc from './games/gameCalc.js'
import gameGcd from './games/gameGcd.js'
import gameProgression from './games/gameProgression.js'
import gamePrime from './games/gamePrime.js'

const gameMessages = {
  'brain-even': 'Answer "yes" if the number is even, otherwise answer "no".',
  'brain-calc': 'What is the result of the expression?',
  'brain-gcd': 'Find the greatest common divisor of given numbers.',
  'brain-progression': 'What number is missing in the progression?',
  'brain-prime': 'Answer "yes" if given number is prime. Otherwise answer "no".'
}

const playGame = (userName, gameFunction, gameMessage) => {
  console.log(gameMessage)

  for (let round = 0; round < 3; round += 1) {
    const { question, correctAnswer } = gameFunction()
    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (answer === correctAnswer.toString()) {
      console.log('Correct!')
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLets's try again, ${userName}!`
      )
    }
  }

  return console.log(`Congratulations, ${userName}!`)
}

const startGame = (userName, gameName) => {
  switch (gameName) {
    case 'brain-even':
      playGame(userName, gameEven, gameMessages[gameName])
      break
    case 'brain-calc':
      playGame(userName, gameCalc, gameMessages[gameName])
      break
    case 'brain-gcd':
      playGame(userName, gameGcd, gameMessages[gameName])
      break
    case 'brain-progression':
      playGame(userName, gameProgression, gameMessages[gameName])
      break
    case 'brain-prime':
      playGame(userName, gamePrime, gameMessages[gameName])
      break
    default:
      return { error: 'Bug!' }
  }
  return { error: 'Unknown gameName' }
}

export default startGame
