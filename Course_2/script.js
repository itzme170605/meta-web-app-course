// functions
function myfun1() {
    console.log("This is the first function");
}
function addtwonums(a, b) {
    console.log(a + b);
}
//invoking
myfun1();
addtwonums(10, 20);
//arrays
var train1 = ["wheat", "barley", "potato", "salsts", "rocks"];
console.log(train1[0]);
//functyions with arrays
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

listArrayItems(train1);
console.log("________________________________________________________________________")
//activity
function letterfinder(word, match){
    for(var i = 0; i < word.length; i++){
        if(word[i] == match){
            console.log("found the", match, 'at ',i)
        }else{
            console.log("No match found at",i)
        }
    }
}

letterfinder("test","e")
console.log("________________________________________________________________________")
// creating objects

var user = {
    username: "jj74875",
    passwd: "12345",
    name: "jatin",
    age: 19,
    socialSkill: 78,
    greeting: "heyy"

}
console.log(user.name);
console.log((user.name = 'jj'));
console.log(user);



console.log("________________________________________________________________________")
console.log("Math Module")
var RNG = Math.random();
console.log(RNG);

console.log(Math.ceil(10.1))
console.log(Math.floor(10.999))
console.log(Math.trunc(10.999))
console.log(Math.pow(2,3))
console.log(Math.round(10.25))
console.log(Math.round(10.222555))

console.log("__________________________________________________________________________")
console.log("String methods")
var greet = "Hello, ";
var place = "World"
console.log(greet.length); 
console.log(greet.charAt(0), "\n",  
"Wo".concat("rl").concat("d"), "\n",  
"ho-ho-ho".indexOf('h'), "\n",   // 0
"ho-ho-ho".indexOf('o'), "\n",   // 1
"ho-ho-ho".indexOf('-'), "\n",   // 2
"ho-ho-ho".split("-"), "\n",   // ['ho', 'ho', 'ho']
greet.toUpperCase(), "\n",   // "HELLO, "
greet.toLowerCase(), "\n",   // "hello, "
greet, "\n",  
place)
console.log("___________________________________________________________________________")




try {
Number(5).toPrecision(300)
} catch(e) {
console.log("There was an error")
}
