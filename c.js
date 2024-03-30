#! /usr/bin/env node
import inquirer from "inquirer";
const inp = await inquirer.prompt([
    { message: "\nEnter 1st Number: ", type: "number", name: "num1" },
    { message: "\nEnter 2nd Number: ", type: "number", name: "num2" },
    {
        message: "\nSelect Operator: ",
        type: "list",
        name: "opr",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (inp.opr === "Addition") {
    console.log("\nYour Answer is :", inp.num1 + inp.num2);
}
else if (inp.opr === "Subtraction") {
    console.log("\nYour Answer is :", inp.num1 - inp.num2);
}
else if (inp.opr === "Multiplication") {
    console.log("\nYour Answer is :", inp.num1 * inp.num2);
}
else if (inp.opr === "Division") {
    console.log("\nYour Answer is :", inp.num1 / inp.num2);
}
;
const ques = await inquirer.prompt([
    {
        message: "\nDo you want to continue:\n1)If (Yes) press Enter\n2)If (No) press Ctrl+C ",
        type: "list",
        name: "cho",
        choices: ["Yes"],
    },
]);
while (ques.cho == "Yes") {
    const inp = await inquirer.prompt([
        { message: "\nEnter 1st Number: ", type: "number", name: "num1" },
        { message: "\nEnter 2nd Number: ", type: "number", name: "num2" },
        {
            message: "\nSelect Operator: ",
            type: "list",
            name: "opr",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);
    if (inp.opr === "Addition") {
        console.log("\nYour Answer is :", inp.num1 + inp.num2);
    }
    else if (inp.opr === "Subtraction") {
        console.log("\nYour Answer is :", inp.num1 - inp.num2);
    }
    else if (inp.opr === "Multiplication") {
        console.log("\nYour Answer is :", inp.num1 * inp.num2);
    }
    else if (inp.opr === "Division") {
        console.log("\nYour Answer is :", inp.num1 / inp.num2);
    }
    ;
    const ques = await inquirer.prompt([
        {
            message: "\nDo you want to continue:\n1)If (Yes) press Enter\n2)If (No) press Ctrl+C",
            type: "list",
            name: "cho",
            choices: ["Yes"],
        },
    ]);
}
