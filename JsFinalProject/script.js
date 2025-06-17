import { quiz } from "./question.js";
import {
  body,
  header,
  progressBar,
  loader,
  pragraph,
  section,
  bttn1,
  bttn2,
  bttn3,
  bttn4,
} from "./stylings.js";
import { timer, timerDiv, timerInterval } from "./timer.js";

export let points = 0;
export const startTest = () => {
  timer();
  header.append(timerDiv);
  progressBar.value = 1;

  pragraph.innerHTML = `${quiz[0].question}`;

  bttn1.innerHTML = `${quiz[0].options[1]}`;
  bttn2.innerHTML = `${quiz[0].options[2]}`;
  bttn3.innerHTML = `${quiz[0].options[3]}`;
  bttn4.innerHTML = `${quiz[0].options[4]}`;

  section.append(bttn1);
  section.append(bttn2);
  section.append(bttn3);
  section.append(bttn4);
  body.append(pragraph);
  body.append(section);
  bttn1.addEventListener("click", () => {
    loader.style.display = "block";
    section.style.display = "none";
    pragraph.style.display = "none";

    if (bttn1.innerHTML === quiz[0].answer) {
      points++;
      console.log(points);
      loader.style.display = "block";
      section.style.display = "none";
      pragraph.style.display = "none";
    }
  });
  bttn2.addEventListener("click", () => {
    loader.style.display = "block";
    section.style.display = "none";
    pragraph.style.display = "none";

    if (bttn2.innerHTML === quiz[0].answer) {
      points++;
      console.log(points);
    }
  });
  bttn3.addEventListener("click", () => {
    loader.style.display = "block";
    section.style.display = "none";
    pragraph.style.display = "none";

    if (bttn3.innerHTML === quiz[0].answer) {
      points++;
      console.log(points);
    }
  });
  bttn4.addEventListener("click", () => {
    loader.style.display = "block";
    section.style.display = "none";
    pragraph.style.display = "none";

    if (bttn4.innerHTML === quiz[0].answer) {
      points++;
      console.log(points);
    }
  });

  let i = 1;
  let interval = setInterval(() => {
    clearInterval(timerInterval);
    timer();
    header.append(timerDiv);
    progressBar.value = i;
    if (i > quiz.length - 2) {
      clearInterval(interval);
      return;
    }
    loader.style.display = "none";
    section.style.display = "block";
    pragraph.style.display = "block";

    pragraph.innerHTML = `${quiz[i].question}`;
    bttn1.innerHTML = `${quiz[i].options[1]}`;
    bttn2.innerHTML = `${quiz[i].options[2]}`;
    bttn3.innerHTML = `${quiz[i].options[3]}`;
    bttn4.innerHTML = `${quiz[i].options[4]}`;
    section.append(bttn1);
    section.append(bttn2);
    section.append(bttn3);
    section.append(bttn4);
    body.append(pragraph);
    body.append(section);
    bttn1.addEventListener("click", () => {
      loader.style.display = "block";
      section.style.display = "none";
      pragraph.style.display = "none";

      if (quiz[i].options[1] === quiz[i].answer) {
        points++;
        console.log(points);
      }
    });
    bttn2.addEventListener("click", () => {
      loader.style.display = "block";
      section.style.display = "none";
      pragraph.style.display = "none";

      if (quiz[i].options[2] === quiz[i].answer) {
        points++;
        console.log(points);
      }
    });
    bttn3.addEventListener("click", () => {
      loader.style.display = "block";
      section.style.display = "none";
      pragraph.style.display = "none";

      if (quiz[i].options[3] === quiz[i].answer) {
        points++;
        console.log(points);
      }
    });
    bttn4.addEventListener("click", () => {
      loader.style.display = "block";
      section.style.display = "none";
      pragraph.style.display = "none";

      if (quiz[i].options[4] === quiz[i].answer) {
        points++;
        console.log(points);
      }
    });

    i++;
  }, 6000);
};
