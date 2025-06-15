/** @format */

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let char = "0123456789ABCDEF";

const generateColor = () => {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let randomNum = Math.floor(Math.random() * 16);
    color += char[randomNum];
  }
  return color;
};
const assignColor = () => {
  let color = generateColor();
  console.log(color);
  document.body.style.backgroundColor = color;
};
let intervalId;
const handleInterval = () => {
  intervalId = setInterval(assignColor, 1000);
};
const stopInterval = () => {
  clearInterval(intervalId);
};
