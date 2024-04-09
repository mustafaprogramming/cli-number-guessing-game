#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.blueBright.bold(`===========================================================================`));
console.log(chalk.blueBright.bold(`\n\t\tWelcome to Mustafa - CLI Number Guessing Game\n`));
console.log(chalk.blueBright.bold(`===========================================================================`));
let resume = "YES";
do {
    const randomnumber = Math.floor(Math.random() * 5 + 1);
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "UserNumber",
            message: chalk.yellowBright.bold("Enter Your Guess Number(Limit 1-5): ")
        },
    ]);
    if (answer.UserNumber > 0 && answer.UserNumber <= 5) {
        if (answer.UserNumber === randomnumber) {
            console.log(chalk.greenBright.bold(`<== Congratulation! You Guessed the Correct Number ==>`));
        }
        else {
            console.log(chalk.redBright.bold(`Sorry, Your guess was INCORRECT!`));
        }
    }
    else {
        console.log(chalk.redBright(`<== Please Enter a Number Within The Limit ==>`));
    }
    const continuation = await inquirer.prompt([
        {
            type: "list",
            name: "ans",
            message: "Do you want to continue playing the game?",
            choices: [chalk.greenBright.bold("YES!"), chalk.redBright.bold("NO")]
        }
    ]);
    resume = continuation.ans;
} while (resume !== chalk.redBright.bold("NO"));
