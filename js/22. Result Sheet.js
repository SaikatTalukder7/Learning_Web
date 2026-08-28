const results = [
    { name: "Asha", marks: 82 },
    { name: "Rafi", marks: 35 },
    { name: "Mim", marks: 91 },
    { name: "Tanvir", marks: 58 },
    { name: "Sadia", marks: 74 },
];

const grade = (m) =>
    m >= 80 ? "A+" :
    m >= 70 ? "A" :
    m >= 60 ? "B" : "C";

const rankList = results
    .filter((r) => r.marks >= 40)    // remove fail
    .sort((a, b) => b.marks - a.marks) // high → low
    .map(
        (r, i) =>
            `${i + 1}. ${r.name} — ${r.marks} (${grade(r.marks)})`
    );

console.log(rankList);

const avg =
    results.reduce((s, r) => s + r.marks, 0) /
    results.length;

console.log(avg.toFixed(1));   // average with 1 decimal
