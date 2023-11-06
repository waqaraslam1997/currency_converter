#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow("\n<<== ") + chalk.green.bold("Welcome to Currency Convertor!") + chalk.yellow(" ==>>\n"));
while (true) {
    let objectOfCurrency = {
        /*this object for assign value*/
        "PKR": {
            "USD": 0.0044,
            "GBP": 0.0037,
            "PKR": 1,
        },
        "GBP": {
            "USD": 1.21,
            "PKR": 271.79,
            "GBP": 1
        },
        "USD": {
            "PKR": 225.50,
            "GBP": 0.83,
            "USD": 1
        },
    };
    let currency = await inquirer.prompt([
        {
            type: "list",
            name: "from",
            choices: ["PKR", "USD", "GBP"],
            message: "Please Select your currency"
        },
        {
            type: "list",
            name: "to",
            choices: ["PKR", "USD", "GBP"],
            message: "Please Select your convertion curency ",
        },
        {
            type: "number",
            name: "amount",
            message: "Please enter amount",
        },
    ]);
    const { from, to, amount } = currency;
    if (from && to && amount) {
        let result = objectOfCurrency[from][to] * amount;
        console.log(chalk.green.bold(`\nYour conversion from ${from} to ${to} is ${result.toFixed(2)}\n`));
    }
    else {
        console.log("please enter valid value");
    }
    const { run } = await inquirer.prompt({
        type: "confirm",
        message: "Do you want to do more conversion? ",
        default: true,
        name: "run",
    });
    if (!run) {
        console.log(chalk.magenta.bold("\n== You Converted your Money! Now ENJOY =="));
        break;
    }
}
