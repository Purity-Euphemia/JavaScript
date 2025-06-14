const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const names = new Array(4);
const hours = new Array(4);
const pays = new Array(4);
const federalRates = new Array(4);
const stateRates = new Array(4);
let employeeCount = 0;

function ask(question) {
    return new Promise((resolve) => {
        readline.question(question, (answer) => resolve(answer));
    });
}

async function main() {
    while (true) {
        console.log("\nWELCOME TO SEMICOLON PAYROLL SYSTEM");
        console.log("1. Add Employee Payroll");
        console.log("2. View Employee Payroll");
        console.log("3. Update Employee Payroll");
        console.log("4. Exit");

        const choice = +(await ask("Enter your choice (1 to 4): "));

        if (choice < 1 || choice > 4) {
            console.log("Wrong number. Try again.");
            continue;
        }

        if (choice === 1) {
            if (employeeCount >= 4) {
                console.log("You cannot add more than 4 employees.");
            } else {
                const name = await ask("Enter employee name: ");

                if (names.includes(name)) {
                    console.log("This name already exists.");
                } else {
                    const h = +(await ask("Enter hours worked: "));
                    if (h > 40) {
                        console.log("You cannot enter more than 40 hours.");
                    } else {
                        const pay = +(await ask("Enter hourly pay: "));
                        const federal = +(await ask("Enter federal tax rate (example 0.1): "));
                        const state = +(await ask("Enter state tax rate (example 0.05): "));

                        names[employeeCount] = name;
                        hours[employeeCount] = h;
                        pays[employeeCount] = pay;
                        federalRates[employeeCount] = federal;
                        stateRates[employeeCount] = state;

                        employeeCount++;
                        console.log("Employee added successfully.");
                    }
                }
            }
        }

        else if (choice === 2) {
            if (employeeCount === 0) {
                console.log("No employees to show.");
            } else {
                for (let i = 0; i < employeeCount; i++) {
                    const grossPay = hours[i] * pays[i];
                    const federalTax = grossPay * federalRates[i];
                    const stateTax = grossPay * stateRates[i];
                    const netPay = grossPay - federalTax - stateTax;

                    console.log("------------------------------");
                    console.log("Employee " + (i + 1));
                    console.log("Name: " + names[i]);
                    console.log("Hours Worked: " + hours[i]);
                    console.log("Hourly Pay: " + pays[i]);
                    console.log("Gross Pay: " + grossPay);
                    console.log("Federal Tax: " + federalTax);
                    console.log("State Tax: " + stateTax);
                    console.log("Net Pay: " + netPay);
                    console.log("------------------------------");
                }
            }
        }

        else if (choice === 3) {
            if (employeeCount === 0) {
                console.log("No employees to update.");
            } else {
                for (let i = 0; i < employeeCount; i++) {
                    console.log((i + 1) + ". " + names[i]);
                }

                const number = +(await ask("Enter number of employee to update: "));

                if (number < 1 || number > employeeCount) {
                    console.log("Invalid employee number.");
                } else {
                    const newName = await ask("Enter new name: ");
                    let exists = false;

                    for (let i = 0; i < employeeCount; i++) {
                        if (i !== (number - 1) && names[i] === newName) {
                            exists = true;
                            break;
                        }
                    }

                    if (exists) {
                        console.log("This name already exists.");
                    } else {
                        const newHours = +(await ask("Enter new hours worked: "));
                        if (newHours > 40) {
                            console.log("You cannot enter more than 40 hours.");
                        } else {
                            const newPay = +(await ask("Enter new hourly pay: "));
                            const newFederal = +(await ask("Enter new federal tax rate: "));
                            const newState = +(await ask("Enter new state tax rate: "));

                            const index = number - 1;
                            names[index] = newName;
                            hours[index] = newHours;
                            pays[index] = newPay;
                            federalRates[index] = newFederal;
                            stateRates[index] = newState;

                            console.log("Employee updated successfully.");
                        }
                    }
                }
            }
        }

        else if (choice === 4) {
            console.log("Thank you for using the payroll system.");
            break;
        }
    }

    readline.close();
}
