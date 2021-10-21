import leaderBoard from "./ranking";

const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
/*const cellElements = document.querySelectorAll("[data-cell]");
const board = document.getElementById("board");
const winningMessageElement = document.getElementById("winningMessage");
const restartButton = document.getElementById("restartButton");
const winningMessageTextElement = document.querySelector(
  "[data-winning-message-text]"
);
const p1_name = document.getElementById("p1msg");
const score = document.getElementById("smsg");
const p2_name = document.getElementById("p2msg");*/

const initialS1 = localStorage.getItem(localStorage.getItem("p_1"));
const initialS2 = localStorage.getItem(localStorage.getItem("p_2"));

let circleTurn;

//startGame();

//restartButton.addEventListener("click", startGame);

const startGame = () => {
  circleTurn = false;
  scoreUpdate();

  leaderBoard();

  const p1_name = document.getElementById("p1msg");
  const p2_name = document.getElementById("p2msg");
  const winningMessageElement = document.getElementById("winningMessage");
  const cellElements = document.querySelectorAll("[data-cell]");

  let d1 = localStorage.getItem("p_1");
  let d2 = localStorage.getItem("p_2");
  p1_name.innerHTML = "P1: " + d1;
  p2_name.innerHTML = "P2: " + d2;

  if (circleTurn) {
    p2_name.classList.add("turn");
    p1_name.classList.remove("turn");
  } else {
    p1_name.classList.add("turn");
    p2_name.classList.remove("turn");
  }

  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(CIRCLE_CLASS);
    cell.removeEventListener("click", handleClick);
    cell.addEventListener("click", handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessageElement.classList.remove("show");
};

const handleClick = (e) => {
  // placeMark
  // Check for win
  // Check for draw
  // Switch turn
  const cell = e.target;
  const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurns();
    setBoardHoverClass();
  }
};

const endGame = (draw) => {
  const winningMessageElement = document.getElementById("winningMessage");
  const winningMessageTextElement = document.querySelector(
    "[data-winning-message-text]"
  );
  if (draw) {
    winningMessageTextElement.innerText = "Draw!";
  } else {
    let d1 = localStorage.getItem("p_1");
    let d2 = localStorage.getItem("p_2");

    if (circleTurn) {
      let s2 = localStorage.getItem(d2);
      s2++;
      localStorage.setItem(d2, s2);
    } else {
      let s1 = localStorage.getItem(d1);
      s1++;
      localStorage.setItem(d1, s1);
    }
    scoreUpdate();

    leaderBoard();

    winningMessageTextElement.innerText = `${
      circleTurn ? "Player 2" : "Player 1"
    } Wins!`;
  }
  winningMessageElement.classList.add("show");
};

const isDraw = () => {
  const cellElements = document.querySelectorAll("[data-cell]");
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    );
  });
};

const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const swapTurns = () => {
  circleTurn = !circleTurn;
  const p1_name = document.getElementById("p1msg");
  const p2_name = document.getElementById("p2msg");

  if (circleTurn) {
    p2_name.classList.add("turn");
    p1_name.classList.remove("turn");
  } else {
    p1_name.classList.add("turn");
    p2_name.classList.remove("turn");
  }
};

const setBoardHoverClass = () => {
  const board = document.getElementById("board");
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (circleTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
};

const checkWin = (currentClass) => {
  const cellElements = document.querySelectorAll("[data-cell]");
  return WINNING_COMBINATIONS.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
};

const scoreUpdate = () => {
  const score = document.getElementById("smsg");
  let S1 = localStorage.getItem(localStorage.getItem("p_1"));
  let S2 = localStorage.getItem(localStorage.getItem("p_2"));
  S1 = S1 - initialS1;
  S2 = S2 - initialS2;
  score.innerHTML = `${S1} : ${S2}`;
};

export default startGame;
