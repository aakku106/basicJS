const wee = new Promise((resolve, reject) => {
  let num = Math.floor(Math.random() * 10);
  setTimeout(() => {
    if (num % 2 === 0) resolve(" accepted due to even number: " + num);
    else reject("Odd num: " + num);
  }, 1000);
});
console.log(wee);
wee
  .then((sho) => {
    console.log(sho);
  })
  .catch((err) => {
    console.log(err);
  });
//  .finally((cat) => {
//    console.log(cat);
//  });
//
