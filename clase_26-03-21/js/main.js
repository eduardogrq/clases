var productsList = [
    {
        name:"producto 1",
        price:12.45,
        category:"Miscellaneous"
    },
    {
        name:"producto 2",
        price:25.13,
        category:"Vegetables"
    },
    {
        name:"producto 3",
        price:45.00,
        category:"Cloths"
    },
    {
        name:"producto 4",
        price:12500.00,
        category:"Computers"
    },
    {
        name:"producto 5",
        price:15500.00,
        category:"Computers"
    },
    {
        name:"producto 6",
        price:8729.00,
        category:"Computers"
    },{
        name:"producto 7",
        price:150.00,
        category:"Cloths"
    },{
        name:"producto 8",
        price:100.00,
        category:"Miscellaneous"
    },{
        name:"producto 9",
        price:50.00,
        category:"Vegetables"
    },{
        name:"producto 10",
        price:200.00,
        category:"Cloths"
    }
]

//Cómo funciona FILTER
const getCategory = (array, selectedCategory) => {
    let result = array.filter(item => item.category === selectedCategory);
    return result
}

let firstFilter = getCategory(productsList, "Computers");

console.log(firstFilter);

//Cómo funciona MAP
//"El { productName } tiene un costo de { price }"

const getNewString = (array) => {
    let result = array.map(item => {
        return `El producto ${item.name} tiene un precio de ${item.price}`
    })
    return result
}
let newString = getNewString(productsList);

console.log(newString);

// Segundo medio para hacerlo con MAP
// let newStrings = productsList.map(item => {
//     return `El producto ${item.name} tiene un precio de ${item.price}`
// })

// console.log(newStrings);

// Utilizando REDUCE

const getTotalPrice = array => {
    let result = array.reduce( (accum, current) => {
        return accum + current.price;
    }, 0) 
    return result
}


let totalPrice = getTotalPrice(productsList);

console.log(getTotalPrice(productsList));