const actor = {
    firstName: "Jeson",
    lastName: "Statham",
    salary: 500000,
    totalSalary: function (extraPay) {
        this.salary = this.salary + extraPay;
        return this.salary;
    }
};




const jesonSalary = actor.totalSalary(10000);
console.log(jesonSalary);