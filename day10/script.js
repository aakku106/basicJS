/** @format */

arr = [1, [2, [3, [4, [5, [6, [7, [8, [9]]]]]]]]];
// let sum = 0;
// arr.forEach((i) => {
//   while (Array.isArray(i)) {
//     // sum += i;
//     console.log(i);
//   }
// //   //   if () console.log("we");
// // });

// let total = arr.reduce((s, n) => {
//     if (Array.isArray(n)) {
//       return
//     }
//   return s + n;
// }, 0);

// console.log(total);
// let wee = total.reduce((s, n) => {
//   return s + n;
// });
// console.log(wee);

// // arr.forEach((i) => {
// //   if (typeof i == "object") {
// //     // i.forEach((element) => {
// //     //   console.log(i);
// //     // });
// //     console.log(i);
// //   }
// //   console.log(i);
// // });

const calculate = (arr) => {
  return arr.reduce((total, number) => {
    if (Array.isArray(number)) return total + calculate(number);
    return total + number;
  }, 0);
};
console.log(calculate(arr));
