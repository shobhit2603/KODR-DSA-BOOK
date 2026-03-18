// Accept name and age from the user.Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter.Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

if (age >= 18) {
    alert(`Hello ${name}, you are a valid voter!`);
} else {
    alert(`Sorry ${name}, you can't cast the vote!`);
    alert(`You can vote after ${18 - age} years.`);
}