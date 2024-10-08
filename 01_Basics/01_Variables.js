const accountId = 144553
let accountEmail = "ashu@gmail.com"
var accountPassword = "12345"
let accountState;

accountCity = "Bhopal"

// accountId = 3 //not allowed

accountEmail = "ash@gmail.com"
accountPassword = "345"
accountCity ="delhi"

console.log(accountId);

/*
Prefer not to use var 
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

