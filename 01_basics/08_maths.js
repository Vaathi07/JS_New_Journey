//console.log();
//console.log(Math.abs(-5));
//console.log(Math.round(4.6));
//console.log(Math.ceil(3.2));
//console.log(Math.floor(3.2));
//console.log(Math.min(4 ,3, 6 ,8));
//console.log(Math.max(4 ,3, 6 ,8));


//---> Math.random gives value under 0-1 
// after adding of +1 we wil get no. from 1-9
// a formula (Math.random() * (max - min +1))

console.log(Math.random ());
console.log((Math.random()*10) + 2);
console.log(Math.floor(Math.random()*10) + 2);

const min = 10
const max = 30

console.log(Math.floor(Math.random() * (max - min +1)) + min)