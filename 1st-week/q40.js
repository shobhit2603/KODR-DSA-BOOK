// Print \hello\" until user gives wrong input using do while"

let userInput;

do {
    userInput = prompt("Enter 'hello': ");
    console.log("You entered: " + userInput);
} while (userInput !== "hello");