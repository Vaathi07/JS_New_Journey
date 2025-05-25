const marvel_heros = ["Ironman", "Hulk", "Thor"]
const dc_heroes = ["Batman", "Superman", "Flash"]

// marvel_heros.push(dc_heroes)

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heroes)
// console.log( allHeros);

const all_new_heroes = [...marvel_heros, ...dc_heroes]

// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4,5]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Swapnil"))
console.log(Array.from("Swapnil"));
console.log(Array.from({name: "Swapnil"})) // intresting 


let score1 = 100 
let score2 = 200 
let score3 = 300 

console.log(Array.of(score1, score2, score3));
