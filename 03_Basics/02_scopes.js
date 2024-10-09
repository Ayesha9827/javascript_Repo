//var c = 300 //returns value fron block scope also
let a = 300
if(true){
    let a = 10
    const b = 20
    console.log("Inner: ", a);
    
}


// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "Ashu"

    function two(){
        const website = "youtube"
        // console.log(username);
    }
    // console.log(website);
    two()
}
// one()

if(true){
    const username = "Ashu"
    if(username === "Ashu"){
        const lastname = " khan"
        // console.log(username + lastname);
    }
    // console.log(lastname);
}
// console.log(username);

//++++++++++++++++++Interesting+++++++++++++++++++//


addone(5)
function addone(num){
    return num+1
}


addTwo(5) //variabe holda function doesn't 
//gives value calling before thw function
const addTwo = function(num){
    return num + 2
}
