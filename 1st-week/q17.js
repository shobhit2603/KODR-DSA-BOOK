// Accept a day number between 1 - 7 and print the corresponding day name.

let day = Number(prompt("Enter a day of the week (1-7): "));

if (day == 1) {
    alert("Monday");
} else if (day == 2) {
    alert("Tuesday");
} else if (day == 3) {
    alert("Wednesday");
} else if (day == 4) {
    alert("Thursday");
} else if (day == 5) {
    alert("Friday");
} else if (day == 6) {
    alert("Saturday");
} else if (day == 7) {
    alert("Sunday");
} else {
    alert("Invalid input. Please enter a number between 1 and 7.");
}