// Accept a year and check if it a leap year or not(google to find out what's a leap year)

let year = prompt("Enter a year:");

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    alert(`${year} is a leap year.`);
} else {
    alert(`${year} is not a leap year.`);
}