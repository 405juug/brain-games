#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainGames from '../src/cli.js';

export default function brainCalc(name){
  console.log('What is the result of the expression?');

  let count = 0;

  while(count < 3){

    const num1 = Math.floor(Math.random() * 101);
    const num2 = Math.floor(Math.random() * 101);
        
    const num1Mul = Math.floor(Math.random() * 11);
    const num2Mul = Math.floor(Math.random() * 11);

    const randomAddition = `${num1} + ${num2}`;

    console.log(`Question: ${randomAddition}`);
    const answerPlus = readlineSync.question("Your answer: ");

    const correctPlus = num1 + num2

    if(Number(answerPlus) === correctPlus){
      console.log("Correct!");
      count += 1;
    } else{
      console.log(`${answerPlus} is wrong answer ;( Correct answer was ${correctPlus}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    const a = Math.max(num1, num2);
    const b = Math.min(num1, num2);

    const substraction = `${a} - ${b}`;

    const randomSubstraction = substraction;

    console.log(`Question: ${randomSubstraction}`);
    const answerSub = readlineSync.question("Your answer: ");

    const correctSub = a - b;

    if(Number(answerSub) === correctSub){
      console.log("Correct!");
      count += 1;
    } else{
      console.log(`${answerSub} is wrong answer ;( Correct answer was ${correctSub}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    const randomMultiply = `${num1Mul} * ${num2Mul}`;

    console.log(`Question: ${randomMultiply}`);
    const answerMul = readlineSync.question("Your answer: ");

    const correctMul = num1Mul * num2Mul;

    if(Number(answerMul) === correctMul){
      console.log("Correct!");
      count += 1;
    } else{
      console.log(`${answerMul} is wrong answer ;( Correct answer was ${correctMul}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`)
}

const name = brainGames()

brainCalc(name);