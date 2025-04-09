"use strict";
const myName = "Abdallah"; // Type Annotation String
const myAge = 20; // Number
const isMarried = false; // Bool
const num1 = 10;
let num2 = 20; // explicit any (always avoid)
num2 = "Hello"; // no errors
let variable; // implicit any
const num3 = 30; // Type Inference
//// num3 = "Hello"  *error*
// normal function params
function calculateAgeDays(age) {
    return age * 365;
}
// default params value
function greet(name = "Unknown") {
    return `Welcome ${name}!`;
}
// arrow function
const greetArrow = (name = "Unknown") => {
    return `Welcome ${name}!`;
};
// normal function return type
function double(num) {
    return num * 2;
}
// arrow function return type
const doubleArrow = (num) => {
    return num * 2;
};
// void functions
function printMessage(msg) {
    console.log(msg);
}
// never type is used for 3 things
// 1- function with infinate loop
function iLoveYou() {
    while (true) {
        console.log("I Love You");
    }
}
// 2- variable that will never have value (WTF!)
let x;
// 3- function that always throws an error
function iHateYou() {
    throw "404 Love Not Found!";
}
// Arrays
// single array
const nums = [1, 2, 3, 4, 5, 6]; // can't have any type other than numbers
const nums_ = [1, 2, 3, 4, 5, 6]; // old syntax not used as much now
////nums.push("hello")  *error*
// multi dimentional array
const multiNums = [
    [1, 2],
    [3, 4],
    [5, 6],
];
// triple multi dimentional array
const tripleMultiNums = [
    [
        [1, 2],
        [3, 4],
    ],
    [
        [5, 6],
        [7, 8],
    ],
];
