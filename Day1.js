// Team-Navachar
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let student = {};

rl.question("Enter student name: ", function(name) {
    student.name = name;

    rl.question("Enter student age: ", function(age) {
        student.age = age;

        rl.question("Enter student course: ", function(course) {
            student.course = course;

            rl.question("Enter roll number: ", function(rollNo) {
                student.rollNo = rollNo;

                console.log("\n📘 Student Details:");
                console.log(`Name: ${student.name}`);
                console.log(`Age: ${student.age}`);
                console.log(`Course: ${student.course}`);
                console.log(`Roll No: ${student.rollNo}`);

                rl.close(); 
            });
        });
    });
});
