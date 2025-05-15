#!/usr/bin/env node

import readlineSync from 'readline-sync'
import brainGames from '../src/cli.js'

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num !== 1
}

export function brainPrime(name) {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')

  let count = 0

  while (count < 3) {
    const random = Math.floor(Math.random() * 101)

    console.log(`Question: ${random}`)
    const answer = readlineSync.question('Your answer: ')
    const correct = isPrime(random)
      ? 'yes'
      : 'no'

    if (answer === correct) {
      console.log('Correct!')
      count += 1
    }
    else {
      console.log(`${answer} is wrong answer ;( Correct answer was ${correct}`)
      console.log(`Let's try again, ${name}!`)
      return
    }
  }
  console.log(`Congratulations, ${name}!`)
}

const name = brainGames()

brainPrime(name)
