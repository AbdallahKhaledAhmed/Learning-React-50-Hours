"use strict";
const addFunc = (x, y) => x + y;
const subFunc = (x, y) => x - y;
const newPerson = {
    name: "John Doe",
    age: 30,
    saySomething: function (message) {
        return message + this.name;
    },
};
console.log(newPerson.saySomething("Hi there "));
const newMovie = {
    name: "...",
    rating: 0,
    genra: "...",
    printMovieInfo: function (name, rating, genra) {
        return `Name: ${name} Rating: ${rating} Genra: ${genra}`;
    },
};
console.log(newMovie.printMovieInfo("Spiderman", 5, "Action"));
class Car {
    constructor(model, price) {
        this.Model = model;
        this.price = price;
    }
    start() {
        console.log("Car Started");
    }
    stop() {
        console.log("Car Stopped");
    }
}
const myCar = new Car("Toyota", 5000);
myCar.start();
myCar.stop();
console.log(myCar.Model);
console.log(myCar.price);
