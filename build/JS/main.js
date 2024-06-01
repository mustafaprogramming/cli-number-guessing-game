#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
console.log(chalk.blue(`\n\n\t     _-^+-^+‾       ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦       ‾+^-+^-_`));
console.log(chalk.blue(`\t  <==!~~ ☆*: .｡. o(≧ ${chalk.greenBright.bold(` Welcome To Mustafa's  -  CLI Number Guessing Game`)} ≦)o .｡.:*☆ ~~!==>`));
console.log(chalk.blue(`\t     ‾-∨+-∨+_       ◦◦◦◦◦◦          ◦◦◦ ◎ ◉ ◯ ◉ ◎ ◦◦◦          ◦◦◦◦◦◦       _+∨-+∨-‾\n\n`));
let resume = chalk.redBright.bold("NO");
do {
    const randomnumber = [Math.floor(Math.random() * 50 + 10), Math.floor(Math.random() * 60 + 10), Math.floor(Math.random() * 90 + 10), Math.floor(Math.random() * 80 + 10), Math.floor(Math.random() * 70 + 10),];
    console.log(chalk.blueBright(`\n\t\t\t\t     [${chalk.redBright.bold(1)}]     [${chalk.redBright.bold(2)}]     [${chalk.redBright.bold(3)}]     [${chalk.redBright.bold(4)}]     [${chalk.redBright.bold(5)}]\n`));
    console.log(chalk.yellowBright(`\t\t\t    --oo(  ${chalk.greenBright(`-(${chalk.blueBright.bold(randomnumber[0])})-`)}  ${chalk.greenBright(`-(${chalk.blueBright.bold(randomnumber[1])})-`)}  ${chalk.greenBright(`-(${chalk.blueBright.bold(randomnumber[2])})-`)}  ${chalk.greenBright(`-(${chalk.blueBright.bold(randomnumber[3])})-`)}  ${chalk.greenBright(`-(${chalk.blueBright.bold(randomnumber[4])})-`)}  )oo--`));
    const randomindex = Math.floor(Math.random() * 5);
    console.log(chalk.yellowBright(`\n\n\t\t\t\t\t       --o[{ ${chalk.bgGreenBright(` ${chalk.redBright.bold(`?`)} `)} }]o--\n\n\n`));
    const answer = await inquirer.prompt([
        {
            type: "number",
            name: "UserNumber",
            message: chalk.yellowBright.bold("Enter The index of the number you think is the hidden number: ")
        },
    ]);
    if (answer.UserNumber > 0 && answer.UserNumber <= 5) {
        if (answer.UserNumber - 1 === randomindex) {
            console.log(chalk.greenBright(`\n\n\n\t\t\t   -=({Congratulation! You Guessed the Correct Number})=-`));
            console.log(chalk.yellowBright(`\n\n\t\t\t\t\t\t--o[{ ${chalk.blueBright.bold(randomnumber[randomindex])} }]o--\n\n`));
        }
        else {
            console.log(chalk.redBright.bold(`\n\n\t\t\t\t -=({ Sorry, Your Guess was Incorrect! })=-\n\n`));
        }
    }
    else {
        console.log(chalk.redBright.bold(`\n\n\t\t\t\t-=({Please Enter a Correct index number})=-\n\n`));
    }
    const continuation = await inquirer.prompt([
        {
            type: "list",
            name: "ans",
            message: chalk.yellowBright.bold("Do you want to continue playing the game?"),
            choices: [chalk.greenBright.bold("YES!"), chalk.redBright.bold("NO")]
        }
    ]);
    resume = continuation.ans;
} while (resume !== chalk.redBright.bold("NO"));
