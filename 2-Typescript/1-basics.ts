const myName: string = "Abdallah"; // Type Annotation String
const myAge: number = 20; // Number
const isMarried: boolean = false; // Bool
const num1: number = 10;
let num2: any = 20; // explicit any (always avoid)
num2 = "Hello"; // no errors
let variable; // implicit any
const num3 = 30; // Type Inference
//// num3 = "Hello"  *error*

// normal function params
function calculateAgeDays(age: number) {
  return age * 365;
}

// default params value
function greet(name: string = "Unknown") {
  return `Welcome ${name}!`;
}

// arrow function
const greetArrow = (name: string = "Unknown") => {
  return `Welcome ${name}!`;
};

// normal function return type
function double(num: number): number {
  return num * 2;
}
// arrow function return type
const doubleArrow = (num: number): number => {
  return num * 2;
};

// void functions
function printMessage(msg: string): void {
  console.log(msg);
}

// never type is used for 3 things
// 1- function with infinate loop
function iLoveYou(): never {
  while (true) {
    console.log("I Love You");
  }
}
// 2- variable that will never have value (WTF!)
let x: never;
// 3- function that always throws an error
function iHateYou(): never {
  throw "404 Love Not Found!";
}

// Arrays

// single array
const nums: number[] = [1, 2, 3, 4, 5, 6]; // can't have any type other than numbers
const nums_: Array<number> = [1, 2, 3, 4, 5, 6]; // old syntax not used as much now
////nums.push("hello")  *error*

// multi dimentional array
const multiNums: number[][] = [
  [1, 2],
  [3, 4],
  [5, 6],
];
// triple multi dimentional array
const tripleMultiNums: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];
