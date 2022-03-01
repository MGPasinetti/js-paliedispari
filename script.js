/*
PALINDROMA:
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
*/

// const userWord = prompt(`Inserisci una parola:`);

// console.log(userWord);

// console.log(reverse(userWord));


// if (isPalindrome(userWord, reverse(userWord))) {
//     alert(`La parola inserita è PALINDROMA`);
// } else {
//     alert(`La parola inserita non è palindroma`);
// }

// function isPalindrome(word, wordReverse) {
//     if (word === wordReverse) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function reverse(s){
//     return [...s].reverse().join("");
// }



/*
PARI E DISPARI:
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto.
*/

const evenOrOdd = prompt(`Pari o dispari?`);
const userNum = parseInt(prompt(`Inserisci un numero da 1 a 5:`))

const pcNumber = Math.floor(Math.random() * 5) + 1;


