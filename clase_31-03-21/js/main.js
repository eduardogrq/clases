// Ejercicio 1

// const getInitials = name => {
//     let result = name.split(" ");
//     let initials = result.map(item => {
//         return item.charAt(0);
//     })
//     initials = initials.join('. ')
//     return initials + ".";
    
// }

// let newResult = getInitials("David Álvarez")

// console.log(newResult);


// const getVowels = (...string) => {
//     console.log(string)


// }

// getVowels("hola", "pinshi");


// Ronda 3

const arrayNames = [
    ["Ruben", "Flores"],
    ["Andre", "Vazquez"],
    ["Fernanda", "Palacios"],
    ["Goerge", "Camarillo"],
    ["Ale", "Paez"],
    ["Shari", "Andrade"],
    ["Erick", "Trujillo"],
    ["Arce", "Gutiérrez"],
    ["Juan", "Hernandez"]
]

const getName = array => {
    let result = array.map(element => {
        return element.join(' ') 
    })
    return result
}
let fullName = getName(arrayNames);

console.log(fullName)