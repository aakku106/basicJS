/** @format */

let div = document.getElementById("container");
div.style.backgroundColor = "#607d8b24";
div.style.height = "90vh";
div.style.width = "40vw";
div.style.overflow = "hidden";
div.style.marginLeft = "30%";
div.style.marginBottom = "80%";

let h1 = document.getElementById("hello");
h1.style.color = "green";
h1.style.fontSize = "50px";
const but = document.getElementById("showbtn");
const form = document.getElementById("register");
const message = document.getElementById("error");
const names = document.getElementById("name");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    message.textContent = "Passwords do not match.";
    return;
  }

  if (names.value.length < 4) {
    message.textContent = "name must have 4 letters";
    message.style.display = "block";
    return;
  }

  if (password.value.length < 8) {
    message.textContent = "password must contain 8 letters";
    message.style.display = "block";
    return;
  }
  if (
    !names.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  message.textContent = "";
  updateUI(names, email);
  form.reset();
});

but.addEventListener("click", function () {
  // register.classList.toggle("hidden");
  //  register.classList.toggle("visible");
  updateUI(names, email);
});

function updateUI(name, email) {
  alert("✅ Registration successful");
  alert("Name: " + name);
  alert("Email: " + email);
}
