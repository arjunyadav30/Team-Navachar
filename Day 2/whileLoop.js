function findHighestMarks(marks) {
    let i = 0;
    let highest = marks[0];

    while (i < marks.length) {
        if (marks[i] > highest) {
            highest = marks[i];
        }
        i++;
    }
    return highest;
}

let marks_Array = [45, 78, 99, 34, 87, 66];
console.log("Highest Marks: " + findHighestMarks(marks_Array));
