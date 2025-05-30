#!/usr/bin/env node

import { generateNumbers, isPrime } from '../src/helpers/helpers.js'
import runGame from '../src/rungame.js'

const brainPrime = () => {
  const a = generateNumbers()

  const question = `${a}`
  const correctAnswer = (isPrime(a)) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'
runGame(description, brainPrime)
