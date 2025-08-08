const person = {
    name: "MD EMON",
    age: 23,
    married: false,
    profession: 'Developer',
    salary: 2000,
    'fav places': ['Aralia', 'Mudarkendi', 'abdullah pur']
}

console.log(person);

console.log(person.name)

const salary = person.salary;
console.log(salary)
console.log(person['fav places'])

person.salary = 30000;
person['age'] = 26;

// console.log(person[keyName])

const propName = 'profession';
person[propName] = 'devops'
console.log(person);