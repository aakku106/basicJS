const round = document.getElementById("round");
const click = document.getElementById("click");
let count = 9;
let TimerStopper;

click.addEventListener("click", () => {
  TimerStopper = setInterval(timer, 1000);
});

const timer = () => {
  if (count < 6) {
    round.src = "./eggCracked.png";
  }
  if (count < 1) {
    clearInterval(TimerStopper);
    click.innerHTML = "khatam!!";
    count = 9;
    return;
  }

  click.innerHTML = count--;
};
