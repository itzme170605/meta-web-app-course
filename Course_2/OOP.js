var purchase1 = {
    shoes: 100,
    stateTax: 1.2,
    totalPrice: function(){
        return this.shoes * this.stateTax;
    }
}

console.log(purchase1.totalPrice());

//using classes
class Car {
    constructor(color, speed, convertible){
        this.color = color;
        this.speed = speed;
        this.convertible = convertible;
    }

    turboOn(){
        console.log("Turbo is ON!");
    }

}



const car1 = new Car("red", 150, false);
console.log(car1.turboOn());
const car2 = new Car();
console.log(car2);

class Animal{}
var dog = new Animal();
console.log(dog);

//polumorphism

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {

    useWings() {
        //overides super class function
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"


