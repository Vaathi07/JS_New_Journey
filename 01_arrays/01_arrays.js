// array

const myArr =[0, 1, 2, 3, 4, 5]
const myHeros = ["shaktimaan", "naagraaj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[0]);

//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1,3)

console.log("C", myArr);
console.log(myn2);


//<-------------------------------------------Summary------------------------------------------>
//slice() – Copy banata hai 
//splice() – Original array ko change karta hai

//Summary:
//Feature 	                |   slice()	                    | splice()
//Changes original array?   |  	❌ No	               |    ✅ Yes
//Returns	                |    New copied array	    |Removed items (if any)
//Use for	                |    Copying part of array	|Adding/removing elements