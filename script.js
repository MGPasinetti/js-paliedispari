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

const userChoice = prompt(`PARI o DISPARI?`);
const userNum = parseInt(prompt(`Inserisci un numero da 1 a 5:`));
console.log(userChoice, userNum);

const randomNum = generateRandomNum(1, 5);
console.log(`random number:`, randomNum);

let sum = userNum + randomNum;
console.log(`totale:`, sum);


let result;
isEven(sum);

console.log(result);

(userChoice === result) ? console.log(`Hai vinto`) : console.log(`Hai perso`)

// FUNCTIONS
function generateRandomNum(min, max) {
	return Math.floor(Math.random() * max) + min; 
}

function isEven(num) {
	(num % 2 === 0) ? result = `pari` : result = `dispari`;
}


