// we use generics to make a function or class that can work with deffirent data types that will get assigned on call

function uniqueDataTypes<Type>(first: Type, second: Type): Type[] {
  const third = [first, second];
  return third;
}
const greetings = uniqueDataTypes<string>("hello", "welcome");
const numbers = uniqueDataTypes<number>(10, 20);
console.log(greetings);
console.log(numbers);

/////////////////////////////////////////////////////////////////////////

function keyValuePairs<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

console.log(keyValuePairs<string>({ a: "apple", b: "banana", c: "cherry" }));
console.log(keyValuePairs<number>({ one: 1, two: 2, three: 3 }));

///////////////////////////////////////////////////////////////////////

function arrayFilter<T>(arry: T[], func: (i: T) => boolean): T[] {
  const filteredArray = arry.filter(func);
  return filteredArray;
}

const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = arrayFilter<number>(array1, (i) => i % 2 === 0);

const array2 = ["Apple", "Banana", "Cherry", "Date"];
const shortWords = arrayFilter<string>(array2, (i) => i.length < 6);

const array3 = [
  { name: "Apple", color: "Red" },
  { name: "Banana", color: "Yellow" },
  { name: "Cherry", color: "Red" },
];
interface Fruit {
  name: string;
  color: string;
}
const redFruit = arrayFilter<Fruit>(array3, (i) => i.color === "Red");

console.log(evenNumbers);
console.log(shortWords);
console.log(redFruit);

///////////////////////////////////////////////////////////////////////

// multi parameters
function reversePair<T, U>(value1: T, value2: U) {
  return [value2, value1];
}
const helloPair = reversePair("hello", 20);
console.log(helloPair);

///////////////////////////////////////////////////////////////////////

// generic class
class Box<T> {
  private content: T;
  constructor(initialContent: T) {
    this.content = initialContent;
  }
  getContent(): T {
    return this.content;
  }
  setContent(val: T): void {
    this.content = val;
  }
}
const numberBox = new Box<number>(20);
console.log(numberBox.getContent());
numberBox.setContent(100);
console.log(numberBox.getContent());

const stringBox = new Box<string>("Hello, Typescript");
console.log(stringBox.getContent());
stringBox.setContent("New Content Added");
console.log(stringBox.getContent());
