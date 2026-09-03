//C2. Given a 2D marks array (rows = students, columns = subjects), produce each student's average with map + reduce.   



const marks = [
    [80, 70, 90],
    [60, 75, 65],
    [90, 85, 95]
];
const averages = marks.map((student) => {
    const total = student.reduce((sum, mark) => sum + mark, 0);  // calculate total marks
    return total / student.length;                              // calculate average
});
console.log(averages);  // [80, 66.666..., 90]
