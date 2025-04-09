"use strict";
class HumanClass {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set age(newAge) {
        this._age = newAge;
    }
}
class PersonClass extends HumanClass {
    constructor(firstName, lastName, age, location) {
        super(firstName, lastName, age);
        this.location = location;
    }
    sayHello() {
        console.log(" Hello", this.firstName, this.lastName, "\n you are", this.age, "Years Old", "\n you live in", this.location);
    }
}
const me = new PersonClass("Abdallah", "Khaled", 20, "Egypt");
me.sayHello();
const bro = {
    namel: "lol",
    age: 90,
};
