const myName: string = "Abdallah"; // Type Annotation String
const myAge: number = 20; // Number
const isMarried: boolean = false; // Bool
const num1: number = 10;
let num2: any = 20; //explicit any (always avoid)
num2 = "Hello"; // no errors
const num3 = 30; // Type Inference
// num3 = "Hello"  *error*
const sum = num1 + num2 + num3;

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
