// variable to store scores, initialized to 0
let computerScore = 0;
let userScore = 0;

const choices = ["rock", "paper", "scissors"];

// game();



// function to play a 5-round game of Rock Paper Scissors, keep score, and report the winner
function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection;
    // prompt user for input of "Rock", "Paper", or "Scissors" and store it in playerSelection
    do {
      playerSelection = prompt("Want to play Rock Paper Scissors?\nChoose 'rock', 'paper', or 'scissors'").toLowerCase();
    } while (!choices.includes(playerSelection));

    let computerSelection = getComputerChoice();

    console.log(playRound(playerSelection, computerSelection));
  }

  if (userScore > computerScore) {
    console.log("Congratulations! You win!");
  }
  else if (computerScore > userScore) {
    console.log("Sorry, you lose!");
  }
  else {
    console.log("It's a tie!");
  }
}

// function to randomly select computer's choice and store it in computerSelection
function getComputerChoice() {
  let selection;
  let randNum = Math.floor(Math.random() * 3); // get random integer between 0 and 2
  selection = choices[randNum]; // computer selection is randNum index in choices array
  
  return selection;
}

// function to play a single round of Rock Paper Scissors; input: playerSelection
// returns a string that declares winner of the round (e.g. "You Lose! Paper beats Rock")
function playRound(playerSelection) {
  let computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) { // if player and computer make same choice
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    return `It's a tie! ${playerSelection} is the same as ${computerSelection}.`;
  }

  else if (playerSelection === choices[0]) { // if player chooses rock
    switch (computerSelection) {
      case choices[1]: // if computer chooses paper
        computerScore++;
        return "You lose! Paper beats Rock!";
        break;
      case choices[2]: // if computer chooses scissors
        userScore++;
        return "You win! Rock beats Scissors!";
        break;
    }
  }

  else if (playerSelection === choices[1]) { // if player chooses paper
    switch (computerSelection) {
      case choices[2]: // if computer chooses scissors
        computerScore++;
        return "You lose! Scissors beats Paper!";
        break;
      case choices[0]: // if computer chooses rock
        userScore++;
        return "You win! Paper beats Rock!";
        break;
    }
  }

  else if (playerSelection === choices[2]) { // if player chooses scissors
    switch (computerSelection) {
    case choices[0]: // if computer chooses rock
      computerScore++;
      return "You lose! Rock beats Scissors!";
      break;
    case choices[1]: // if computer chooses paper
      userScore++;
      return "You win! Scissors beats Paper!";
      break;
    }
  }
}


const buttons = document.querySelectorAll('#buttons button'); // select buttons
buttons.forEach(button => { // iterate over buttons
  // add a click event listener: invoke playRound function with correct playerSelection
  let playerSelection = button.innerText;
  button.addEventListener('click', () => console.log(playRound(playerSelection)));
});