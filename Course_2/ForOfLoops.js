const car = { 
    engine: true,
    sterring: true,
    automatic: false,
    speed: "slow",
    gears: 5
} // prototype 

const sportsCar = Object.create(car);
sportsCar.gears = 6; 
sportsCar.speed = "fast"
console.log(sportsCar);

for(const prop in sportsCar){
    console.log(prop, sportsCar[prop]);
}
console.log("_______________________________________________________");
for(const prop of Object.keys(sportsCar)){
    console.log(prop, sportsCar[prop]);
}//objects own prperties are only displayed not the prototytpes



