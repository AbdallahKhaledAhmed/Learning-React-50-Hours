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

function keyValuePairs(obj: any) {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return { key: randKey, value: obj[randKey] };
}

console.log(keyValuePairs({ a: "apple", b: "banana", c: "cherry" }));
