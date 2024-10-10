const myObject = {
    js : 'javascript',
    cpp : 'C++',
    rb : 'ruby',
    swift : "swift by apple"
}

for (const key in myObject) {
    // console.log(`${key} shortcut is for : ${myObject[key]}`);
}
//SINGLE KEY CAN BE PRINTED AND VALUE ALSO

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
    console.log(programming[key]);  
}
//doesn't give direct array using key at console log


