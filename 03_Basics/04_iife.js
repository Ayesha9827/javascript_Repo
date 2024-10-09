// Immediately Invoked Function Expression (IIFE)

(function chai(){
    //named iife function with name using iife function call
    console.log(("DB CONNECTED"));
})();

//we need to end the iife function before giving next iife function


// ( function aurcode() {
//     console.log("DB CONNECTED TWO");
// })()

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
})("Ashu")
 //To remove th epollution of global scope 
 //we use iife function