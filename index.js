#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// Define the Wellcome Note.
console.log(chalk.blue.bold("\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<0>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n\t<<<< (WELLCOME TO CODE WITH DR.SHAHID - CURRENCY CONVERTOR >>>>\n\t<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<0>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>\n"));
// Define the currencies and their exchange rate.
let exchange_rate = {
    "USD": 1, //Base Currency.
    "EUR": 2.1, //Europeon Currency.
    "JYP": 115, //Japenese Currency.
    "CAD": 1.3, //Canadian Dollar.
    "AUD": 1.66, //Australlian Dollar.
    "PKR": 278, //Pakistani Rupees.
    // Add more currencies and their exchange rate, if you want.
};
// The user to select currency to convert from:
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select currency to convert from.",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select currency to convert into.",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "number",
        message: "Enter your amount to convert."
    }
]);
// Making variables to help the Formula for currency conversion.
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
// Formula for currency conversion.
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display currency.
console.log(chalk.blue(`Converted Amount) = ${chalk.green.bold(converted_amount.toFixed(2))}`));
