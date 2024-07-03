let {PI} = Math;
console.log(PI);
console.log(PI === Math.PI);
PI = 3.14;
console.log(PI === Math.PI); //deep comparison checks for same data type and then value
