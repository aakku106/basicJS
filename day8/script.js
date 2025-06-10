/** @format */

const body = document.body;
const addBtn = document.getElementById("add");
const searchBtn = document.getElementById("search");
const searchBar = document.getElementById("searchBar");
const ul = document.getElementById("mainContainer");

let storage = [];

let tempSearchBar = {
  tempHold: "",
};

const addFieldFunc = () => {
  const li = document.createElement("li");
  const spanCheck = document.createElement("span");
  const spanSetting = document.createElement("span");
  const input = document.createElement("input");
  const spanTick = document.createElement("span");

  spanCheck.className = "checkToggle material-symbols-outlined";
  spanCheck.textContent = "radio_button_unchecked";
  spanSetting.className = "setting material-symbols-outlined";
  spanSetting.textContent = "cancel";
  spanTick.className = "tick material-symbols-outlined";
  spanTick.textContent = "check";

  input.type = "text";
  input.className = "task";
  input.placeholder = "Enter task";
  input.required = true;

  input.addEventListener("keyup", (e) => {
    if (e.key == "Enter") storage.push(input.value);
  });

  spanCheck.addEventListener("click", () => {
    spanCheck.textContent =
      spanCheck.textContent === "check_circle"
        ? "radio_button_unchecked"
        : "check_circle";
  });

  spanSetting.addEventListener("click", () => {
    li.style.display = "none";
  });

  li.append(spanCheck);
  li.append(input);
  li.append(spanSetting);
  li.append(spanTick);

  ul.append(li);
};

addBtn.addEventListener("click", () => {
  addFieldFunc();
});
body.addEventListener("dblclick", () => {
  addFieldFunc();
});
searchBtn.addEventListener("click", () => {
  if (addBtn.style.display !== "none") {
    searchBar.classList.toggle("show");
    searchBtn.style.left = "85%";
    addBtn.style.display = "none";
    tempSearchBar.tempHold = searchBar.value;
    searchBar.value = "";
  } else {
    searchBar.classList.toggle("show");
    searchBtn.style.left = "2rem";
    addBtn.style.display = "block";
    findValues(tempSearchBar.tempHold);
  }
});

const findValues = (e) => {
  let sr = storage.filter((v) => {
    return v === e;
  });

  console.log(storage);
  console.log(sr);
  tempSearchBar.tempHold = "";
};
