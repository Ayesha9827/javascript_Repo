function sayMyName(){
    console.log("K");
    console.log("A");
    console.log("B");
    console.log("I");
    console.log("R");
}

// sayMyName()

// function addNum(num1,num2){
//        console.log(num1+num2);
       
// }

function addNum(num1,num2){
      
    //  let result = num1 + num2
    //  return result 
    // console.log("Ashu");//will print if place before return
    return num1 + num2
    // console.log("Ashu");//Unreachable after return statement
}

const result = addNum(8,9)
// console.log("Result: ",result);


function userLoginMsg(username = "sam"){
    if(username === undefined){ //also write as if(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(userLoginMsg("Ashu"));
// console.log(userLoginMsg(""));

function calPrice(val1,val2,...num1){
       return num1
}

// console.log(calPrice(200,400,500,700,800,100));

const user = {
    username : "Ashu",
    price : 200
}

function Objectref(anyobj){
    console.log(`username is ${anyobj.username} and price is ${anyobj.price}`);
}

// Objectref(user)
Objectref({
    username: "sam",
    price: 999
})

  const myNewArray = [200, 300, 400, 500]

  function returnArray(getArray){
    return getArray[0]
  }

//   console.log(returnArray(myNewArray));
console.log(returnArray([200, 400, 600, 900]));
