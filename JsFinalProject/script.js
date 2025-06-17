/** @format */

import { quiz } from "./question.js";
import { body, progressBar, header } from "./stylings.js";
import { timer, timerDiv, timerInterval } from "./timer.js";

export const startTest = () => {
  timer();
  header.append(timerDiv);

  body.innerHTML = `
<p>
    ${quiz[0].question}  
</p>
<section>
<button>${quiz[0].options[1]}</button>
  <br>
<button>${quiz[0].options[2]}</button>
  <br>
<button>${quiz[0].options[3]}</button>
  <br>
<button>${quiz[0].options[4]}</button>
</section>
`;
  let i = 1;
  let interval = setInterval(() => {
    clearInterval(timerInterval);
    timer();
    header.append(timerDiv);
    progressBar.value = i;
    if (i > quiz.length - 1) {
      clearInterval(interval);
      return;
    }
    body.innerHTML = `
<p>
    ${quiz[i].question}  
</p>
<section>
<button>${quiz[i].options[1]}</button>
  <br>
<button>${quiz[i].options[2]}</button>
  <br>
<button>${quiz[i].options[3]}</button>
  <br>
<button>${quiz[i].options[4]}</button>
</section>
`;
    i++;
  }, 15000);
};
