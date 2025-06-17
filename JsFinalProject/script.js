/** @format */

import { quiz } from "./question.js";
import { body, progressBar } from "./stylings.js";
import { timer, timerParagraph } from "./timer.js";

export const startTest = () => {
  timer();
  header.append(timerParagraph);
  body.innerHTML = `
<p>
    ${quiz[0].question}  
</p>
<ul>
  in
<li>${quiz[0].options[1]}</li>
<li>${quiz[0].options[2]}</li>
<li>${quiz[0].options[3]}</li>
<li>${quiz[0].options[4]}</li>
`;
  let i = 1;
  let interval = setInterval(() => {
    timer();
    header.append(timerParagraph);
    progressBar.value = i;
    if (i > quiz.length - 1) {
      clearInterval(interval);
      return;
    }
    body.innerHTML = `
<p>
    ${quiz[i].question}  
</p>
<ul>
<li>${quiz[i].options[1]}</li>
<li>${quiz[i].options[2]}</li>
<li>${quiz[i].options[3]}</li>
<li>${quiz[i].options[4]}</li>
`;
    i++;
  }, 2000);
};
