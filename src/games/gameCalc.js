export default () => {
  const operators = ['+', '-', '*']
  const currentOperator = operators[Math.floor(Math.random() * operators.length)]

  const num1 = Math.floor(Math.random() * 101)
  const num2 = Math.floor(Math.random() * 101)

  const question = `${num1} ${currentOperator} ${num2}`

  const correctAnswer = eval(question)

  return { question, correctAnswer }
}