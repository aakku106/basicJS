/** @format */

// console.log(document);
let h1 = document.getElementsByTagName("h1");
document.getElementById("h1").style.backgroundColor = "darkred";
document.getElementById("h1").style.color = "white";
let ccn = document.getElementById("ccn").textContent;

// document.getElementById("ccn").innerText = "pink";

document.getElementById("ccn").style.backgroundColor = "pink";
document.getElementById("ccn").style.textAlign = "center";
document.getElementById("ccn").style.color = "darkgreen";
console.log(ccn);

// console.log(h1);
h1[0].style.color = "pink";
h1[0].style.textAlign = "center";

let classes = document.getElementsByClassName("wee");
// classes[0].style.color = "red";

for (let i of classes) {
  i.style.background = "darkred";
  i.style.color = "pink";
  i.style.textAlign = "center";
}

let query = (document.querySelector(".wee").style.backgroundColor = "darkred");
console.log(query);
let querys = document.querySelector("#ccn");
console.log(query);

let hello = document.getElementById("hello");
console.log(hello);
hello.innerHTML = `<br><br><br><i> weeeeeeeeeeeeeeeeeeeeeeeee weeeeeeeeeeeeee a b c d e f g h i j k l m n o p q r s t u v y z </i>  <br><br> `;
hello.setAttribute("class", "hlo");
hello.classList.add("arraarra");
hello.classList.add("mehhh");
hello.classList.remove("mehhh");
hello.classList.add("light");
hello.classList.toggle("dark");
hello.classList.toggle("dark");
const bth = getElementById("clk");
const body = getElementById("body");
body = () => {
  bth.classList.add("light");
  bth.classList.toggle("dark");
};
