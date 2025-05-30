#!/usr/bin/env node

import { genProgression, hiddenNum } from '../src/helpers/helpers.js'
import runGame from '../src/rungame.js'

const brainProgress = () => {
  const arr = genProgression(10)
  const [newArr, correctAnswer] = hiddenNum(arr)

  const question = newArr.join(' ')

  return [question, correctAnswer]
}

const description = 'What number is missing in the progression?'
runGame(description, brainProgress)
