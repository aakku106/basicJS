//Spread
let arr = [1, 2, 3, 4, 5];
let newArr = [...arr];
console.log(newArr);

//merge
let A = [1, 2];
let B = [3, 4];
let c = [...A, ...B];

console.log(c);

//clone and merge

let obj = { a: 1, b: 2 };
let obj2 = { ...obj, b: 3 };
console.log(obj2);
