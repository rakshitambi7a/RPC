let selection = {
    playerSelection:null,
    computerSelection:null
}
let gameResult = {
    playerWinCount: 0,
    computerWinCount: 0
}
// get choice from the user
function getPlayerChoice() {
    let input = prompt("Rock, Paper, or Scissors?");
    input = input.toLowerCase();
    return input;
}

// generate choice from the computer
function getComputerChoice() {
    let rv = Math.floor(Math.random() * 3);
    if (rv === 0) {
        return "rock";
    } else if (rv === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}
//getting selection
    function select(playerSelection,computerSelection){
    selection.playerSelection = playerSelection;
    selection.computerSelection = getComputerChoice();
    if(selection.computerSelection=="rock"){
        document.querySelector("#computerChoice").textContent = '✊';
    }
    else if(selection.computerSelection=="paper"){
            document.querySelector("#computerChoice").textContent = '✋';
    }
    else if(selection.computerSelection=="scissors"){
        document.querySelector("#computerChoice").textContent = '✌️';
    }
    }

// playing a single round
function playRound(playerSelection) {
    select(playerSelection);
    if (
        (selection.computerSelection === "rock" && selection.playerSelection === "scissors") ||
        (selection.computerSelection === "scissors" && selection.playerSelection === "paper") ||
        (selection.computerSelection === "paper" && selection.playerSelection === "rock")
    ) {
        document.querySelector("#currentResult").textContent='Computer +1';
        gameResult.computerWinCount++;

    }
    else if (
        (selection.playerSelection === "rock" && selection.computerSelection  === "scissors") ||
        (selection.playerSelection === "scissors" && selection.computerSelection  === "paper") ||
        (selection.playerSelection === "paper" && selection.computerSelection === "rock")){    
        document.querySelector("#currentResult").textContent='You +1';
        gameResult.playerWinCount++;
        }
    else{
        document.querySelector("#currentResult").textContent = 'Tie';
    }
    document.querySelector("#score").textContent=`${gameResult.playerWinCount}:${gameResult.computerWinCount}`;
    if(gameResult.playerWinCount+gameResult.computerWinCount >=5){
        let winner = gameResult.computerWinCount > gameResult.playerWinCount? "Computer":"You";
        const stage = document.querySelector(".stage");
        stage.id = "result";
        document.querySelector("#result").textContent=`${winner} won`;
        document.querySelector("#currentResult").style.display="none";
        document.querySelector("#play").style.display="block";
    
    }
}
