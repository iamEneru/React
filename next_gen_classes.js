// ES6
// constructor() {
//     this.myProperty = 'value';
// }

// myMethod() {
//     ...
// }





// ES7
// myProperty = 'value';

// myMethod = () => {
//     ...
// }





class Human { // class name
    gender = 'male';

    printGender = () => { // methods
        console.log(this.gender);
    }
}

class Person extends Human{ // inheritance
    name = 'Max';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();