// interfaces is simular to the type keyword but it can specify types for functions and objects
// interfaces with functions
interface MathOperation {
  (x: number, y: number): number;
}

const addFunc: MathOperation = (x: number, y: number) => x + y;
const subFunc: MathOperation = (x: number, y: number) => x - y;

interface person {
  name: string;
  age: number;
  saySomething(message: string): string;
}

const newPerson: person = {
  name: "John Doe",
  age: 30,
  saySomething: function (message) {
    return message + this.name;
  },
};

console.log(newPerson.saySomething("Hi there "));

// extending interfaces
interface MovieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo(name: string, rating: number, genra: string): string | number;
}
interface MovieGenra extends MovieDetails {
  genra: string;
}

const newMovie: MovieGenra = {
  name: "...",
  rating: 0,
  genra: "...",
  printMovieInfo: function (name, rating, genra) {
    return `Name: ${name} Rating: ${rating} Genra: ${genra}`;
  },
};
console.log(newMovie.printMovieInfo("Spiderman", 5, "Action"));

// interfaces with classes

interface Veihcle {
  Model: string;
  start(): void;
  stop(): void;
}

// Declaration merging
interface Veihcle {
  price: number; // here we modified the original Veihcle interface and added price to it
}

class Car implements Veihcle {
  Model: string;
  price: number;
  constructor(model: string, price: number) {
    this.Model = model;
    this.price = price;
  }
  start(): void {
    console.log("Car Started");
  }
  stop(): void {
    console.log("Car Stopped");
  }
}

const myCar = new Car("Toyota", 5000);
myCar.start();
myCar.stop();
console.log(myCar.Model);
console.log(myCar.price);
