const userEmail = " "

if(userEmail){
    console.log("Got the user Email");
}else{
    console.log("Don't have use Email");
}

//falsy Values//
// false, 0 , -0, bigInt 0n, "", null, undefined, NaN

//truthy Values//
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0 ) {
//     console.log("Array is Empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0 ) {
    console.log("Object is Empty");
}

// false == 0  gives true
// false == '' gives true
// 0 == '' gives true


// Nullish Coalescing Operator (??) : null, undefined

let val1;
// val1 =  5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 8

console.log(val1);


//Ternary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")

