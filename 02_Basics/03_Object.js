//Singleton
// Object.create

// Object literals

const mySym = Symbol("key1")

const JSUser = {
    name:"Ashu",
    "full name":"Ayesha Khan",
    [mySym] : "key1",
    age : 22,
    location : "bhopal",
    email : "abc@gmail.com",
    isLoggedIn :  false,
    lastLogininDays : ["Monday","Saturday"]
}
// console.log(JSUser.email);
// console.log(JSUser["email"]);
// console.log(JSUser["full name"]);
// console.log(JSUser[mySym]);

JSUser.email = "abc@gmail.com"
// Object.freeze(JSUser)
JSUser.email = "abc@yahoo.com"
// console.log(JSUser);

JSUser.greeting = function(){
    console.log("Hello JS user");
}

JSUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
}

console.log(JSUser.greeting());
console.log(JSUser.greetingTwo());
