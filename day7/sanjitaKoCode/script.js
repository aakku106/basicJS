/** @format */

let div = document.getElementById("container");
div.style.backgroundColor = "#607d8b24";

let h1 = document.getElementById("hello");
h1.style.color = "green";
h1.style.fontSize = "50px";

const form = document.getElementById("register");
const message = document.getElementById("error");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document.getElementById("confirm").value.trim();

  if (!name || !email || !password || !confirmPassword) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    return;
  }

  message.textContent = "";
  updateUi(name, email);
});

function updateUi(name, email) {
  alert("✅ Registration successful");
  alert("Name: " + name);
  alert("Email: " + email);
}
