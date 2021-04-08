var kodersList = [
    [
        "Fernanda",
        "Palacios Vera"
    ],
    [
        "Jorge",
        "Ochoa"
    ],
    [
        "Naomi",
        "Puertos"
    ],
    [
        "Rurick",
        "Maqueo Poissot"
    ]
]

/*
    -crear un nuevo array que contenga los nombres completos de todos los koders de kodersList
*/
let newArrayKoders = [];

kodersList.forEach(element => {
    newArrayKoders.push(element.join().replace(",", " "));
});

console.log(newArrayKoders);