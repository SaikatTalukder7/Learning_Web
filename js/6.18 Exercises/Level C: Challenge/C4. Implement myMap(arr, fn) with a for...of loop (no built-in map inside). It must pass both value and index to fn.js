//C4. Implement myMap(arr, fn) with a for...of loop (no built-in map inside). It must pass both value and index to fn.



function myMap(arr, fn) {
    const result = [];  // store the new values

    for (const [index, value] of arr.entries()) {  // get value and index
        result.push(fn(value, index));             // apply function and add result
    }

    return result;  // return the new array
}

const numbers = [10, 20, 30];

const result = myMap(numbers, (value, index) => {
    return value + index;  // add value and index
});

console.log(result);  // [10, 21, 32]
