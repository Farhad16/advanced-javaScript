let name;
console.log(name)

// undefined return in function 

function add(num1, num2) {
    console.log(num1 + num2);
}

const result = add(34, 34);
console.log(result);

// undefined with no return type

function divide(num1, num2) {
    return
}

const result1 = divide(10, 2);
console.log(result1);

// undefined in object property

let person = {
    name: "Farhad",
    age: 26,
}
console.log(person.phone);

// set undefined

let set = undefined
console.log(set);
console.log(typeof (set));

// null 

person = null
console.log(person);