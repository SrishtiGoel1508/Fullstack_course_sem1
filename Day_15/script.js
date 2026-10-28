//Arrays in Java
const students = ["tejas","srinjoy","vaibhav","zaid"];
console.log(students);
console.log(typeof students);
console.log(students[1]);

// students[20] = "srishti";
// console.log(students);

console.log(students[-1]); //reverse indexing does not work in java, only in python
// console.log(students);
// delete students[2]; //the memory is left empty, no value replaces it
// console.log(students);

//push - appends/inserts new elements at the end of an array
students.push("srishti"); 
console.log(students);

students.push("sagar","manas","roushan"); //we can push more than one element at the same time
console.log(students);

const extraStudents = ["shreyansh","keshav","sachin"];
students.push(...extraStudents); //spread operator(...) - spreads the array items into individual elements
console.log(students);

//pop - removes the last element from an array and returns it
const lastStudent = students.pop(); 
console.log(students);
console.log(lastStudent);

//shift - removes first element from an array and returns it
const firstStudent = students.shift();
console.log(students);
console.log(firstStudent);

//unshift - add/inserts new element at zeroeth index
students.unshift("tejas");
console.log(students);

//splice - it requires a strat index and a delete count.
//deletes 
console.log(students);
students.splice(2,1);
console.log(students);

//below, we learnt how to update a value of a key in the object itself
//this proved that we cannot create duplicate keys in an object (overwitten)
const student = {
    name:"tejas",
    name:"rishi",
    age:18,

};
console.log(student);

