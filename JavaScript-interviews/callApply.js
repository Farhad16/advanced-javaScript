const person = {
    firstName: "John",
    lastName: "Doe",
    salary: 15000,

    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },

    getSalary: function (amount) {
        this.salary = this.salary - amount;
    }
}

person.getFullName()
person.getSalary(500);
console.log(person.salary);