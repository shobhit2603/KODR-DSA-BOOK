// Extend the previous program and handle the wrong inputs.Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.

let gender = prompt("Enter your gender (M/F):");

gender = gender.toLowerCase();

if (gender === "m") {
    alert(`Good Morning Sir.`);
} else if (gender === "f") {
    alert(`Good Morning Ma'am.`);
} else {
    alert("Wrong Input.");
}