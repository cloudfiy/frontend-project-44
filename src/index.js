import readlineSync from 'readline-sync'
import gameCalc from './games/gameCalc.js'
import gameEven from './games/gameEven.js'
import gameGcd from './games/gameGcd.js'

const startGame = (userName, gameName) => {
  let round = 0

  switch (gameName) {
    case 'brain-even':
      console.log('Answer "yes" if the number is even, otherwise answer "no".')
      break
    case 'brain-calc':
      console.log('What is the result of the expression?')
      break
    case 'brain-gcd':
      console.log('Find the greatest common divisor of given numbers.')
      break
    default:
      return console.log('Bug!')
  }

  do {
    let question
    let correctAnswer

    switch (gameName) {
      case 'brain-even':
        /* prettier-ignore */
        ({ question, correctAnswer } = gameEven())
        break
      case 'brain-calc':
        /* prettier-ignore */
        ({ question, correctAnswer } = gameCalc())
        break
      case 'brain-gcd':
        /* prettier-ignore */
        ({ question, correctAnswer } = gameGcd())
        break
      default:
        return console.log('Bug!')
    }

    console.log(`Question: ${question}`)
    const answer = readlineSync.question('Your answer: ')

    if (gameName === 'brain-even' ? answer === correctAnswer : Number(answer) === correctAnswer) {
      console.log('Correct!')
      round += 1
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'\nLets's try again, ${userName}!`
      )
    }
  } while (round < 3)

  return console.log(`Congratulations, ${userName}!`)
}

export default startGame
