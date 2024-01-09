// Get computer selection
function getComputerSelection() {
    pick = "";
    num = Math.floor(Math.random() * 3);
    if (num == 0) {
        pick = "rock";
    } else if (num == 1) {
        pick = "paper";
    } else {
        pick = "scissors"
    }
    return pick;
}

//Get player selection through prompt
function getPlayerSelection() {
    pick = prompt("Pick Rock, Paper, or Scissors");
    lowerCase = pick.toLowerCase();
    if ((lowerCase == "rock") || (lowerCase == "paper") || (lowerCase == "scissors")) {
        return lowerCase;
    }
}

//Plays single round
function playRound() {
    compSel = getComputerSelection();
    playSel = getPlayerSelection();
    winLose = ""
    console.log(`${compSel} ${playSel}`)
    if (compSel == playSel) {
        winLose = "tie";
        console.log("tie");
        return(winLose);
    } else if ((compSel == "rock" && playSel == "paper") || (compSel == "rock" && playSel == "scissors")) {
        winLose = "lose";
        console.log("lose");
        return(winLose);
    } else if (compSel == "paper" && playSel == "rock") {
        winLose = "lose";
        console.log("lose");
        return(winLose);
    } else if (compSel == "scissors" && playSel == "paper") {
        winLose = "lose";
        console.log("lose");
        return(winLose);
    } else {
        winLose = "win";
        console.log("win")
        return(winLose);
    }
}

//Plays rounds until either player wins 5 roundsg
function game() {
    let keepPlaying = true;
    let compScore = 0;
    let playerScore = 0;
    let result = ""
    while (keepPlaying == true) {
        result = playRound();
        if (result == "lose") {
            compScore = ++compScore;
        } else if (result == "win") {
            playerScore = ++playerScore;
        }
        console.log(compScore)
        console.log(playerScore)
        if (compScore == 5) {
            console.log("Computer wins!")
            keepPlaying = false;
        } else if (playerScore == 5) {
            console.log("You win!")
            keepPlaying = false;
        }
    }
}

game()