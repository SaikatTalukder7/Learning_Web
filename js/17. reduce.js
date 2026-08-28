const bill = [120, 80, 300];
const total = bill.reduce((sum, item) => sum + item, 0);
console.log(total);



const nums = [13, 7, 42, 9];
const max = nums.reduce(
    (m, n) => (n > m ? n : m),
    -Infinity
);
console.log(max);



const votes = ["yes", "no", "yes", "yes"];
const yesCount = votes.reduce(
    (count, v) => (v === "yes" ? count + 1 : count),
    0
);
console.log(yesCount);



const students = [
    { name: "Asha", dept: "CSE" },
    { name: "Rafi", dept: "EEE" },
    { name: "Mim", dept: "CSE" },
];
const byDept = students.reduce((groups, s) => {
    if (!groups[s.dept]) groups[s.dept] = [];

    groups[s.dept].push(s.name);

    return groups;
}, {});
console.log(byDept);
