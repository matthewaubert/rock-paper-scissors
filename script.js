// variable to store scores, initialized to 0
let computerScore = 0;
let userScore = 0;

const choices = ["rock", "paper", "scissors"];

playGame();


function playGame() {
  // click buttons to play a round
  const buttons = document.querySelectorAll('#buttons button'); // select buttons
  buttons.forEach(button => { // iterate over buttons
    // add a click event listener: invoke playRound function with correct playerSelection
    let playerSelection = button.innerText;
    button.addEventListener('click', () => playRound(playerSelection));
  });
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
  let winner = undefined;
  let msg;

  if (playerSelection === computerSelection) { // if player and computer make same choice
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    msg = `It's a tie! ${playerSelection} is the same as ${computerSelection}.`;
  }

  else if (playerSelection === choices[0]) { // if player chooses rock
    switch (computerSelection) {
      case choices[1]: // if computer chooses paper
        winner = 1;
        msg = "You lose! Paper beats Rock!";
        break;
      case choices[2]: // if computer chooses scissors
        winner = 0;
        msg = "You win! Rock beats Scissors!";
        break;
    }
  }

  else if (playerSelection === choices[1]) { // if player chooses paper
    switch (computerSelection) {
      case choices[2]: // if computer chooses scissors
        winner = 1;
        msg = "You lose! Scissors beats Paper!";
        break;
      case choices[0]: // if computer chooses rock
        winner = 0;
        msg = "You win! Paper beats Rock!";
        break;
    }
  }

  else if (playerSelection === choices[2]) { // if player chooses scissors
    switch (computerSelection) {
    case choices[0]: // if computer chooses rock
      winner = 1;
      msg = "You lose! Rock beats Scissors!";
      break;
    case choices[1]: // if computer chooses paper
      winner = 0;
      msg = "You win! Scissors beats Paper!";
      break;
    }
  }

  displayResults(msg); // display results of round
  updateScore(winner); // update score

  if (userScore === 5) { // if user reaches 5 points
    announceWinner(0); // announce winner
    return; // end game
  } else if (computerScore === 5) { // if computer reaches 5 points
    announceWinner(1);
    return;
  }
}

// function to display results of round; input: message
function displayResults(msg) {
  const results = document.querySelector('#results'); // select results id
  results.innerText = msg;
}

// change score displayed after button is clicked; input: 0 for user win, 1 for computer win
function updateScore(winner) {
  if (winner === 0) { // if user is winner (0)
    userScore++; // increment user score
    const userScoreDisplay = document.querySelector('#user'); // select user id
    userScoreDisplay.innerText = `You: ${userScore}`; // update user score display text
  } else if (winner === 1) { // if computer is winner (1)
    computerScore++; // increment computer score
    const compScoreDisplay = document.querySelector('#comp'); // select comp id
    compScoreDisplay.innerText = `Computer: ${computerScore}`; // update user score display text
  }
  // if tie (winner is undefined), do nothing
}

// announce winner of game; input: 0 for user win, 1 for computer win
function announceWinner(winner) {
  const winnerDisplay = document.querySelector('#winner'); // select winner div

  if (winner === 0) { // if user is winner (0)
    // add text to winner div: "Congratulations! You win!"
    winnerDisplay.innerText = "Congratulations! You win!";
  } else { // if computer is winner (1)
    // add text to winner div: "Sorry, you lose!"
    winnerDisplay.innerText = "Sorry, you lose!"
  }
}

//   if (userScore > computerScore) {
//     console.log("Congratulations! You win!");
//   }
//   else if (computerScore > userScore) {
//     console.log("Sorry, you lose!");