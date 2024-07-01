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

// creating objects

var user = {
    username: "jj74875",
    passwd: "12345",
    name: "jatin",
    age: 19,
    socialSkill: 78,
    greeting: "heyy"

}
console.log(user.name)
