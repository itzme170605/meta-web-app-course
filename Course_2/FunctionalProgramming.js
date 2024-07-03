// functional programming 

var currencyOne = 100; //say USD
var currencyTwo; // say INR
var conversionRate = 82.25;

function convertCurrency(amount, rate){
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, conversionRate);

console.log("USD:",currencyOne, ", INR:", currencyTwo);

// recursion

console.log(":_____________________________________________________________:")

var c = 3;
function fun(){
    console.log(c);
    c = c-1;
    if(c === 0 ) return;
    fun();
}
fun()

// use let var1  if the value might change in future 
// use const var1 if the value might not.

class Animal {

}

class Cat extends Animal {
    constructor() {
    super();
    this.noise = "meow";
    }
}

var result = new Animal();
console.log(result.noise);