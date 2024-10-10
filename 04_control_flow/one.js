//if
//<, >, <=, >=, ==, != , ==== ,!==

const isUserLoggedIn = true
const temperature = 41

// if( temperature === 40){
//    console.log("Temperatur is less than 50");
// }
// else{
//     console.log("Temperature Greater than 50");
// }
// console.log("Execute");

const score = 200

// if(score > 100){
//     let power = "fly"
//     console.log(`User power : ${power}`);
// }
// console.log(`User power : ${power}`);


const Balance = 1000

// if(Balance > 500) console.log("test"), console.log("test2");
//Implicit scope "Don't use"

// if( Balance < 500){
//      console.log("Less than 500");
// } 
// else if( Balance < 750){
//     console.log("Less than 750");
// }
// else if( Balance < 900){
//     console.log("Less than 900");
// }
// else{
//     console.log("Less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInGoogle = false
const loggedInemail = true

if( userLoggedIn && debitCard && 2==3 ){
    console.log("Allow to buy course");
}

if(loggedInGoogle || loggedInemail){
    console.log("User Logged in");
}