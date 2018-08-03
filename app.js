let p1 = {
    name: {
        first: "Nathan"
    },
    sayHello: 
        function() {
            console.log(`Hello! My name is ${this.name.first}`)       
    }
}
let p2 = {
    name: {
        first: "Jenna"
    },
    sayHello: 
        function() {
            console.log(`Hello! My name is ${this.name.first}`)       
    }
}
let p3 = {
    name: {
        first: "Morgan"
    },
    sayHello: 
        function() {
            console.log(`Hello! My name is ${this.name.first}`)       
    }
}
let p4 = {
    name: {
        first: "Rachel"
    },
    sayHello: 
        function() {
            console.log(`Hello! My name is ${this.name.first}`)       
    }
}
let p5 = {
    name: {
        first: "Holden"
    },
    sayHello: 
        function() {
            console.log(`Hello! My name is ${this.name.first}`)       
    }
}

p1.sayHello();
p2.sayHello();
p3.sayHello();
p4.sayHello();
p5.sayHello();
// 





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