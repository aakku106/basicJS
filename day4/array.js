/** @format */

//Array

let arr = [];
let arr2 = new Array();

//insert element to an array
arr.push(1);
arr.push(2);
arr.push(3);
arr.push("hello");
console.log(arr);
5;

//pop element from an array
arr.pop();
console.log(arr);

//remove first element from an array
arr.shift();

//add element to start
arr.unshift("hi");
console.log(arr);

//check if element exists
console.log(arr.includes("hi"));

//get index of an element
console.log(arr.indexOf(3));

//get length of array
console.log(arr.length);

//loop through element of an array
for (let i of arr) {
  console.log(i);
}

//task
let new_arr = [1, 2, 3, 4, 5];
let reversed = [];
// reversed = new_arr.reverse();

for (i = new_arr.length - 1; i >= 0; i--) {
  reversed.push(new_arr[i]);
}
console.log(new_arr);
console.log(reversed);
