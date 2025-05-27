/** @format */
const showError = document.getElementById("showError");
const password = document.getElementById("password");
const username = document.getElementById("username");
const email = document.getElementById("email");
let store = {
  username: "",
  email: "",
  password: "",
};

showError.style.display = "none";
let errorText = "";
SubmitDetails = () => {
  errorText = "";
  showError.style.display = "none";
  if (password.value.trim().length < 8) {
    errorText += "\nPassword Must be more than 8 character\n";
    showError.innerHTML = errorText;
    showError.style.display = "block";
  } else if (username.value.trim().length < 4) {
    errorText += "\nUser name shall be more than 4 character\n";
    showError.innerHTML = errorText;
    showError.style.display = "block";
  } else {
    store.username = username.value;
    store.email = email.value;
    store.password = password.value;
    uiShow();
  }
};

uiShow = () => {
  alert(
    `Success\n\n username:${username.value}\temail:\t${email.value}\n password:\t${password.value}`
  );
};
