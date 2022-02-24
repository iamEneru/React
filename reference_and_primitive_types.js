// primitive
const number = 1;
const num2 = number; // create a real copy of number

console.log(num2);

// reference
const person = { // person is a pointer of the body (properties)
    name: 'Max' // this property is saved in memory
};

const secondPerson = person; // copying the pointer but not the properties

console.log(secondPerson);

person.name = 'Manu'; // changing the property value of the person

console.log(secondPerson);

// reference using spread operator
const thirdPerson = { // real copy of person
    ...person
}

console.log(thirdPerson);

person.name = 'Maine';

console.log(thirdPerson);