

let phrase = "La mejor forma de predecir el futuro es creándolo";
let lengthPhrase = phrase.length;
let words = phrase.split(" ").length;
let aMatches = phrase.match(/[aAáÁ]/g).length;

//Ejercicio extra 1
//snake
let snakePhrase = phrase.replace(/ /g, "_");

//Ejercicio extra 2
//Kebab
let kebabPhrase = phrase.replace(/ /g, "-");

//Ejercicio extra 3
//Vowels
let vowelsArray = ["a", "e", "i", "o", "u", "á"];
let newPhraseArray = [];

for(let i = 0; i < lengthPhrase; i++){
    for(let j = 0; j < vowelsArray.length; j++){
        if(phrase[i] == vowelsArray[j]){
            newPhraseArray[i] = phrase[i].toUpperCase();
            break;
        } else {
            newPhraseArray[i] = phrase[i].toLowerCase();
        }
    }
}
newPhraseArray = newPhraseArray.join("");

//Ejercicio 4
//ejercicio 10 primeros caracteres

let firstTen = phrase.slice(0, 10);

//Ejercicio 4
//ejercicio 10 últimos caracteres
let lastTen = phrase.slice(-10);