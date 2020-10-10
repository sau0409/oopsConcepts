//here we will see and discuss about inheritance es5

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.printDetails= function() { // method
        console.log(`Person name is ${this.name}. Age is ${this.age}`)
    }
}

Person.prototype.protoFun = function() { // adding a method in constructor function prototype
    console.log(`protofun for ${this.name}`);
}

let per1 = new Person('kate', 32);

console.log(per1);

function Teacher(name, age, subject) {
    Person.call(this, name, age);  // attcahing persons properties to teacher
    this.subject = subject;
}

Teacher.prototype = Object.create(Person.prototype); // attching perons prototype to teachers prototype

let tech1 = new Teacher('elly', 65, 'maths');

console.log(tech1);

tech1.printDetails();
tech1.protoFun();

/*
in functions we can inherit from a function , if we need only the propeties of that function we call
the function passing the current object. Person.call(this, name, age). this will execute person in teachers 
execution context.

to inherit perosns prototype, we need to use Teacher.prototype = Object.create(Person.prototype)

this will atach the persons __proto__ to teacher.
*/