const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8];

// slice method slice an array from a given index return a new array
const slice = numbers.slice(2, 5);
console.log(slice);

// splice method splice the main array and return from the given index to length also can inject new element
const splice = numbers.splice(2, 5, 11, 22, 33, 44);
console.log(splice);
console.log(numbers);

// join can join an array

const together = numbers.join(", ")
console.log(together);