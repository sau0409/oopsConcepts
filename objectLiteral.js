//we will see how inheritance works in object letrals

let person = {
    name: 'sam', // properties
    age: 35,
    printDetails() { // method
        console.log(`Person name is ${this.name}. Age is ${this.age}`)
    }
}

person.__proto__.protoFun = function() { // adding a method in objects prototype
    console.log(`protofun for ${this.name}`);
}

console.log(person)

person.printDetails();

person.protoFun(); 

let teacher = {
    subject: "maths"
}

teacher.__proto__ = person; // inheriting from perosn class

console.log(teacher);
teacher.printDetails(); //accessing person properties 
teacher.protoFun();

//currently teacher => object
// so objects can inherit from any other object using teacher.__proto__ = object. 
// now teachers prototype has persons object
// perosns object has its properties and methods along withs its prototype
// persons prototype has objects object
//teacher => person => object