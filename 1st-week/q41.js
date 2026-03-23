// Make a choice based calculator using do while switch

const prompt = require('prompt-sync')();

let choice;

do {
    console.log("\nChoose an operation:");
    console.log("1. Addition");
    console.log("2. Subtraction");
    console.log("3. Multiplication");
    console.log("4. Division");
    console.log("5. Exit");

    choice = prompt("Enter your choice: ");

    if (choice === '5') {
        console.log("Exiting the calculator.");
        break;
    }

    if (['1', '2', '3', '4'].includes(choice)) {
        let num1 = parseFloat(prompt("Enter first number: "));
        let num2 = parseFloat(prompt("Enter second number: "));
        let result;

        switch (choice) {
            case '1':
                result = num1 + num2;
                break;
            case '2':
                result = num1 - num2;
                break;
            case '3':
                result = num1 * num2;
                break;
            case '4':
                if (num2 === 0) {
                    console.log("Cannot divide by zero.");
                    continue;
                }
                result = num1 / num2;
                break;
        }

        console.log("Result:", result);
    } else {
        console.log("Invalid choice. Try again.");
    }

} while (true);