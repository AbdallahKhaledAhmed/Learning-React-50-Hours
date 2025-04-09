type myData = number | string;

function example(data: myData) {
  // return data.toUpperCase()    *error* because it can be string or number
  if (typeof data === "string") {
    return data.toUpperCase(); // no error
  } else {
    return Math.round(data); // no error too
  }
}

//////////////

// instance of Operator

class Cat {
  meow() {
    console.log("meow");
  }
}
class Dog {
  bark() {
    console.log("woff woff");
  }
}

function makeSound(animal: Cat | Dog) {
  if (animal instanceof Cat) {
    animal.meow();
  } else {
    animal.bark();
  }
}

const myCat = new Cat();
const myDog = new Dog();

makeSound(myCat);
makeSound(myDog);

/////////////

// types intersection

type Employee_ = {
  name: string;
  age: number;
};
type Manager = {
  department: string;
  role: string;
};

type ManagerInfo = Employee_ & Manager;

const newManager: ManagerInfo = {
  name: "Abdallah",
  age: 20,
  department: "Engineering",
  role: "Team Lead",
};
