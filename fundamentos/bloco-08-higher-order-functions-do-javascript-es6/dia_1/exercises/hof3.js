const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const algumaCoisa = (correctAnswers, checkAnswers, callback) => {
  let count = 0;
  for (let index = 0; index < checkAnswers.length; index += 1) {
    const actionReturn = callback(correctAnswers[index], checkAnswers[index]);
    count += actionReturn;
  }
  return `O aluno acertou ${count} questões.`
}

const comparation = (correctAnswer, checkAnswer) => {
  if (checkAnswer === correctAnswer) {
    return 1
  }
  if (checkAnswer !== correctAnswer) {
    return -0.5
  }
  if (checkAnswer === 'N.A') {
    return 0
  }
}

console.log(algumaCoisa(RIGHT_ANSWERS, STUDENT_ANSWERS, comparation))