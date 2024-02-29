export default () => {
  const isPrime = (num) => {
    for (let i = 2; i <= Math.sqrt(num); i += 1) {
      if (num % i === 0) {
        return false
      }
    }
    return true
  }

  const question = Math.floor(Math.random() * 101)
  const correctAnswer = isPrime(question) ? 'yes' : 'no'

  return { question, correctAnswer }
}
