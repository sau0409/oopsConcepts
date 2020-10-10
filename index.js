//create class
/*
class Student {


    constructor(name, level){
        this.name = name;
        this.level = level;
        this.school = "st. thomas"
    }

    static description() { // static method declaration
        console.log(`My name is ${this.name}. I amm in ${this.level} level from ${this.school}.`)
    }

    describe() {
        console.log(`My name is ${this.name}. I amm in ${this.level} level.`)
    }

}

class Monitor extends Student {

    constructor(name, level, rollno) {
        super(name, level); // calling parents constructor
        this.rollno = rollno;
    }

    describe() {  // polymorphism, same name many role
        super.describe(); // calling parents method
        console.log(`My name is ${this.name}. I amm in ${this.level} level. My rollno. is ${this.rollno}`);
    }

    get myLevel() { // getter property
        return this.level;
    }

    set myLevel(level) { //setter property
        this.level  = level;
    }

}


//initiate student class to create student

let stud1 = new Student('sam', 2);

let stud2 = new Monitor('Johm', 6, 89);


//logging student

console.log(stud1);

console.log(stud2);

Student.description(); //calling static method by class name only no initialization is needed

stud1.describe();
stud2.describe();

// get set 
console.log(stud2.myLevel); // getting current value of level

stud2.myLevel = 10; // setting new value of level

stud2.describe();

// earlier than class

function car(seats, color) {
    this.seats = seats;
    this.color = color;

    this.description = function description() {
        console.log(`Car has ${seats} seats and is of ${color} color.`)
    }


}

//create instance of car
let car1 = new car();

let car2 = new car(4, 'red');

//logging car

console.log(car1);

console.log(car2);

car2.description();


//object literal

var dog = {
    age: 12,
    color: 'spoty',
    describe() {
        console.log(`dog age is ${this.age}. Dog color is ${this.color}.`);
    }

}


//indtantiate

//we can not initiate object literal


// log

dog.name = "doggy";

dog["legs"] = 4;

/*
we can update existing method

dog.describe = function describe() {
    console.log('check');
}

console.log(dog);

dog.describe();




let a = 10;

let b = [3, 5, 7];

console.log(b); // array
console.log(b.__proto__); //Array.prototype
console.log(b.__proto__.__proto__); // Object.prototype
console.log(b.__proto__.__proto__.__proto__); // null

console.log(typeof __proto__);




function person(name, age) {

    this.name = name;
    this.age = age;

    this.details = function() {
        console.log(this.name + ' '+ this.age);
    }
}

function teacher(name, age, subject) {
    person(this, name, age);
    this.subject = subject;
}

console.log(person);

let per1 = new person('sam', 32);

let per2 = new teacher('sam', 32, 'maths');



let car  = {
    brand: "maruti",
    color: "red",
    description: function() {
        console.log(`${this.brand} is ${this.color}`);
    },
    mfd() {
        console.log("10-03-1994");
    }

}

console.log(window.navigator.appVersion);



function car(color, seats) {
    this.color = color;
    this.seats = seats;
    this.showColor = function() {
        console.log(`car color is ${this.color}`);
    }
}

car.prototype.showSeats = function() {
    console.log(`total seats are ${this.seats}`)
}

let car1 = new car("red", 5);

console.log(car1);

car1.showColor();

car1.showSeats();



let ship = {
    height: 1000,
    width: 500,
    area: function() {
        console.log(this.height * this.width);
    }
}



console.log(ship);

ship.area();

let fishShip = {
    height: 700,
    width: 400,
}

console.log(fishShip);

ship.area.call(fishShip);



function shipDetails(depth, capacity) {
    console.log(`ship height is ${this.height}, width is ${this.width}, and depth is ${depth} and capacity is ${capacity}`);
}

shipDetails.call(fishShip, "800");


shipDetails.apply(ship, [900]);

let shipDet = shipDetails.bind(fishShip, 433);

shipDet(8000);

Function.prototype.myBind = function(...args) {
    console.log(args);
    console.log(this);
    let callingFun = this;
    return function(...args2) {
        callingFun.call(...args, ...args2)
    }
}

let shipDet2 = shipDetails.myBind(ship, 899);


shipDet2(8989);


// function currying

//bind method
let multiply = function(x, y) {
    console.log(x * y);
}

let multiplyBy2 = multiply.bind(this, 2);

multiplyBy2(9);
multiplyBy2(6);

//closure

let divide = function(y) {
    return function(x) {
        console.log(x / y);
    }
}

let divideBy2 = divide(2);

divideBy2(8);

divideBy2(18);

let car = {
     color: 'red',
     mfd: '1970'
}

console.log(car);

let sedan = {
    brand: 'honda'
}

console.log(sedan);

console.log(sedan.__proto__);

sedan.__proto__ = car;

console.log(sedan);

sedan.__proto__.newFun = function() {
    console.log("hello");
}

sedan.newFun();


function car(color, seats) {
    this.color = color;
    this.seats = seats;
}

car.prototype.printD = function() {
    console.log(`car color is ${this.color}`)
}

let car1 = new car('red', 6)
console.log(car1);
car1.printD();



function sedan(color, seats, brand) {
    car.call(this,color, seats);
    this.brand = brand;
}

sedan.prototype = car();


let car2 = new sedan('red', 6, 'honda')
console.log(car2);

car2.printD();

*/