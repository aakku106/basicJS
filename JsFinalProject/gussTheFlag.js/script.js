const allCountries = [
  { name: "France", flag: "https://flagcdn.com/w320/fr.png" },
  { name: "Japan", flag: "https://flagcdn.com/w320/jp.png" },
  { name: "Brazil", flag: "https://flagcdn.com/w320/br.png" },
  { name: "Germany", flag: "https://flagcdn.com/w320/de.png" },
  { name: "India", flag: "https://flagcdn.com/w320/in.png" },
  { name: "Canada", flag: "https://flagcdn.com/w320/ca.png" },
  { name: "Australia", flag: "https://flagcdn.com/w320/au.png" },
  { name: "Italy", flag: "https://flagcdn.com/w320/it.png" },
  { name: "Mexico", flag: "https://flagcdn.com/w320/mx.png" },
  { name: "South Korea", flag: "https://flagcdn.com/w320/kr.png" },
  { name: "Argentina", flag: "https://flagcdn.com/w320/ar.png" },
  { name: "United States", flag: "https://flagcdn.com/w320/us.png" },
  { name: "Russia", flag: "https://flagcdn.com/w320/ru.png" },
  { name: "China", flag: "https://flagcdn.com/w320/cn.png" },
  { name: "United Kingdom", flag: "https://flagcdn.com/w320/gb.png" },
  { name: "Spain", flag: "https://flagcdn.com/w320/es.png" },
  { name: "Portugal", flag: "https://flagcdn.com/w320/pt.png" },
  { name: "Sweden", flag: "https://flagcdn.com/w320/se.png" },
  { name: "Norway", flag: "https://flagcdn.com/w320/no.png" },
  { name: "Netherlands", flag: "https://flagcdn.com/w320/nl.png" },
  { name: "Greece", flag: "https://flagcdn.com/w320/gr.png" },
  { name: "Turkey", flag: "https://flagcdn.com/w320/tr.png" },
  { name: "Egypt", flag: "https://flagcdn.com/w320/eg.png" },
  { name: "South Africa", flag: "https://flagcdn.com/w320/za.png" },
  { name: "Indonesia", flag: "https://flagcdn.com/w320/id.png" },
  { name: "Thailand", flag: "https://flagcdn.com/w320/th.png" },
];

document.addEventListener("DOMContentLoaded", () => {
  const countryNameElement = document.getElementById("country-name");
  const flag1 = document.getElementById("flag1");
  const flag2 = document.getElementById("flag2");
  const flag3 = document.getElementById("flag3");
  const flagOptions = document.querySelectorAll(".flag-option");
  const roundCount = document.getElementById("round-count");
  const scoreElement = document.getElementById("score");
  const nextButton = document.getElementById("next-btn");
  const restartButton = document.getElementById("restart-btn");
  const resultElement = document.getElementById("result");

  let countries = allCountries;
  let currentRound = 1;
  let maxRounds = 15;
  let score = 0;
  let correctAnswerIndex = 0;
  let hasAnswered = false;

  startGame = () => {
    currentRound = 1;
    score = 0;
    roundCount.textContent = currentRound;
    scoreElement.textContent = score;
    nextButton.disabled = true;
    nextButton.style.display = "block";
    restartButton.style.display = "none";

    loadNewQuestion();
  };

  loadNewQuestion = () => {
    hasAnswered = false;
    resultElement.textContent = "";

    flagOptions.forEach((option) => {
      option.className = "flag-option";
      option.style.pointerEvents = "auto";
    });

    const shuffledCountries = [...countries].sort(() => 0.5 - Math.random());
    const questionCountries = shuffledCountries.slice(0, 3);

    correctAnswerIndex = Math.floor(Math.random() * 3);
    const correctCountry = questionCountries[correctAnswerIndex];

    countryNameElement.textContent = correctCountry.name;

    flag1.src = questionCountries[0].flag;
    flag2.src = questionCountries[1].flag;
    flag3.src = questionCountries[2].flag;

    roundCount.textContent = currentRound;
  };

  handleFlagClick = (event) => {
    if (hasAnswered) return;

    hasAnswered = true;

    const clickedFlagOption = event.currentTarget;
    const clickedIndex = Array.from(flagOptions).indexOf(clickedFlagOption);

    flagOptions[correctAnswerIndex].classList.add("correct");

    if (clickedIndex === correctAnswerIndex) {
      score++;
      scoreElement.textContent = score;
      resultElement.textContent = "Correct!";
    } else {
      clickedFlagOption.classList.add("incorrect");
      resultElement.textContent = "Wrong!";
    }

    flagOptions.forEach((option) => {
      option.style.pointerEvents = "none";
    });

    nextButton.disabled = false;
  };

  nextQuestion = () => {
    currentRound++;

    if (currentRound > maxRounds) {
      resultElement.textContent = `Game Over!  final score is ${score}/${maxRounds}`;
      nextButton.style.display = "none";
      restartButton.style.display = "block";
    } else {
      loadNewQuestion();
    }
  };

  flagOptions.forEach((option) => {
    option.addEventListener("click", handleFlagClick);
  });

  nextButton.addEventListener("click", nextQuestion);
  restartButton.addEventListener("click", startGame);

  startGame();
});
