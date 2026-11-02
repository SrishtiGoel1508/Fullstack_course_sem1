console.log("---------Hello!----------")

//--------------Functions----------------
//function declaration - it will not get printed/displayed until or unless the function is called
function greet(){
    console.log("Hello, welcome to class!");
};

// invocation / run
greet();

// prints the same thing again and again, there is no user input option.
function greet1(){
    const name = "Ajay";
    console.log(`Hello, ${name}.`);
};

greet1();
greet1();

// function is now reusable, we added parameters to change the name input according to user.
function greetStudent(studentName){
    console.log(`Hello, ${studentName}.`);
};

greetStudent("Anuj");
greetStudent("Srishti");

//---------------Products-------------------
console.log("--------Products----------")
const data = {
  "products": [
    {
      "id": 26,
      "title": "Green Chili Pepper",
      "price": 0.99
    },
    {
      "id": 27,
      "title": "Honey Jar",
      "price": 6.99
    },
    {
      "id": 28,
      "title": "Ice Cream",
      "price": 5.49
    },
    {
      "id": 29,
      "title": "Juice",
      "price": 3.99
    },
    {
      "id": 30,
      "title": "Kiwi",
      "price": 2.49
    },
    {
      "id": 31,
      "title": "Lemon",
      "price": 0.79
    },
    {
      "id": 32,
      "title": "Milk",
      "price": 3.49
    },
    {
      "id": 33,
      "title": "Mulberry",
      "price": 4.99
    },
    {
      "id": 34,
      "title": "Nescafe Coffee",
      "price": 7.99
    },
    {
      "id": 35,
      "title": "Potatoes",
      "price": 2.29
    }
  ],
  "total": 194,
  "skip": 25,
  "limit": 10
};

function printPrice(itemName, itemPrice){
    const amount = itemPrice * 100;
    console.log(`${itemName} : ${Math.round(amount)}`);
};
printPrice("Kiwi", 2.49);
printPrice("Honey Jar", 6.99);

//----------------Sum------------------------
console.log("------------Sum----------")
function add(a,b){
    console.log(a+b);
}
// implicit return - if function has no return statement, calling it gives back undefined.
let result = add(2,3); 
console.log(result);
console.log(add(10,20) * 2);

// in finctions, return stores the output from the function to carry forward the result.
function sumOfNumbers(a,b){
    const answer = a + b;
    return answer;
};
let result1 = sumOfNumbers(2,3);
console.log(result1);
console.log(sumOfNumbers(10,20) * 2);

//after the return statement, anything below it will not be executed, it is not possible.
function check(){
    return "done";
    console.log("Will this print?"); // this line was not executed because of the return statement before it
};
console.log(check());

//------------Edge cases--------------------
console.log("--------Edge Cases----------")
//If parameters > arguments: Extra parameters get the value 'undefined'
function introduce(name,city){
    console.log(`${name} lives in ${city}`);
}
introduce("Ajay");

//If parameters < arguments: Extra arguments are discarded, but no error shows.
function introduction(name = "Likhilesh",city = "Delhi"){
    console.log(`${name} lives in ${city}`);
}
introduction();
introduction("Ajay");
introduction(undefined, "Pune");
introduction("Ajay","Pune","India");

//Default value - if no argument is given, the default value is considered.
console.log("--------Default Values----------")
function welcome(name = "Guest"){
    console.log(`Welcome, ${name}.`);
}
welcome();
welcome("Srishti");

