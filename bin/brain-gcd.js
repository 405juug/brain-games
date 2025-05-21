#!/usr/bin/env node

import { gcd, generateNumbers } from '../src/helpers/helpers.js';
import runGame from '../src/rungame.js'


const brainGCD = () => {
  gcd()

  const a = generateNumbers();
  const b = generateNumbers();

  const question = `${a} ${b}`;
  const correctAnswer = String(gcd(a, b));

  return [question, correctAnswer]
}

const description = 'Find the greatest common divisor of given numbers.'
runGame(description, brainGCD);