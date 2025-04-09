"use strict";
// normal object
// note : object type notation uses ; instead of ,
const person = {
    name: "Abdallah",
    age: 20,
    location: "Bani-Suef, Egypt",
};
// factory function (function that returns a new object)
function createUser() {
    return {
        name: "Salah",
        age: 20,
        location: "Cairo",
    };
}
function printHuman(person) {
    return `Name: ${person.name} Age: ${person.age} Location${person.location}`;
}
const newPerson2 = {
    name: "human",
    age: 0,
};
const newEmployee = {
    name: "Abdallah",
    age: 20,
    position: "Junior MERN Stack Developer",
    salary: 50000,
};
// Union
function printSalary(salary) {
    return Number(salary);
}
let myColor = "red";
//// primaryColor = "yellow"; * *
// Tuple
// Tuple is an array with fixed length and can contain items with deffirent types
// the point of using it is to save the data in the correct order
const emplyoeeSalary = ["Ahmed", 50000];
//// const emplyoeeSalary: [string, number] = [50000, "Ahmed"]; *error*
const products = ["item1", 12];
const gamed = ["game1", "game2", "game3"];
// Enum
// Enum is used to define a set of named constants that can be used interchangeably
var WeatherConditions;
(function (WeatherConditions) {
    WeatherConditions[WeatherConditions["Sunny"] = 0] = "Sunny";
    WeatherConditions[WeatherConditions["Cloudy"] = 1] = "Cloudy";
    WeatherConditions[WeatherConditions["Rainy"] = 2] = "Rainy";
    WeatherConditions[WeatherConditions["Snowy"] = 3] = "Snowy";
})(WeatherConditions || (WeatherConditions = {}));
console.log(WeatherConditions.Sunny); // 0
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Cloudy"] = "cloudy";
    Weather["Rainy"] = "rainy";
    Weather["Snowy"] = "snowy";
})(Weather || (Weather = {}));
console.log(Weather.Rainy); // rainy
