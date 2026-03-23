// Question 22 using Switch (Check Consonant or Vowel using Switch)

let letter = prompt("Enter a letter: ").toLowerCase();

let vowels = ['a', 'e', 'i', 'o', 'u'];

switch (letter) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        alert(`${letter} is a vowel.`);
        break;
    default:
        alert(`${letter} is a consonant.`);
}