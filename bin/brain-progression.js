#!/usr/bin/env node

import readlineSync from 'readline-sync';
import brainGames from '../src/cli.js';


function genProgression(length = 10){
    const num1 = Math.floor(Math.random() * 11);
    const num2 = Math.floor(Math.random() * 11);
    const progressionArray = [];

    for(let i = 0; i < length; i++){
        progressionArray.push(num1 + i * num2);
    }

    return progressionArray;
}

export default function brainProgress(name){
    console.log('What number is missing in the progression?');

    let count = 0;

    while(count < 3){
        const progression = genProgression();
        const hiddenNum = Math.floor(Math.random() * progression.length);
        const correct = progression[hiddenNum];

        const progressionFinal = progression.map((num, i) => (i === hiddenNum ? '..' : num)).join(' ');
        console.log(`Question: ${progressionFinal}`);
        const answer = readlineSync.question('Your answer: ');

        if(Number(answer) === correct){
            console.log("Correct!");
            count += 1;
        } else{
            console.log(`${answer} is wrong answer ;(. Correct answer was ${correct}`);
            console.log(`Let's try again, ${name}!`);
            return;
        }
    }
    console.log(`Congratulations, ${name}!`);
}

const name = brainGames();
brainProgress(name);