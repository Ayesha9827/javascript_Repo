const myArr = [1,2,3,4,5]
const cartoon = ["Doreamon","Shinchan","Nobita"]

const myArr2 = new Array(2,3,4,5)
// console.log(myArr[1]);


//Array methods

// myArr.push(9)
// myArr.pop()

// myArr.unshift(8) //ADDS VALUE IN THE START INDEX
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(8));//gives -1 if the element doesn't exits

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);


//slice , splice

console.log("A",myArr);

const mya1 = myArr.slice(1,3)

console.log(mya1);
console.log("B ",myArr);

const mya2 = myArr.splice(1,3)

console.log(mya2);
console.log("C ",myArr);

