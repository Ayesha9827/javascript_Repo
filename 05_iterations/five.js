//for each Loop
const coding = ["js","py","java","cpp","ruby"]

coding.forEach(function (item) {
    // console.log(item);
} )

coding.forEach((val) => {
    // console.log(val);
})

function printMe(item){
    // console.log(item);
}

// coding.forEach(printMe)

coding.forEach((item, index, arr)=>{
    // console.log(item, index ,arr);
})

const myCoding = [
    {
        languageName : "javascript",
        languageFilename : "jS"
    },
    {
        languageName : "java",
        languageFilename : "java"
    },
    {
        languageName : "python",
        languageFilename : "py"
    }
]

myCoding.forEach((item)=>{
    // console.log(item.languageName);
})