const name = "Swapnil"
const repoCount = 60

//console.log(name + repoCount + " Value");


console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String('Swapnil-S')

//console.log(gameName[0]);
//console.log(gameName._proto_);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('p'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne = "   Swapnil   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://swapnil.com/swapnil%40soni"

console.log(url.replace('%40','20'))

console.log(url.includes('vaathi'))

console.log(gameName.split('-'));