const text = document.getElementById("text");
const toggle = document.getElementById("toggle");
const show = document.getElementById("hide");
const body = document.body;

hide = () => {
  if (show.innerHTML === "show") {
    text.style.display = "block";
    show.innerHTML = "Hide";
  } else {
    text.style.display = "none";
    show.innerHTML = "show";
  }
};

mode = () => {
  if (toggle.innerHTML === "light") {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    toggle.innerHTML = "dark";
  } else {
    toggle.classList.toggle("dark");
    body.classList.toggle("dark");
    toggle.innerHTML = "light";
  }
};
