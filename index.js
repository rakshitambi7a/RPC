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
    function selection(playerSelection,computerSelection){
    selection.playerSelection = getPlayerChoice();
    selection.computerSelection = getComputerChoice();
    }

// playing a single round
function playRound(gameResult) {
    selection();
    if(selection.computerSelection===selection.playerSelection){
        console.log("Ties!");
        playRound(gameResult);
    }
    else if (
        (selection.computerSelection === "rock" && selection.playerSelection === "scissors") ||
        (selection.computerSelection === "scissors" && selection.playerSelection === "paper") ||
        (selection.computerSelection === "paper" && selection.playerSelection === "rock")
    ) {
        console.log("Looooser!");
        gameResult.computerWinCount++;
    }
    else{    
        console.log("You won!");
    gameResult.playerWinCount++;
        }
    }
// play a set of five rounds
function game() {
    let gameResult = {
        playerWinCount: 0,
        computerWinCount: 0,
    };
    let selection = {
        playerSelection:null,
        computerSelection:null,
    };
    for (let i = 0; i < 5; i++) {
        
        playRound(gameResult,selection);
    }

    console.log("player:"+gameResult.playerWinCount+" computer:"+gameResult.computerWinCount);


    if (gameResult.playerWinCount > gameResult.computerWinCount) {
        console.log("Player Wins!");
    } else {
        console.log("Computer Wins!");
    }
}

// driver
game();
