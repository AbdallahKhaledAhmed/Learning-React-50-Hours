class HumanClass {
  public firstName: string;
  protected readonly lastName: string;
  private _age: number;

  constructor(firstName: string, lastName: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._age = age;
  }
  get age(): number {
    return this._age;
  }
  set age(newAge: number) {
    this._age = newAge;
  }
}

class PersonClass extends HumanClass {
  location: string;
  constructor(
    firstName: string,
    lastName: string,
    age: number,
    location: string
  ) {
    super(firstName, lastName, age);
    this.location = location;
  }
  sayHello() {
    console.log(
      " Hello",
      this.firstName,
      this.lastName,
      "\n you are",
      this.age,
      "Years Old",
      "\n you live in",
      this.location
    );
  }
}

const me = new PersonClass("Abdallah", "Khaled", 20, "Egypt");
me.sayHello();

const bro = {
  namel: "lol",
  age: 90,
};
