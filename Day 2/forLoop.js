function findHighestMarks(marks) {
    let highest = marks[0]; 

    for (let i = 1; i < marks.length; i++) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
    }

    return highest;
}
let marks_Array = [45, 78, 99, 34, 87, 66];
console.log("Highest Marks: " + findHighestMarks(marks_Array));
