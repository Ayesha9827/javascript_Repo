const name = "Ayesha"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hi my name is ${name} my repo count is ${repoCount}`);
//String Interpolation (`${}`)
 
 const gameName = new String("Ashu-khan-com")

//  console.log(gameName[0]);
//  console.log(gameName.__proto__)

//  console.log(gameName.length);
//  console.log(gameName.toUpperCase());
 console.log(gameName.charAt(2));
 console.log(gameName.indexOf('s'));
 
 const newString = gameName.substring(0,3)
 console.log(newString);
 
 const anotherString = gameName.slice(-8,4)
 console.log(anotherString);
 

 const newStringOne = "      Ashu      "
 console.log(newStringOne);
 console.log(newStringOne.trim());
 
 const url = "https://ashu.com/jsdbf%20mbcb"

console.log(url.replace('%20','-'));

console.log((url.includes("abc")));

console.log(gameName.split('-'));
