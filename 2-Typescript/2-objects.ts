// normal object
// note : object type notation uses ; instead of ,
const person: { name: string; age: number; location: String } = {
  name: "Abdallah",
  age: 20,
  location: "Bani-Suef, Egypt",
};

// factory function (function that returns a new object)
function createUser(): { name: string; age: number; location: string } {
  return {
    name: "Salah",
    age: 20,
    location: "Cairo",
  };
}

// type aliases
type Human = {
  readonly name: string;
  age: number;
  location?: string;
};
function printHuman(person: Human) {
  return `Name: ${person.name} Age: ${person.age} Location${person.location}`;
}

// interface
interface Human2 {
  name: string;
  age: number;
  location?: string;
}
const newPerson2: Human2 = {
  name: "human",
  age: 0,
};

// types intersection
type Person = {
  name: string;
  age: number;
};
type Employee = {
  salary: number;
  position: string;
};
const newEmployee: Person & Employee = {
  name: "Abdallah",
  age: 20,
  position: "Junior MERN Stack Developer",
  salary: 50000,
};

// Union
function printSalary(salary: number | string) {
  return Number(salary);
}

// literal types
type primaryColor = "red" | "green" | "blue";
let myColor: primaryColor = "red";
//// primaryColor = "yellow"; * *

// Tuple
// Tuple is an array with fixed length and can contain items with deffirent types
// the point of using it is to save the data in the correct order
const emplyoeeSalary: [string, number] = ["Ahmed", 50000];
//// const emplyoeeSalary: [string, number] = [50000, "Ahmed"]; *error*
const products: [string, number] = ["item1", 12];
const gamed: [string, string, string] = ["game1", "game2", "game3"];

// Enum
// Enum is used to define a set of named constants that can be used interchangeably
enum WeatherConditions {
  Sunny, // 0  (auto indexing)
  Cloudy, // 1
  Rainy, // 2
  Snowy, // 3
}
console.log(WeatherConditions.Sunny); // 0

enum Weather {
  Sunny = "sunny", // key and value
  Cloudy = "cloudy",
  Rainy = "rainy",
  Snowy = "snowy",
}
console.log(Weather.Rainy); // rainy
