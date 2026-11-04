// //Functions practice
console.log("-----------PRACTICE-------------")

// //finding cube of a given number
function cubeNumber(n){ // function declaration / definition
    return (n * n * n);
};
let num = prompt("Enter a number"); // taking user input
alert(`The cube of ${num} is ${cubeNumber(num)}`); // function call, displaying the output
console.log(parseInt(cubeNumber(num)));

//----------------------------------------------
//finding out is the user is an adult or not by their age
function isAdult(age){
    if (age >= 18){
        return "Is Adult";
    }
    else{
        return "Not Adult"; // returns some value when condition is proven true or false
    };
};

// function isAdult(age){
//     return age >= 18; // gives the ouput in true or false since it is checking the condition
// };

let userAge = prompt("Enter your age");
alert(isAdult(userAge));
console.log(isAdult(userAge));

//-----------------------------------------------
// calculatin bmi from given height and weight
function calculateBMI(weight, height){
    return weight/(height * height);
};
let weight = prompt("Enter your weight");
let height = prompt("Enter your height");
alert(parseFloat(calculateBMI(weight, height)));
console.log(calculateBMI(weight, height));

//----------------------------------------------
//finding the grade attained from given marks
function gradeFromMarks(marks){
    if (marks >= 90){
        return "A"
    }
    else if(marks >= 75){
        return "B"
    }
    else if(marks >= 50){
        return "C"
    }
    else{
        return "F"
    };
};
let marks = prompt("Enter your marks");
alert(gradeFromMarks(marks));
console.log(gradeFromMarks(marks));

//----------------------------------------------
// counting the number of vowels in a given word
function countVowels(word){
    let i = 0;
    let count = 0;
    while (i < word.length){
        if (word[i] == "a" || word[i] == "e" ||word[i] == "i" ||word[i] == "o" ||word[i] == "u"){ 
            count ++;
        };
        i ++;
    };
    return count
};
word = prompt("Ente a word");
alert(countVowels(word));
console.log(countVowels(word));

// || -> 'or', && -> 'and'

//---------------------------------------------
///finding the sum of the square and the cube of a number
function sumOfSquareAndCube(n){
    function square(n){
        return (n * n)
    };
    function cube(n){
        return (n * n * n)
    };
    sum = square(n) + cube(n)
    return sum;
};
let num1 = prompt("Enter a number")
alert(parseInt(sumOfSquareAndCube(num1)));
console.log(sumOfSquareAndCube(num1));

//---------------------------------------------
//finding the discount to be applied
function applyDiscount(price, isMember = false){
    if (isMember){
        return (price - (price*0.1));
    } else{
        return price;
    };
};
let price = Number(prompt("Enter the price"));
let x = prompt("Are you a member? (y/n)");
let isMember;
if(x === "y" || x ==="Y" || x === "yes"){
    alert(applyDiscount(price, true));
}
else{
    alert(applyDiscount(price));
};
