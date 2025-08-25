// Day 3: Arrays & Objects

// -------------------- ARRAY METHODS --------------------

// Example array of numbers
let numbers = [10, 20, 30, 40, 50];

// map -> creates a new array by applying a function to each element
let doubled = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// filter -> creates a new array with elements that pass a condition
let greaterThan25 = numbers.filter(num => num > 25);
console.log("Numbers > 25:", greaterThan25);

// reduce -> reduces array to a single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of numbers:", sum);


// -------------------- OBJECTS & NESTED OBJECTS --------------------

// Object with nested structure
let student = {
    name: "Arjun Yadav",
    age: 20,
    subjects: {
        math: 85,
        science: 90,
        english: 78
    }
};

console.log("Student Name:", student.name);
console.log("Math Marks:", student.subjects.math);


// -------------------- MINI TASK: STUDENT MARKS CALCULATOR --------------------

let students = [
    {
        name: "Rahul",
        marks: { math: 80, science: 75, english: 90 }
    },
    {
        name: "Priya",
        marks: { math: 95, science: 88, english: 92 }
    },
    {
        name: "Aman",
        marks: { math: 60, science: 70, english: 65 }
    }
];

// Calculate total and average marks for each student
students.forEach(student => {
    let total = Object.values(student.marks).reduce((acc, curr) => acc + curr, 0);
    let average = total / Object.keys(student.marks).length;

    console.log(`\nStudent: ${student.name}`);
    console.log(`Total Marks: ${total}`);
    console.log(`Average Marks: ${average.toFixed(2)}`);
});

// Find topper (student with highest total marks)
let topper = students.reduce((prev, current) => {
    let prevTotal = Object.values(prev.marks).reduce((a, b) => a + b, 0);
    let currTotal = Object.values(current.marks).reduce((a, b) => a + b, 0);
    return (currTotal > prevTotal) ? current : prev;
});

console.log(`\nTopper: ${topper.name}`);
