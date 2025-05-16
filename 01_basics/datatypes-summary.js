//Primitive

// 7 types : String , Number , Boolean, null , undefined, symbol, BigINt

//js is dynamic type language 

const score = 100
const scoreValue = 100.3

const isLoggedIn  = false
const outsideTemp = null
let userEmail;

const id  = Symbol('123')
const anotherId = Symbol ('123')

console.log(id === anotherId);

//const bigNumber = 123456789n

//Reference (Non primitive)

// Array , Objects , Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Swapnil",
    age: 22,
}

const myFunction = function(){
    console.log("Hello There");
}

console.log(typeof myFunction);
