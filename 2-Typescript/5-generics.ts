// we use generics to make a function that can work with deffirent data types that will get assigned on function call

function uniqueDataTypes<Type>(first: Type, second: Type): Type[] {
  const third = [first, second];
  return third;
}
const greetings = uniqueDataTypes<string>("hello", "welcome");
const numbers = uniqueDataTypes<number>(10, 20);
console.log(greetings);
console.log(numbers);

/////////////////////////////////////////////////////////////////////////
 i give up for now this is too hard
// function keyValuePairs<T>(obj: { [key: string]: T }): {
//   key: string;
//   value: string;
// } {
//   return {key: , value};
// }

// const stringObject = { a: "apple" };
// const stringPair = keyValuePairs(stringObject);

// const numberObject = { one: 1, two: 2, three: 3 };
// const numberPair = keyValuePairs(numberObject);

