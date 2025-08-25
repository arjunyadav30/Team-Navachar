function findHighestMarks(marks) {
    let highest = marks[0];
    marks.forEach(mark => {
        if (mark > highest) {
            highest = mark;
        }
    });
    return highest;
}

let marks_Array = [45, 78, 99, 34, 87, 66];
console.log("Highest Marks: " + findHighestMarks(marks_Array));
