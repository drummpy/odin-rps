function getComputerSelection() {
  pick = "";
  num = Math.floor(Math.random() * 3);
  if (num == 0) {
    pick = "rock";
  } else if (num == 1) {
    pick = "paper";
  } else {
    pick = "scissor";
  }
  return pick;
}

function displayStatus(status, compSel, playSel) {
  if (status == "win") {
    const text = document.createElement("p");
    text.textContent = "✓";
    arena.textContent = `Computer played ${compSel}, you played ${playSel}.  You win!`;
    leftScore.appendChild(text);
  } else if (status == "lose") {
    const text = document.createElement("p");
    text.textContent = "✓";
    arena.textContent = `Computer played ${compSel}, you played ${playSel}.  You lose!`;
    rightScore.appendChild(text);
  } else {
    arena.textContent = `Computer played ${compSel}, you played ${playSel}.  It's a tie!`;
  }
}

//Plays single round
function playRound(choice) {
  let compSel = getComputerSelection();
  let playSel = choice;
  let winLose = "";
  console.log(`${compSel} ${playSel}`);
  if (compSel == playSel) {
    winLose = "tie";
    displayStatus(winLose, compSel, playSel);
    return winLose;
  } else if (compSel == "rock" && playSel == "scissor") {
    winLose = "lose";
    compScore++;
    displayStatus(winLose, compSel, playSel);
    return winLose;
  } else if (compSel == "paper" && playSel == "rock") {
    winLose = "lose";
    compScore++;
    displayStatus(winLose, compSel, playSel);
    return winLose;
  } else if (compSel == "scissor" && playSel == "paper") {
    winLose = "lose";
    compScore++;
    displayStatus(winLose, compSel, playSel);
    return winLose;
  } else {
    winLose = "win";
    playerScore++;
    displayStatus(winLose, compSel, playSel);
    return winLose;
  }
}

function isGameOver() {
  if (compScore == 5 || playerScore == 5) {
    return true;
  } else {
    return false;
  }
}

function gameOver() {
  if (compScore > playerScore) {
    arena.textContent = "Game Over! Computer Wins!";
  } else {
    arena.textContent = "Game over! You win!";
  }
}

let compScore = 0;
let playerScore = 0;
const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");
const leftScore = document.querySelector(".left-score");
const rightScore = document.querySelector(".right-score");
const arena = document.querySelector(".arena");

//Cannot use rockButton.addEventListener("click", getPlayerSelection("rock"));, must indirectly call it with below in anon function
rockButton.addEventListener("click", () => {
  if (!isGameOver()) {
    console.log(playRound("rock"));
  } else {
    gameOver();
  }
});
paperButton.addEventListener("click", () => {
  if (!isGameOver()) {
    console.log(playRound("paper"));
  } else {
    gameOver();
  }
});
scissorButton.addEventListener("click", () => {
  if (!isGameOver()) {
    console.log(playRound("scissor"));
  } else {
    gameOver();
  }
});
