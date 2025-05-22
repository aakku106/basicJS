/** @format */

// ---------------------------------Function------------------------------------//
// function  is reusable block of code which is used to perform specific task

function basic() {
  console.log("wee");
}
basic();

function parameter(name) {
  console.log("name is ", name);
}
parameter("ccn");
function parameterUndefined(name, surname) {
  console.log("name is ", name, surname);
}
parameterUndefined("ccn");

function WithReturn() {
  //   console.log("name is ");
  return 106;
}
WithReturn(); // didn't shows 106 cause
console.log(WithReturn());

function WithReturnAdd(a, b) {
  return a + b;
}
console.log(WithReturnAdd("ccn", "weee"));

result_op = (a, b) => {
  return a + b;
};
