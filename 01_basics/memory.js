// Types of Memory  -> Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "vaathiworkcom"

let anothername = myYoutubename
anothername = "killercode"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@bl"
}

let userTwo = userOne

userTwo.email = "work.vaathi@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);