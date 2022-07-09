let choices = ["rock","paper","scissors"];
let winners = [];

function game(){
    let roundAmount = parseInt(prompt("How many rounds do you want to play?"))
    for( let i = 1; i < roundAmount + 1; i++){
        playRound(i);
    }
    logWins();
    }

function playerChoice(){
    let playerSelection = prompt("Rock, Paper, or Scissors?");
    while(playerSelection == null){
        playerSelection = prompt("Rock, Paper, or Scissors?");
    }
    playerSelection = playerSelection.toLowerCase();
    let check = validateChoices(playerSelection)
    while(check == false){
    playerSelection = prompt("Rock, Paper, or Scissors? Spelling has to be exact")
    while(playerSelection == null){
        playerSelection = prompt("Rock, Paper, or Scissors?");
    }
    playerSelection = playerSelection.toLowerCase();
    check = validateChoices(playerSelection)
    }
    return playerSelection;
}

function computerChoice(){
    let computerSelection = choices[Math.floor(Math.random()*choices.length)]
    return computerSelection;
}

function validateChoices(choice){
    if(choices.includes(choice)){
        return true;
    } else{
        return false;
    }
}

function playRound(round){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    validateChoices();
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection, winner, round)
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection === computerSelection){
        return "Tie"
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ){
        return "Player"
    } else{
        return "Computer"
    }
}

//log round winner
function logRound(playerSelection, computerSelection, winner, round){
    console.log("Round:", round)
    console.log("Player Chose:", playerSelection)
    console.log("Computer Chose:", computerSelection)
    console.log(winner, 'Won the Round')
    console.log("------------------------")
}

//log game winner
function logWins(){
let playerWins = winners.filter((item) => item == "Player").length;
let computerWins = winners.filter((item) => item == "Computer").length;
let ties = winners.filter((item) => item == "Tie").length;
console.log("Results: ")
console.log("Player wins:", playerWins)
console.log("Computer wins:", computerWins)
console.log("Ties:", ties)
console.log("------------------------")
}




