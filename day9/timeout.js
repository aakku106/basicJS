//setTimeout(() => {
//  console.log("weeeeeeeee");
//}, 1060);
sum = 0;
let wee = setInterval(() => {
  console.log(sum++);
}, 0);
setTimeout(() => {
  clearInterval(wee);
}, 5000);
