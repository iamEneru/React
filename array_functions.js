const numbers = [1, 23, 3, 8];


// Arrow function
// map((element) => { /* ... */ })
// map((element, index) => { /* ... */ })
// map((element, index, array) => { /* ... */ })

// Callback function
// map(callbackFn)
// map(callbackFn, thisArg)

// Inline callback function
// map(function(element) { /* ... */ })
// map(function(element, index) { /* ... */ })
// map(function(element, index, array){ /* ... */ })
// map(function(element, index, array) { /* ... */ }, thisArg)
const doubleNumArray = numbers.map(num => num * 2);
console.log("doubleNumArray: " + doubleNumArray);



// Arrow function
// find((element) => { /* ... */ } )
// find((element, index) => { /* ... */ } )
// find((element, index, array) => { /* ... */ } )

// Callback function
// find(callbackFn)
// find(callbackFn, thisArg)

// Inline callback function
// find(function(element) { /* ... */ })
// find(function(element, index) { /* ... */ })
// find(function(element, index, array){ /* ... */ })
// find(function(element, index, array) { /* ... */ }, thisArg)
const findNumber = numbers.find(el => el == 1);
console.log("findNumber: " + findNumber);




// Arrow function
// findIndex((element) => { /* ... */ } )
// findIndex((element, index) => { /* ... */ } )
// findIndex((element, index, array) => { /* ... */ } )

// Callback function
// findIndex(callbackFn)
// findIndex(callbackFn, thisArg)

// Inline callback function
// findIndex(function(element) { /* ... */ })
// findIndex(function(element, index) { /* ... */ })
// findIndex(function(element, index, array){ /* ... */ })
// findIndex(function(element, index, array) { /* ... */ }, thisArg)
const findIndexNumber = numbers.findIndex(el => el > 20);
console.log("findIndexNumber: " + findIndexNumber);




// Arrow function
// filter((element) => { /* ... */ } )
// filter((element, index) => { /* ... */ } )
// filter((element, index, array) => { /* ... */ } )

// Callback function
// filter(callbackFn)
// filter(callbackFn, thisArg)

// Inline callback function
// filter(function(element) { /* ... */ })
// filter(function(element, index) { /* ... */ })
// filter(function(element, index, array){ /* ... */ })
// filter(function(element, index, array) { /* ... */ }, thisArg)
const filterNumbers = numbers.filter(el => el < 20);
console.log("filterNumber: " + filterNumbers);




// Arrow function
// reduce((previousValue, currentValue) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ } )
// reduce((previousValue, currentValue, currentIndex, array) => { /* ... */ }, initialValue)

// Callback function
// reduce(callbackFn)
// reduce(callbackFn, initialValue)

// Inline callback function
// reduce(function(previousValue, currentValue) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ })
// reduce(function(previousValue, currentValue, currentIndex, array) { /* ... */ }, initialValue)
const initialValue = 0;
const reduceNumbers = numbers.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
// [0, 1, 23, 3]
// [1, 23, 3]
// [24, 3]
// [27]
console.log("reduceNumbers: " + reduceNumbers);




// concat()
// concat(value0)
// concat(value0, value1)
// concat(value0, value1, ... , valueN)
const numbers1 = [2, 4, 6];
const concatNumbers = numbers.concat(numbers1);
console.log("concatNumbers: " + concatNumbers);






// slice()
// slice(start)
// slice(start, end)
const sliceNumber = numbers.slice(2);
// the 1st and 2nd value will be removed (print starts at index 2)
// [3, 8]
console.log("sliceNumber: " + sliceNumber);

const sliceNumber1 = numbers.slice(2, 3);
// the 1st and 2nd value will be removed (print starts at index 2)
// index 3 and so on will be removed
// [3]
console.log("sliceNumber1: " + sliceNumber1);

const sliceNumber2 = numbers.slice(0, 4);
// print starts at index 0
// index 4 and so on will be removed
// [1, 23, 3, 8]
console.log("sliceNumber2: " + sliceNumber2);

const sliceNumber3 = numbers.slice(-2);
// the last 2 numbers will be printed
// [3, 8]
console.log("sliceNumber3: " + sliceNumber3);

const sliceNumber4 = numbers.slice(1, -2);
// the 1st value will be removed (print starts at index 1)
// since, the remaining value will be [23, 3, 8], the last 2 values will be removed
// [23]
console.log("sliceNumber4: " + sliceNumber4);

const sliceNumber5 = numbers.slice();
// prints all numbers
console.log("sliceNumber5: " + sliceNumber5);



// splice(start)
// splice(start, deleteCount)
// splice(start, deleteCount, item1)
// splice(start, deleteCount, item1, item2, itemN)
const spliceNumber = numbers;
spliceNumber.splice(1, 0, 11); // numbers variable will also updated
// 1st arg: index where the value will be inserted
// 2nd arg: how many value will be removed from 1st arg's index
// 3rd arg: value to be insert
// [1, 11, 23, 3, 8]
console.log("spliceNumber: " + spliceNumber);
console.log("numbers: " + numbers);

const spliceNumber1 = numbers;
spliceNumber1.splice(3, 2, 22);
// [1, 11, 23, 22]
console.log("spliceNumber1: " + spliceNumber1);
console.log("numbers: " + numbers);