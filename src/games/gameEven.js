export default () => {
  const question = Math.floor(Math.random() * 101)
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no'

  return { question, correctAnswer }
}
