// New way of class declaration 
class Person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const manager = new Person('John', 'Doe', 50000);
console.log(manager.salary);


// old way of class declaration
function Person1(firstName, lastName, salary) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
}


const manager1 = new Person1('John', 'Doe', 54000);
console.log(manager1);