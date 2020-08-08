const student = [{
        id: 21,
        name: "Farhad"
    },
    {
        id: 31,
        name: "Parvez"
    },
    {
        id: 41,
        name: "Junaid"
    },
    {
        id: 51,
        name: "Sadat"
    }
]

const name = []
for (let i = 0; i < student.length; i++) {
    const element = student[i];
    name.push(element.name)
}

console.log(name);

const names = student.map(s => s.name)
const ids = student.map(s => s.id)
console.log(names);
console.log(ids);

const bigger = student.filter(s => s.id > 40)
console.log(bigger);

const bigger1 = student.find(s => s.id > 50)
console.log(bigger1);