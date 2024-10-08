// Primitive Datatypes

//7 types : String,Number,Boolean,null,undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn =false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 28232332434343434543n


//Reference Type (Non-Primitive Datatypes)

//Array,Objects,Functions

const heros = ["shaktiman","naagraj","doga"]
let myObj ={
    name : "Ashu",
    age : 22,
}

const myFunction = function(){
    console.log("Hii guys");
}

console.log(typeof anotherId);


//*************************************************************//


//Stack (Primitive), Heap (Non-Primitive)

let myNickname = "Ashu"

let anothername = myNickname
anothername = "Ayesha"

console.log(anothername);
console.log(myNickname);


let userOne ={
    email : "abc@gmail.com",
    upi:"user@ibl",
}

let userTwo = userOne

userTwo.email = "bd@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

