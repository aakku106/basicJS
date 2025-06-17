export const timerParagraph = document.createElement("p");
const maxTime = 15;
export const timer = () => {
  let tempTime = maxTime;
  if (tempTime < 0) return;
  for (let i = 0; i < maxTime - 1; i++) {
    timerParagraph.innerHTML = tempTime--;
  }
};
