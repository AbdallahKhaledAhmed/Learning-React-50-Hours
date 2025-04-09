"use strict";
// we use generics to make a function or class that can work with deffirent data types that will get assigned on call
function uniqueDataTypes(first, second) {
    const third = [first, second];
    return third;
}
const greetings = uniqueDataTypes("hello", "welcome");
const numbers = uniqueDataTypes(10, 20);
console.log(greetings);
console.log(numbers);
/////////////////////////////////////////////////////////////////////////
function keyValuePairs(obj) {
    const keys = Object.keys(obj);
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
}
console.log(keyValuePairs({ a: "apple", b: "banana", c: "cherry" }));
console.log(keyValuePairs({ one: 1, two: 2, three: 3 }));
///////////////////////////////////////////////////////////////////////
function arrayFilter(arry, func) {
    const filteredArray = arry.filter(func);
    return filteredArray;
}
const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arrayFilter(array1, (i) => i % 2 === 0);
const array2 = ["Apple", "Banana", "Cherry", "Date"];
const shortWords = arrayFilter(array2, (i) => i.length < 6);
const array3 = [
    { name: "Apple", color: "Red" },
    { name: "Banana", color: "Yellow" },
    { name: "Cherry", color: "Red" },
];
const redFruit = arrayFilter(array3, (i) => i.color === "Red");
console.log(evenNumbers);
console.log(shortWords);
console.log(redFruit);
///////////////////////////////////////////////////////////////////////
// multi parameters
function reversePair(value1, value2) {
    return [value2, value1];
}
const helloPair = reversePair("hello", 20);
console.log(helloPair);
///////////////////////////////////////////////////////////////////////
// generic class
class Box {
    constructor(initialContent) {
        this.content = initialContent;
    }
    getContent() {
        return this.content;
    }
    setContent(val) {
        this.content = val;
    }
}
const numberBox = new Box(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());
const stringBox = new Box("Hello, Typescript");
console.log(stringBox.getContent());
stringBox.setContent("New Content Added");
console.log(stringBox.getContent());
