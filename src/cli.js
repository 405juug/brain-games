#!/usr/bin/env node

import readlineSync from 'readline-sync';

export default function brainGames() {
    console.log('Welcome to the Brain Games!');
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`)

    function isEven(num){
        return num % 2 === 0 
    }

    function evenGame(){
        console.log('Answer "yes" if the number is even, otherwise answer "no".')

        let count = 0;

        while(count < 3){
            const randomNumber = Math.floor(Math.random() * 100);
            console.log(`Question: ${randomNumber}`);
            const answer = readlineSync.question("Your answer: (yes/no)");

            let correct;
            if(isEven(randomNumber)){
                
            }
        }
    }
}
