// Make a choice based calculator using do while switch

let choice;

do {
    choice = prompt("Choose an operation: \n1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n5. Exit");
    switch (choice) {
        case '1':
            let num1 = parseFloat(prompt("Enter first number: "));
            let num2 = parseFloat(prompt("Enter second number: "));
            alert(`Result: ${num1 + num2}`);
            break;
        case '2':
            let num3 = parseFloat(prompt("Enter first number: "));
            let num4 = parseFloat(prompt("Enter second number: "));
            alert(`Result: ${num3 - num4}`);
            break;
        case '3':
            let num5 = parseFloat(prompt("Enter first number: "));
            let num6 = parseFloat(prompt("Enter second number: "));
            alert(`Result: ${num5 * num6}`);
            break;
        case '4':
            let num7 = parseFloat(prompt("Enter first number: "));
            let num8 = parseFloat(prompt("Enter second number: "));
            alert(`Result: ${num7 / num8}`);
            break;
        case '5':
            alert("Exiting the calculator.");
            break;
        default:
            alert("Invalid choice. Please try again.");
    }
} while (choice !== '5');   