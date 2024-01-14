// Get computer selection
function getComputerSelection() {
  pick = "";
  num = Math.floor(Math.random() * 3);
  if (num == 0) {
    pick = "rock";
  } else if (num == 1) {
    pick = "paper";
  } else {
    pick = "scissors";
  }
  return pick;
}

//Get player selection through prompt
function getPlayerSelection(playerSelection) {
  pick = playerSelection;
  console.log(pick);
}

//Plays single round
function playRound(choice) {
  let compSel = getComputerSelection();
  let playSel = choice;
  let winLose = "";
  console.log(`${compSel} ${playSel}`);
  if (compSel == playSel) {
    winLose = "tie";
    return winLose;
  } else if (
    (compSel == "rock" && playSel == "paper") ||
    (compSel == "rock" && playSel == "scissors")
  ) {
    winLose = "lose";
    return winLose;
  } else if (compSel == "paper" && playSel == "rock") {
    winLose = "lose";
    return winLose;
  } else if (compSel == "scissors" && playSel == "paper") {
    winLose = "lose";
    return winLose;
  } else {
    winLose = "win";
    return winLose;
  }
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorButton = document.querySelector("#scissor-button");

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
