// for of

// ["","",""]
// [{},{},{}]

const arr = [1, 2, 3, 4, 5, 6]

for (const num of arr) {
    // console.log(num);
}

const greeting = "Hii!"
for (const greet of greeting) {
    // console.log(`Each char is ${greet}`);   
}

//Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('IN',"INDIA")
map.set('US',"UNITED STATES OF AMERICA")
map.set('FR',"FRANCE")

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
//to destructure an array [key, value]

const myObject = { 
    game1 : 'NFS',
    game2 : 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
// }
 //It doesn't work for objects