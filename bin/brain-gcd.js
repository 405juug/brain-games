#!/usr/bin/env node

import readlineSync from "readline-sync";
import brainGames from "../src/cli.js";

function getGCD (a, b) {

    while (b !== 0) {

        const temp = b;
        b = a % b;
        a = temp;

    }
    return a;

}

export default function brainGCD (name) {

    console.log("Find the greatest common divisor of given numbers.");

    let count = 0;

    while (count < 3) {

        let num1; let num2; let
            gcd;

        do {

            num1 = Math.floor(Math.random() * 101);
            num2 = Math.floor(Math.random() * 101);
            gcd = getGCD(
                num1,
                num2
            );

        } while (gcd === 1);

        console.log(`Question: ${num1} ${num2}`);
        const answer = readlineSync.question("Your answer: ");
        const correct = gcd;

        if (Number(answer) === correct) {

            console.log("Correct!");
            count += 1;

        } else {

            console.log(`${answer} is wrong answer ;( Correct answer was ${correct}`);
            console.log(`Let's try again, ${name}!`);
            return;

        }

    }
    console.log(`Congratulations, ${name}!`);

}

const name = brainGames();
brainGCD(name);
