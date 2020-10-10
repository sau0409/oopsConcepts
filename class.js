// here we will see es6 classes

//defining a person class

class Person {
    constructor(name, age) { //constructor dunction defines all its properties
        this.name = name;
        this.age = age;
    }
    
    printDetails= function() { // method
        console.log(`Person name is ${this.name}. Age is ${this.age}`)
    }

    protoFun() { // this will be defined in persons prototype
        console.log('this is proto fun');
    }
}


let per1 = new Person('kate', 32); // creating instance of perosn class

console.log(per1);

//teacher class extending perosn class
class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age); // calling perosn contructor
        this.subject = subject;
    }
}

let tech1 = new Teacher('ese', 21, 'maths');

console.log(tech1);

tech1.printDetails();

tech1.protoFun();


// so in classes we need not do anything related to proto, we just use extend keyword that would 
// make teacher inherit from person class.
// in constructor we need to call perosn constrcutor using super keyword.
// this will connect parents variables to child class
// after extensiion we can use all properties nad fuctions of perosn inlcuding prototype