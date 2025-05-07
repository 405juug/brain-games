#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainGames from '../src/cli.js';


export function isEven(num){
  return num % 2 === 0 
}

export function evenGame(name){
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let count = 0;

  while(count < 3){
    const randomNumber = Math.floor(Math.random() * 101);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question("Your answer: ");

    const correct = isEven(randomNumber) ? "yes" : "no"
        
    if(answer === correct){
      console.log("Correct!")
      count += 1;
    } else{
      console.log(`${answer} is wrong answer ;( Correct answer was ${correct}`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`)
}

const name = brainGames()

evenGame(name);







