const kodersCollection = [
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 80
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Ale', 
        lastName: 'Paez',
        birthday: '1998/05/12',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 90
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    },
    {
        name: 'Juan Pablo', 
        lastName: 'Sánchez',
        birthday: '1994/10/26',
        generation: 10,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 100
            },
            {
                module: 'Backend',
                score: 95
            },
            {
                module: 'Cloud',
                score: 80
            },
        ]
    },
    {
        name: 'Oscar', 
        lastName: 'Ruiz',
        birthday: '1996/06/24',
        generation: 1,
        bootcamp: 'Python',
        scores: [
            {
                module: 'Frontend',
                score: 98
            },
            {
                module: 'Backend',
                score: 100
            },
            {
                module: 'Cloud',
                score: 70
            },
        ]
    },
    {
        name: 'Javier', 
        lastName: 'López',
        birthday: '1996/06/24',
        generation: 9,
        bootcamp: 'JavaScript',
        scores: [
            {
                module: 'Frontend',
                score: 80
            },
            {
                module: 'Backend',
                score: 90
            },
            {
                module: 'Cloud',
                score: 100
            },
        ]
    }
]

function Koder (name, lastName, birthdate, generation, bootcamp, scores){
    this.name = name;
    this.lastName = lastName;
    this.birthdate = birthdate;
    this.generation = generation;
    this.bootcamp = bootcamp;
    this.scores = scores;
    // Ejercicio 1
    this.getAge = function(){
        let today = new Date();
        let birthdate = new Date(this.birthdate);
        let age = today.getFullYear() - birthdate.getFullYear()
        return age;
    }
    // Ejercicio 2
    this.getAvg = function () {
        const sumaScore = this.scores.reduce((accum, current) => {
            return accum += current.score
        }, 0)
        const avg = sumaScore / this.scores.length;
        return avg;
    }
    
}

const createKoders = array => {
    return array.map(element => {
        return new Koder(element.name, element.lastName, element.birthday, element.generation, element.bootcamp, element.scores)
    });
}

let newKodersArray = createKoders(kodersCollection);

console.table(newKodersArray);

// Ejercicio 3 y 4 *********************************************
// Koders que pertenezcan a Javascript y a python

const jsArray = newKodersArray.filter(item => item.bootcamp === "JavaScript");

const pythonArray = newKodersArray.filter(item => item.bootcamp === "Python");

console.log(jsArray)

console.log(pythonArray)


