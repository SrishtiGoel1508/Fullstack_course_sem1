// const student = {
//     name:"srishti",
//     rollNumber:2616400141,
//     city:"Gurgaon"
// };

// //Destructuring the object in one single line of code (in object, key is important)
// const {name, city, rollNumber} = student;

// console.log(student);
// console.log(name);
// console.log(rollNumber);

// const arr = ["apple", "banana", "cherry"];

// //Destructuring in an array (in array, index/position is important)
// const [x,y,z] = arr;

// console.log(arr);
// console.log(x);
// console.log(z);

//----------------------------------------------------

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
// }

// const {products} = data;
// let i = 0;
// const n = products.length
// while (i < n){
//     const product = products[i];
//     console.log(product.title,":",Math.round(product.price * 100));
//     i ++
// };


// const {products} = data;
// let i = 0;
// let sum = 0
// const n = products.length;
// while (i < n){
//     const product = products[i]
//     sum += Math.round(product.price * 100)
//     i ++
// };
// console.log("Rs.",sum);


// // const {products} = data;
// // let i = 0;
// // let max = 0;
// // let product_name = 0
// // const n = products.length;
// while (i < n){
//     const product = products[i];
//     if (max < product.price){
//         max = product.price;
//         product_name = product.title
//     }
//     i+=1;
// };
// console.log(product_name);

