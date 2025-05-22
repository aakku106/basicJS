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
counter = 0;

countFrequency = (array) => {
  array.forEach((i) => {
    if (array[i] === array[i + 1]) ++counter;
  });
  return counter;
};

var count = countFrequency(array);
if (count >= 4) {
  document.getElementById("show").innerHTML = "frequent";
}
