// interfaces is simular to the type keyword but it can specify types for functions and objects
// functions
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
  saySomething: function (message: string): string {
    return message + this.name;
  },
};

console.log(newPerson.saySomething("Hi there "));

interface MovieDetails {
  readonly name: string;
  rating: number;
  printMovieInfo(name: string, price: number, rating: string): string | number;
}

interface MovieGenra extends MovieDetails {
  genra: string;
}
