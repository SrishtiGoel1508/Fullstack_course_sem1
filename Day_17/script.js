
// const data = {
//   "products": [
//     {
//       "id": 26,
//       "title": "Green Chili Pepper",
//       "price": 0.99
//     },
//     {
//       "id": 27,
//       "title": "Honey Jar",
//       "price": 6.99
//     },
//     {
//       "id": 28,
//       "title": "Ice Cream",
//       "price": 5.49
//     },
//     {
//       "id": 29,
//       "title": "Juice",
//       "price": 3.99
//     },
//     {
//       "id": 30,
//       "title": "Kiwi",
//       "price": 2.49
//     },
//     {
//       "id": 31,
//       "title": "Lemon",
//       "price": 0.79
//     },
//     {
//       "id": 32,
//       "title": "Milk",
//       "price": 3.49
//     },
//     {
//       "id": 33,
//       "title": "Mulberry",
//       "price": 4.99
//     },
//     {
//       "id": 34,
//       "title": "Nescafe Coffee",
//       "price": 7.99
//     },
//     {
//       "id": 35,
//       "title": "Potatoes",
//       "price": 2.29
//     }
//   ],
//   "total": 194,
//   "skip": 25,
//   "limit": 10
// };

// //destructuring of a dictionary - name has to be exactly the same, order does not matter
// const {products,total} = data;
// console.log(products);
// console.log(total);

//destructuring of an array - order matters most, not the name since they do not have any key-value pairs
//the only key-value pars that exist is given by default through its indexing.
// const [a, b, c] = products;
// console.log(c);
// console.log(a);

// //while loop
// console.log("--------while loop---------")
// let i = 1;
// while (i <= 0){
//     console.log(`2 x ${i} = ${2 * i}`)
//     i ++
// }

// //do-while loop (runs atleast once)
// console.log("-----do-while loop--------")
// let j = 1;
// do{
//     console.log(`2 x ${j} = ${2 * j}`)
//     j ++
// } while(j <= 0);

// let k = 1;
// let sum = 0;
// while (k <= 10){
//     sum = sum + k
//     k ++
// };
// console.log(sum);

//Prompt
// console.log("--------Prompt------------")
// let username = prompt("Type in your name") // takes input from the browser
// let age = prompt("Type in your age")
// // alert(`My username is ${username} and age is ${age}`) //shows/displays output ont he browser in a pop-up
// console.log(typeof username)
// console.log(typeof age)

// let age_num = Number(age);
// console.log(age)
// console.log(typeof age_num)

// console.log("-----------parseInt--------")
// let weight = prompt("Enter your weight")
// console.log(weight)
// console.log(typeof weight)  
// let weight_int = parseInt(weight) // parseInt keeps the number part, but trims off the excess including letters and decimals
// console.log(typeof weight_int) // it ignores the spaces given at the start, but counts the spaces added in between.
// console.log(weight_int)

// console.log("------------parseFloat----------")
// let height = prompt("Type in your height")
// console.log(typeof height)
// console.log(height)
// let height_float = parseFloat(height)
// console.log(typeof height_float)
// console.log(height_float)

//math functions
// console.log(Math.round(2.5))
// console.log(Math.round(3.5))
// console.log(Math.min(2,5))
// console.log(Math.max(2,5))

let total = 0
let answer;
do {
    let answer = prompt("enter your expense")
    if (answer == "done"){
        break;
    }
    else {
        total += parseFloat(answer)
    }
}while (answer !== "done");
console.log(total)