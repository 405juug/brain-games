#!/usr/bin/env node

import { generateNumbers, isEven } from '../src/helpers/helpers.js'
import runGame from '../src/rungame.js'

const brainEven = () => {
  const a = generateNumbers()

  const question = `${a}`
  const correctAnswer = isEven(a) ? 'yes' : 'no'

  return [question, correctAnswer]
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".'
runGame(description, brainEven)
