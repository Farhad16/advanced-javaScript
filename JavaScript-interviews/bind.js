const person = {
    firstName: "John",
    lastName: "Doe",
    salary: 55000,

    getFullName: function () {
        console.log(this.firstName + " " + this.lastName);
    },

    getSalary: function (amount) {
        console.log(this);
        this.salary = this.salary - amount;
    }
}

const normalPerson = {
    firstName: "Zahid",
    lastName: "Hasan",
    salary: 20000
};

const normalSalary = person.getSalary.bind(normalPerson)
normalSalary(2000);
normalSalary(3000);
console.log(normalPerson.salary);