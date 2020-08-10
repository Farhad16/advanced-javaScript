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
    },

    chargebill: function (amount, tips, tax) {
        this.salary = this.salary - amount - tips - tax;
    }
}

const normalPerson = {
    firstName: "Zahid",
    lastName: "Hasan",
    salary: 20000
};

const businessman = {
    firstName: "Mihir",
    lastName: "Kundu",
    salary: 30000
}

const normalSalary = person.getSalary.bind(normalPerson)
normalSalary(2000);
normalSalary(3000);
console.log(normalPerson.salary);


person.getSalary.call(normalPerson, 2000);
console.log(normalPerson.salary);

person.chargebill.call(businessman, 4000, 200, 10)
console.log(businessman.salary);

person.chargebill.apply(businessman, [1000, 700, 90])
console.log(businessman.salary);