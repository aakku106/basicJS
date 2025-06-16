import { quiz } from "./question.js";
import { body, progressBar } from "./stylings.js";

export const startTest = () => {
  body.innerHTML = `
<p>
    ${quiz[0].question}  
</p>
<ul>
<li>${quiz[0].options[1]}</li>
<li>${quiz[0].options[2]}</li>
<li>${quiz[0].options[3]}</li>
<li>${quiz[0].options[4]}</li>
`;
  let i = 1;
  let interval = setInterval(() => {
    if (i > quiz.length - 1) {
      clearInterval(interval);
      return;
    }
    progressBar.value = i;
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
  }, 100);
};
