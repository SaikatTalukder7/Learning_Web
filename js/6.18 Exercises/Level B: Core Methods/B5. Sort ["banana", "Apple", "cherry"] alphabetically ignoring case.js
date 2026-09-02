// B5. Sort ["banana", "Apple", "cherry"] alphabetically ignoring case.


const fruits = ["banana", "Apple", "cherry"];  // create array
fruits.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // case-insensitive alphabetical sort

console.log(fruits);  // ["Apple", "banana", "cherry"]


