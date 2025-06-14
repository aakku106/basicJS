/** @format */

// // Assignment 1
// // create a program that check how frequent a number appears in an Array
// //
// 4 times= frequent
// 3 times = common
// 1 time = rare
// // create a function countFrequency (array) that return a frequency array
// // use loop to go through each number in the array
// // check frequency and based on that print frequent, common, rare

array = [1, 1, 1, 1, 2, 2, 2, 3];
frequency = {};
countFrequency = (array) => {
  array.forEach((i) => {
    if (!frequency[i]) frequency[i] = 1;
    else frequency[i]++;
  });
};
countFrequency(array);
console.log(frequency);

const showText = document.getElementById("show");

for (key in frequency) {
  var ccn = document.createElement("li");
  if (frequency[key] >= 4) {
    ccn.textContent = `${key} repeats  ${frequency[key]} time which  is  frequent`;
    showText.append(ccn);
  } else if (frequency[key] >= 3) {
    ccn.textContent = `${key} repeats  ${frequency[key]} time which  is  frequent`;
    showText.append(ccn);
  } else if (frequency[key] >= 1) {
    ccn.textContent = `${key} repeats  ${frequency[key]} time which  is  frequent`;
    showText.append(ccn);
  }
}
