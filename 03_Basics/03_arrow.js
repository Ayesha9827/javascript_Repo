const user = {
    username : "Ashu",
    price : 999,

    welcomemsg : function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
    }

}

// user.welcomemsg()
// user.username = "sam"
// user.welcomemsg()

// console.log(this); //accessing global context i.e. gives empty object as O/P
//window is the global object in browser

// function chai(){
//     let username = "ashu"
//     console.log(this.username);
//     //cannot get value from function
// }

// chai()

// const chai = function(){
//     let username = "Ashu"
//     console.log(this.username);
// }

const chai = () => {  // => arrow function
    let username = "Ashu"
    console.log(this.username);
    
}
// chai()

/*
In a function "this" keyword gives various values
In arrow function "this" keyword  gives empty parenthesis 
*/

() => {} //Basic syntax of Arrow fuction

//Basic arrow function is also known as Explicit return 
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

//Implicit return Arrow function
// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username : "Ashu"})

console.log(addTwo(4, 6));

const myArray = [2, 3, 4, 5]

myArray.forEach(function () {})
myArray.forEach(() => {})