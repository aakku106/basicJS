let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//Array.reduce((Accumulator, currentValue) => {
//  return Accumulator + currentValue;
//}, initialState);

let total = arr.reduce((sum, num) => {
  return sum + num;
}, 0);
console.log(total);
