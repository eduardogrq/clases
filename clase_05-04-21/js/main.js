

let mentorsArray = [
    {
        name: "Israel Salinas Martinez",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 8
            },
            {
                signature: "ReactJS",
                score: 8
            }
        ]
    },
    {
        name: "David Cermeño Moranchel",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 7
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    },
    {
        name: "Charles Silva",
        scores: [
            {
                signature: "HTML",
                score: 9
            },
            {
                signature: "CSS",
                score: 9
            },
            {
                signature: "JS",
                score: 10
            },
            {
                signature: "ReactJS",
                score: 9
            }
        ]
    },
    {
        name: "Michael Villalba Sotelo",
        scores: [
            {
                signature: "HTML",
                score: 8
            },
            {
                signature: "CSS",
                score: 10
            },
            {
                signature: "JS",
                score: 9
            },
            {
                signature: "ReactJS",
                score: 10
            }
        ]
    }
];

//mentor - signatures - promedio

let globalAverage = [];

const getTable = () => {
    let titlesArray = [ 'Mentor', 'HTML', 'CSS', 'JS', 'ReactJS', 'Promedio' ]
    
    let createTable = document.createElement("table");
    let createHeader = document.createElement("thead");
    let headerRow = document.createElement("tr")
    titlesArray.forEach(element => {
        let createHead = document.createElement("th");
        let textHead = document.createTextNode(element);

        createHead.appendChild(textHead);
        headerRow.appendChild(createHead)
    })
    createTable.appendChild(createHeader);
    createHeader.appendChild(headerRow)
    document.body.appendChild(createTable);

    let createTbody = document.createElement("tbody");
    

    mentorsArray.forEach(element => {

        let bodyRow = document.createElement("tr");
        let createBody = document.createElement("td");
        let textBody = document.createTextNode(element.name);

        createBody.appendChild(textBody);
        bodyRow.appendChild(createBody);
        createTbody.appendChild(bodyRow);

        element.scores.forEach(element => {

            let createBodyScore = document.createElement("td");
            let textBodyScore = document.createTextNode(element.score);

            createBodyScore.appendChild(textBodyScore);
            bodyRow.appendChild(createBodyScore);

        }) 

        const getMentorAverage = (mentorName) => {
            let mentorScores = mentorsArray.find( (mentor) => {
                return mentor.name === mentorName
            }).scores
            let mentorAverage = mentorScores.reduce( ( accum, current ) => {
                return accum + current.score
            },0 ) / mentorScores.length
        
            let averageBody = document.createElement("td")
            let textAverage = document.createTextNode(mentorAverage)

            averageBody.appendChild(textAverage);
            bodyRow.appendChild(averageBody)

            globalAverage.push(mentorAverage)
        
        }
        getMentorAverage(element.name)
        
    })

    createTable.appendChild(createTbody);

}

getTable()


//Creamos la función para determinar el promedio de todos los mentores.
const getGlobalA = () => {
    let result = globalAverage.reduce((accum, current) => {
        return accum += current;
    }, 0)
    return `El promedio global es: ${(result / globalAverage.length).toFixed(2)}`;
}

let printGlobalA = document.createElement("h1")
let textGlobalA = document.createTextNode(getGlobalA())

printGlobalA.appendChild(textGlobalA);
document.body.appendChild(printGlobalA)


