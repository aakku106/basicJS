/** @format */

document.addEventListener("DOMContentLoaded", () => {
  const body = document.getElementById("main");
  let container = document.createElement("section");
  let gameTitle = document.createElement("h1");
  gameTitle.textContent = "Tic Tac Toe";
  gameTitle.className = "game-title";
  body.append(gameTitle);
  body.append(container);

  let turnShow = document.createElement("h1");
  container.append(turnShow);
  container.className = "cointainer";
  let row1 = document.createElement("div");
  let row2 = document.createElement("div");
  let row3 = document.createElement("div");
  container.append(row1, row2, row3);
  let box1 = document.createElement("span");
  let box2 = document.createElement("span");
  let box3 = document.createElement("span");
  row1.append(box1, box2, box3);
  let box4 = document.createElement("span");
  let box5 = document.createElement("span");
  let box6 = document.createElement("span");
  row2.append(box4, box5, box6);
  let box7 = document.createElement("span");
  let box8 = document.createElement("span");
  let box9 = document.createElement("span");
  row3.append(box7, box8, box9);

  row1.id = "row1";
  row2.id = "row2";
  row3.id = "row3";
  box1.id = "box1";
  box2.id = "box2";
  box3.id = "box3";
  box4.id = "box4";
  box5.id = "box5";
  box6.id = "box6";
  box7.id = "box7";
  box8.id = "box8";
  box9.id = "box9";

  let turn = "O";
  let count = 0;
  let gameEnded = false;
  let arr = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];
  const handleClick = (e) => {
    if (gameEnded) return;
    if (count >= 0) gameTitle.style.display = "none";
    if (count >= 8 && gameEnded === false) draw();
    if (e.target.textContent == "") {
      if (turn === "X") {
        e.target.innerHTML = turn;
        e.target.classList.add("x-mark");
        updateArrayX(e);
        turn = "O";
        turnShow.textContent = `Next turn is: ${turn}`;
      } else {
        turnShow.innerHTML = turn;
        e.target.innerHTML = turn;
        e.target.classList.add("o-mark");
        updateArrayO(e);
        turn = "X";
        turnShow.textContent = `Next turn is: ${turn}`;
      }
      count++;
    } else return;
  };
  box1.addEventListener("click", handleClick);
  box2.addEventListener("click", handleClick);
  box3.addEventListener("click", handleClick);
  box4.addEventListener("click", handleClick);
  box5.addEventListener("click", handleClick);
  box6.addEventListener("click", handleClick);
  box7.addEventListener("click", handleClick);
  box8.addEventListener("click", handleClick);
  box9.addEventListener("click", handleClick);
  const updateArrayO = (e) => {
    if (e.target.id === "box1") arr[0][0] = 1;
    else if (e.target.id === "box2") arr[0][1] = 1;
    else if (e.target.id === "box3") arr[0][2] = 1;
    else if (e.target.id === "box4") arr[1][0] = 1;
    else if (e.target.id === "box5") arr[1][1] = 1;
    else if (e.target.id === "box6") arr[1][2] = 1;
    else if (e.target.id === "box7") arr[2][0] = 1;
    else if (e.target.id === "box8") arr[2][1] = 1;
    else if (e.target.id === "box9") arr[2][2] = 1;
    checkifGame();
  };
  const updateArrayX = (e) => {
    if (e.target.id === "box1") arr[0][0] = 2;
    else if (e.target.id === "box2") arr[0][1] = 2;
    else if (e.target.id === "box3") arr[0][2] = 2;
    else if (e.target.id === "box4") arr[1][0] = 2;
    else if (e.target.id === "box5") arr[1][1] = 2;
    else if (e.target.id === "box6") arr[1][2] = 2;
    else if (e.target.id === "box7") arr[2][0] = 2;
    else if (e.target.id === "box8") arr[2][1] = 2;
    else if (e.target.id === "box9") arr[2][2] = 2;
    checkifGame();
  };
  const checkifGame = () => {
    if (arr[0][0] === arr[0][1] && arr[0][1] === arr[0][2] && arr[0][0] !== 0)
      showGame(); //row0 ko
    else if (
      arr[1][0] === arr[1][1] &&
      arr[1][1] === arr[1][2] &&
      arr[1][1] !== 0
    )
      showGame(); //row1 ko
    else if (
      arr[2][0] === arr[2][1] &&
      arr[2][1] === arr[2][2] &&
      arr[2][2] !== 0
    )
      showGame(); //row2 ko
    // suru ko 3 ota row done
    else if (
      arr[0][0] === arr[1][0] &&
      arr[1][0] === arr[2][0] &&
      arr[0][0] !== 0
    )
      showGame(); //col0 ko
    else if (
      arr[0][1] === arr[1][1] &&
      arr[1][1] === arr[2][1] &&
      arr[1][1] !== 0 //col1 ko
    )
      showGame();
    else if (
      arr[0][2] === arr[1][2] &&
      arr[1][2] === arr[2][2] &&
      arr[2][2] !== 0
    )
      showGame(); // col2 ko
    // suru ko 3 ota col done
    else if (
      arr[0][0] === arr[1][1] &&
      arr[1][1] === arr[2][2] &&
      arr[2][2] !== 0
    )
      showGame();
    //*00
    //0*0
    //00* ko lagi
    else if (
      arr[0][2] === arr[1][1] &&
      arr[1][1] === arr[2][0] &&
      arr[1][1] !== 0
    )
      showGame();
    // 00*
    // 0*0
    // *00 ko lagi
    else return;
  };
  const showGame = () => {
    gameEnded = true;
    box1.style.cursor = "not-allowed";
    box2.style.cursor = "not-allowed";
    box3.style.cursor = "not-allowed";
    box4.style.cursor = "not-allowed";
    box5.style.cursor = "not-allowed";
    box6.style.cursor = "not-allowed";
    box7.style.cursor = "not-allowed";
    box8.style.cursor = "not-allowed";
    box9.style.cursor = "not-allowed";
    turnShow.style.display = "none";
    let winnerWrapper = document.createElement("div");
    winnerWrapper.className = "winner";
    container.append(winnerWrapper);
    let winner = document.createElement("h1");
    winnerWrapper.append(winner);
    winner.innerHTML = `The winner is: ${turn} 🥳`;
    let reStart = document.createElement("button");
    container.append(reStart);
    reStart.innerText = "Play Again";
    reStart.onclick = () => location.reload();
    gameAnimation();
  };
  const draw = () => {
    gameEnded = true;
    turnShow.style.display = "none";
    let wrapper = document.createElement("div");
    container.append(wrapper);
    let draw = document.createElement("h1");
    wrapper.append(draw);
    draw.textContent = `No one wins its draw `;
    let reStart = document.createElement("button");
    container.append(reStart);
    reStart.innerText = "Play Again";
    reStart.onclick = () => location.reload();
    body.style.background =
      "linear-gradient(45deg,rgb(225, 90, 128) 0%,rgb(212, 27, 27) 100%)";
    container.style.background =
      "linear-gradient(45deg,rgba(225, 90, 128, 0.47) 0%,rgba(212, 27, 27, 0.46) 100%)";
  };
  const gameAnimation = () =>
  {
    
  }
});
