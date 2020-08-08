numbers = [2, 3, 4, 5, 6, 7, 8, 9];
// const array = []


// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     const sum = element * element;
//     array.push(sum);
// }


// console.log(array);


// map takes 3 paremeters 1. function 2. index 3. array 
const output = numbers.map(x => x * x)
console.log(output);


// filter return array

const result = numbers.filter(x => x < 5)

const result2 = numbers.filter(x => x < 5)
console.log(result2);


// find return single element 
const result3 = numbers.find(x => x > 8)
console.log(result3);