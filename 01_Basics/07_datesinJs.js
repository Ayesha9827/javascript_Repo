//Dates

let myDate =  new Date()
// console.log(myDate);
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);

// let createDate =  new Date(2023,0,9)
// let createDate =  new Date(2023,0,9,7,10)
// let createDate =  new Date("2023-01-14")
let createDate =  new Date("01-14-2023")
// console.log(createDate.toLocaleString());

let TimeStamp = Date.now()
// console.log(TimeStamp);
// console.log(createDate.getTime());

// console.log(Math.floor(Date.now()/1000));

let newDate =  new Date()
console.log(newDate);
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth());

// `${newDate.toLocaleString()} and the time`

newDate.toLocaleString('defaut',{
    weekday:"long"
})
 