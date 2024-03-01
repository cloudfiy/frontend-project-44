export default () => {
  const getRandomNum = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const generateRandomArray = (length, step) => {
    const firstNum = getRandomNum(1, 100)
    return Array.from({ length }, (_, i) => firstNum + i * step)
  }

  const minArrLength = 5
  const maxArrLength = 10

  const arrLength = getRandomNum(minArrLength, maxArrLength)
  const step = getRandomNum(1, 10)

  const arr = generateRandomArray(arrLength, step)

  const index = getRandomNum(1, arr.length - 2)
  const correctAnswer = arr[index]

  const question = arr.map((num) => (num === correctAnswer ? ' .. ' : num)).join(' ')

  return { question, correctAnswer }
}
