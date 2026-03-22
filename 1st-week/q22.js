// Accept an English alphabet from user and check if it is a consonant or a vowel.

const letter = prompt("Enter a letter:");

const vowel = ['a', 'e', 'i', 'o', 'u'];

function checkVowel(letter) {
    if (vowel.includes(letter.toLowerCase())) {
        console.log(`${letter} is a vowel.`);
    } else {
        console.log(`${letter} is a consonant.`);
    }
}

checkVowel(letter);