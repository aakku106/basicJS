/** @format */
const showError = document.getElementById("showError");
const password = document.getElementById("password");
const username = document.getElementById("username");
const email = document.getElementById("email");
const ui = document.getElementById("showDetails");
const holder = document.getElementById("holder");

let store = {
  username: "EMPTY",
  email: "EMPTY",
  password: "EMPTY",
};

showError.style.display = "none";
showError.style.color = "red";
ui.style.display = "none";
holder.style.display = "none";
let errorText = "";
let showChange = "";

const SubmitDetails = (e) => {
  e.preventDefault();
  errorText = "";
  showError.style.display = "none";
  if (username.value.trim().length < 4) {
    errorText += "User name shall be more than 4 character <br>";
    username.style.border = "1.5px solid red";
  } else username.style.border = "none";
  if (!email.checkValidity()) {
    errorText += "Please enter a valid email address.<br>";
    email.style.border = "1.5px solid red";
  } else email.style.border = "none";

  if (password.value.trim().length < 8) {
    errorText += "Password Must be more than 8 character <br>";
    password.style.border = "1px solid red";
  } else password.style.border = "none";

  if (errorText !== "") {
    showError.innerHTML = errorText;
    showError.style.display = "block";
    return;
  } else {
    store.username = username.value;
    store.email = email.value;
    store.password = password.value;
    document.getElementById("form").reset();
  }
};
const uiShow = () => {
  showChange = `username: ${store.username} <br> email: ${store.email} <br>  password: ${store.password}`;
  ui.innerHTML = showChange;
  ui.style.display = "block";
  holder.style.display = "block";
};

const hideUI = () => {
  ui.style.display = "none";
  holder.style.display = "none";
};
