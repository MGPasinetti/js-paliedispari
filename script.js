/*
PALINDROMA:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// const userWord = prompt(`Inserisci una parola:`);

// console.log(userWord);


// if (isPalindrome(userWord)) {
//     alert(`La parola inserita è PALINDROMA`);
// } else {
//     alert(`La parola inserita non è palindroma`);
// }


// function isPalindrome(word) {
//     let reverseWord = ``;
//     for (let i = 0; i < word.length; i++) {
//         reverseWord = word[i] + reverseWord;
//     }

//     if (word == reverseWord) {
//         return true;
//     } else {
//         return false;
//     }
// }



/*
PARI E DISPARI:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const evenOrOdd = prompt(`Pari o dispari?`).toLowerCase();
const userNum = parseInt(prompt(`Inserisci un numero da 1 a 5:`));

console.log(evenOrOdd);
console.log(userNum);

const pcNumber = generateRandomBetween(1, 5);

console.log(pcNumber);

const sum = userNum + pcNumber;

console.log(sum);

let result;

if (isEven(sum)) {
    result = `pari`;
} else {
    result = `dispari`;
}

if (evenOrOdd == result) {
    console.log(`Hai vinto`);
} else {
    console.log(`Hai perso`);
}


// FUNCTIONS:
function generateRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(number) {
    if (number % 2 === 0) {
        return true;
    } else {
        return false;
    }
}


