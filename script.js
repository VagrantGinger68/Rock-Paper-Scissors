//computerPlay randomly returns either 
//rock, paper, or scissors
//this is used for the computers turn in the game

let choices = ["rock","paper","scissors"];

function computerPlay(){ 
let computerChoice = choices[Math.floor(Math.random()*choices.length)];
console.log(computerChoice);
}


computerPlay();