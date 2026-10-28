const studentName = "Srishti";
const studentCity = "Delhi";
const studentRollNumber = "2616400141";
const studentCollege = "ZSAI";

const student = {
    name:"Srishti",
    city:"Delhi",
    college:"ZSAI",
    rollNumber:"2616400141"
};

console.log(student)

console.log(student.rollNumber);

console.log(student["name"]);
console.log(student.rollNumber);

console.log(student.phone);

student["country"] = "India";
console.log(student)

student["city"] = "Mumbai";
console.log(student);

student["college"] = "Zenith School of AI";
console.log(student);

const teacher = student;
teacher.city = "Jaipur";
console.log(student);
console.log(teacher);
