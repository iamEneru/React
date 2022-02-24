// normal function
function printMyName1(name) {
    console.log(name);
}

printMyName1('Max');

// arrow function
const printMyName2 = (name) => {
    console.log(name);
}

printMyName2('Max');

// arrow function (if only 2 or more args)
const printMyName3 = (name, age) => {
    console.log(name, age);
}

printMyName3('Max', 18);

// arrow function (if only 1 args)
const printMyName4 = name => {
    console.log(name);
}

printMyName4('Max');

// arrow function (if no args)
const printMyName5 = () => {
    console.log('Max');
}

printMyName5();

// arrow function (if 1 function body without return value)
const printMyName6 = () => console.log('Max');

printMyName6();

// arrow function (if 1 function body with return value)
const multiplyByTwo = number => number * 2;

console.log(multiplyByTwo(2));
