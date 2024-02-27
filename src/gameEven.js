import readlineSync from 'readline-sync'

export default (userName) => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
  let i = 0

  do {
    const question = Math.floor(Math.random() * 100) + 1
    const isEven = question % 2 === 0 ? 'yes' : 'no'

    console.log(`Question: ${question}`)

    const answer = readlineSync.question('Your answer: ')

    if (answer.toLowerCase() === isEven) {
      console.log('Correct!')
      i += 1
    } else {
      return console.log(
        `'${answer}' is wrong answer ;(. Correct answer was '${isEven}'\nLets's try again, ${userName}!`
      )
    }
  } while (i < 3)

  return console.log(`Congratulations, ${userName}!`)
}
