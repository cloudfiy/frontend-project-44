export default () => {
  const findGCD = (a, b) => {
    if (a === 0) {
      return b;
    }
    return findGCD(b % a, a);
  };

  const num1 = Math.floor(Math.random() * 100 + 1);
  const num2 = Math.floor(Math.random() * 100 + 1);
  const question = `${num1} ${num2}`;

  const correctAnswer = findGCD(num1, num2);

  return { question, correctAnswer };
};
