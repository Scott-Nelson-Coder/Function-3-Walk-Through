// let myFriends = ["Cody", "Tom", "Huson", "Shawn", "Corey"]

// let logFriends = (friend) => console.log(`${friend} is my friend`)

// myFriends.forEach((friend) => console.log(`${friend} is my friend!`) )
// myFriends.forEach(logFriends)

// let cart = ["Microphones", "sunglasses", "shanker Cups", "Desk Accessories"]

// let statement = cart.map((item) => `Scott buys to many ${item}`)
// console.log(statement)

// let employees = [
//     {
//         name: "Scott",
//         position: "student",
//         salary: 0,
//     },
//     {
//         name: "Brady",
//         position: "Instructor",
//         salary: 80_000,
//     },
//     {
//         name: "Joely",
//         position: "Instructor",
//         salary: 85_000,
//     },

// ]

// let overpaidEmp = employees.filter((person) => person.salary > 82_000 )
// console.log(overpaidEmp)


// let bestEmployees = employees.filter((person) => person.position === "Instructor")

// let employeeOfTheMonth = employees.filter((person) => person.name === "Kyle" || person.name === "joely" )
// console.log(employeeOfTheMonth)

// let cart = [
//     {
//         name: 'Speakers',
//         price: 39.99,
//         onSale: false
//     },
//     {
//         name: 'HDMI Cable',
//         price: 9.99,
//         onSale: true
//     },
//     {
//         name: 'knife',
//         price: 59.99,
//         onSale: false
//     },
//     {
//         name: 'Golf Clubs',
//         price: 299.99,
//         onSale: false
//     },
// ]


// let result = cart.map((item) => {
//     if(item.onSale) {
//         return `You got a great deal on ${item.name} for only ${item.price}`
//     } else {
//         return `You bought expensive stuff`
//     }
// }) 
// console.log(result)

// let total = cart.reduce((acc, item) => (acc + item.price),0).toFixed(2)

// console.log(total)

let arr = [1, 3, 2, 56, 33, 12, 62, 7]
let sortedarr = [...arr] // copys array

//ascending
let ascArr = arr.sort((a, b) => a - b)

//desending 
let decArr = arr.sort((c,d) => d - c )

console.log(ascArr)
console.log(decArr)

let question = ["🐥", "🥚"]
question.sort()
console.log(question)