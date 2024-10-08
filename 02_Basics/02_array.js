const names = ["Nikki","John","Ashu","kabir"]
const animals = ["Elephant","Tiger","Lion"]

// names.push(animals)

// console.log(names);
// console.log(names[4][1]);

const allarr = names.concat(animals)
// console.log(allarr);

const all_arr = [...names,...animals]
// console.log(all_arr);

const an_array = [1,2,3,[4,5,6],7,[4,5,[6,7]]]

const real_an_array = an_array.flat(Infinity)
// console.log(real_an_array);

console.log(Array.isArray("Ayesha"));
console.log(Array.from("Ayesha"));
console.log(Array.from({name:"Ashu"})); //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));
