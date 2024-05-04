#! /usr/bin/env node

import inquirer from "inquirer";

let myBalance = 15000; //Dollar
let myPin = 1212;
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "Enter your pin: ",
            type: "number"
        }
    ]
);

if (pinAnswer.pin === myPin){
    console.log(" VERIFIED! ");

    let operationAns = await inquirer.prompt(
        [
            {
                name: "operation",
                message: "Please select option: ",
                type: "list",
                choices: ["withdraw", "fast cash", "check balance"]
            }
        ]
    );

    if (operationAns.operation === "withdraw"){
        let amountAns = await inquirer.prompt(
            [
                {
                    name: "amount",
                    message: "Enter your amount: ",
                    type: "number"
                }
            ]
        );

        if (amountAns.amount > myBalance){
            console.log(" INSUFFICIENT BALANCE ")
        }

        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is " + myBalance)
        }
    }

    else if (operationAns.operation === "fast cash"){
        let fast = await inquirer.prompt(
            [
                {
                    name: "fastcash",
                    message: "Select the amount to withdraw: ",
                    type: "list",
                    choices: [1000, 2000, 5000, 10000]
                }
            ]
        );
        myBalance -= fast.fastcash;
        console.log(`You have successfully withdrawl ${fast.fastcash} \n Your remaining balance is ${myBalance}`)
    }

    else if (operationAns.operation === "check balance"){
        console.log(`Your remaining balance is ${myBalance}`)
    }
}

else {
    console.log(" INCORRECT PIN CODE! ");
}