class Human { // class name
    constructor() { // constructor
        this.gender = 'male';
    }

    printGender() { // methods
        console.log(this.gender);
    }
}

class Person extends Human{ // inheritance
    constructor() {
        super(); // required if the parent class (Human) have properties
        this.name = 'Max';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person();
person.printMyName();
person.printGender();