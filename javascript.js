// Get computer selection
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

function displayStatus(status) {
  const text = document.createElement("span");
  text.textContent = status;
  displayDiv.appendChild(text);
}

//Plays single round
function playRound(choice) {
  let compSel = getComputerSelection();
  let playSel = choice;
  let winLose = "";
  console.log(`${compSel} ${playSel}`);
  if (compSel == playSel) {
    winLose = "tie";
    displayStatus(winLose);
    return winLose;
  } else if (compSel == "rock" && playSel == "scissor") {
    winLose = "lose";
    displayStatus(winLose);
    return winLose;
  } else if (compSel == "paper" && playSel == "rock") {
    winLose = "lose";
    displayStatus(winLose);
    return winLose;
  } else if (compSel == "scissor" && playSel == "paper") {
    winLose = "lose";
    displayStatus(winLose);
    return winLose;
  } else {
    winLose = "win";
    displayStatus(winLose);
    return winLose;
  }
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");
const displayDiv = document.querySelector("#display");

//Cannot use rockButton.addEventListener("click", getPlayerSelection("rock"));, must indirectly call it with below in anon function
rockButton.addEventListener("click", () => {
  console.log(playRound("rock"));
});
paperButton.addEventListener("click", () => {
  console.log(playRound("paper"));
});
scissorButton.addEventListener("click", () => {
  console.log(playRound("scissor"));
});
