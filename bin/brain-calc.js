#!/usr/bin/env node

import runGame from '../src/rungame.js'
import { calcNums, generateMathOperator, generateNumbers } from '../src/helpers/helpers.js'

const brainCalc = () => {
  const a = generateNumbers()
  const b = generateNumbers()
  const operator = generateMathOperator()

  const question = `${a} ${operator} ${b}`
  const correctAnswer = String(calcNums(a, b, operator))

  return [question, correctAnswer]
}

const description = 'What is the result of the expression?'
runGame(description, brainCalc)
