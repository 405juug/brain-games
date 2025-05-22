import readlinesync from 'readline-sync'

const runGame = (description, generateQuestion) => {
  console.log('Welcome to the Brain Games!')
  const name = readlinesync.question('May I have your name? ')
  console.log(`Hello, ${name}!`)
  console.log(description)

  const roundsCount = 3

  for (let i = 0; i < roundsCount; i++) {
    const [question, correctAnswer] = generateQuestion()
    console.log(`Question: ${question}`)
    const answer = readlinesync.question('Your answer: ')

    if (String(answer) !== String(correctAnswer)) {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}`)
      console.log(`Let's try again, ${name}!`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${name}!`)
}

export default runGame
