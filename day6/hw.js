const colorScheme = document.body;
var count = 0;
const counter = document.getElementById("counter");
counter.innerHTML = count;
toggleMode = () => {
  colorScheme.classList.toggle("dark");
};
add = () => {
  counter.innerText = ++count;
};
sub = () => {
  counter.innerText = --count;
};
