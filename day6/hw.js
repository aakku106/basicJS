/** @format */

const colorScheme = document.body;
var count = 0;
const counter = document.getElementById("counter");
counter.innerHTML = count;
const button = document.getElementsByTagName("button");

toggleMode = () => {
  colorScheme.classList.toggle("dark");
  for (i of button) {
    i.classList.toggle("dark");
  }
};
add = () => {
  counter.innerText = ++count;
};
sub = () => {
  counter.innerText = --count;
};
reset = () => {
  counter.innerText = 0;
};
