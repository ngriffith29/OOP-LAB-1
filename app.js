let p1 = {
    name: {
        first: "Nathan"
    },
    sayHello:
        function () {
            console.log(`Hello! My name is ${this.name.first}`)
        }
}
let p2 = {
    name: {
        first: "Jenna"
    },
    sayHello:
        function () {
            console.log(`Hello! My name is ${this.name.first}`)
        }
}
let p3 = {
    name: {
        first: "Morgan"
    },
    sayHello:
        function () {
            console.log(`Hello! My name is ${this.name.first}`)
        }
}
let p4 = {
    name: {
        first: "Rachel"
    },
    sayHello:
        function () {
            console.log(`Hello! My name is ${this.name.first}`)
        }
}
let p5 = {
    name: {
        first: "Holden"
    },
    sayHello:
        function () {
            console.log(`Hello! My name is ${this.name.first}`)
        }
}

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();



// let person = {
//     name: {
//     first: 'John',
//     last: 'Doe'
//     },
//     age: 32,
//     greeting: function() {
//     alert(`Hi! I'm ${this.name.first}.`);
//     }
//    };
//    console.log(person.name.first);
//    console.log(person.age);
//    person.greeting();
//
// Psuedo-Classes 

//Constructor Function

// function PInfo(name, city, age) {
//     this.name = name
//     this.city = city
//     this.age = age
//     PInfo.prototype.greet = function () { 
//         (`My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
//     }
// }
// //
// person1 = new PInfo("Nathan", "Norwalk", 22)
// person2 = new PInfo("Jenna", "Sandusky", 24)
// person3 = new PInfo("Rachel", "Strongsville", 19)
// Person4 = new PInfo("Paul", "New London", 22)
// person1.greet()
// person2.greet()
// person3.greet()
// Person4.greet()
//ES6 SYNTAX
class Person {
    constructor(name, city, age) {
        this.name = name
        this.city = city
        this.age = age
    }
    greet() {
        console.log(`My name is ${this.name} I am ${this.age} years old and live in ${this.city}`)
    }
}

let person6 = new Person("Nathan", "Norwalk", 22)
let person7 = new Person("Jenna", "Sandusky", 24)
let person8 = new Person("Rachel", "Strongsville", 19)
let person9 = new Person("Rachel", "Strongsville", 19)
let person10 = new Person("Paul", "New London", 22)

person6.greet();
person7.greet();
person8.greet();
person9.greet();
person10.greet();

//INHERITANCE


