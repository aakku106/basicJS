let arr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

let newArr = arr.map((value, index) => {
  return value * 2;
});
console.log(newArr);

let str = ["ccn", "aakku", "master", "we"];
let wee = str.map((v, i) => {
  console.log(i, ": ", v);
});
// Filter
let suuArr = arr.filter((v) => {
  return v % 2 === 0;
});
console.log(suuArr);

// Reduce
