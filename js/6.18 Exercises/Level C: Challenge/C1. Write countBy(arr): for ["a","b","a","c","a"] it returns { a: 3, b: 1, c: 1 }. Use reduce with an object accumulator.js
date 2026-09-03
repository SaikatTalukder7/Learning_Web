//C1. Write countBy(arr): for ["a","b","a","c","a"] it returns { a: 3, b: 1, c: 1 }. Use reduce with an object accumulator.



function countBy(arr) {
    return arr.reduce((count, item) => {
        count[item] = (count[item] || 0) + 1;  // count item occurrences
        return count;                           // return updated object
    }, {});                                     // start with empty object
}
console.log(countBy(["a", "b", "a", "c", "a"]));  // { a: 3, b: 1, c: 1 }
