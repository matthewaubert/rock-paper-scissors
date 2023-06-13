// variable to store computerWins, initialized to 0
let computerWins = 0;
// variable to store userWins, initialized to 0
let userWins = 0;

// play a 5-round game of Rock Paper Scissors, keep score, and report the winner
game();



// function to play a 5-round game of Rock Paper Scissors, keep score, and report the winner
function game() {
  // repeat 5 times:
  for (let i = 0; i < 5; i++) {
    let playerSelection;
    // prompt user for input of "Rock", "Paper", or "Scissors" and store it in playerSelection
    do {
      playerSelection = prompt("Want to play Rock Paper Scissors?\nChoose 'rock', 'paper', or 'scissors'").toLowerCase();
      // while playerSelection !== "Rock", "Paper", or "Scissors" (case insensitive)
    } while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors");

    // randomly select computer's choice and store it in computerSelection
    let computerSelection = getComputerChoice();
    //console.log(computerSelection);

    // play a single round of Rock Paper Scissors. Takes playerSelection and computerSelection as parameters, returns a string that declares winner of the round (e.g. "You Lose! Paper beats Rock")
    console.log(playRound(playerSelection, computerSelection));
  }

  // if userWins > computerWins
  if (userWins > computerWins) {
    // print "Congratulations! You win!"
    console.log("Congratulations! You win!");
  }
  // if computerWins > userWins
  else if (computerWins > userWins) {
    // print "Sorry, but you lost!"
    console.log("Sorry, you lose!");
  }
  // else
  else {
    // print "It's a tie!"
    console.log("It's a tie!");
  }
}

// function to randomly select computer's choice and store it in computerSelection
function getComputerChoice() {
  // initialize selection
  let selection;
  // get random integer between 0 and 2
  let randNum = Math.floor(Math.random() * 3);
  switch (randNum) {
    // if random integer is 0
    case 0:
      // computerSelection = "Rock"
      selection = "rock";
      break;
    // if random integer is 1
    case 1:
      // computerSelection = "Paper"
      selection = "paper";
      break;
    // if random integer is 2
    case 2:
      // computerSelection = "Scissors"
      selection = "scissors";
      break;
  }
  
  // return selection
  return selection;
}

// function to play a single round of Rock Paper Scissors. Takes playerSelection and computerSelection as parameters, returns a string that declares winner of the round (e.g. "You Lose! Paper beats Rock")
function playRound(playerSelection, computerSelection) {
  // if playerSelection is same as computer selection
  if (playerSelection === computerSelection) {
    // capitalize playerSelection
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
    // capitalize computerSelection
    computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
    // return `It's a tie! ${playerSelection} is the same as ${computerSelection}!`
    return `It's a tie! ${playerSelection} is the same as ${computerSelection}.`;
  }

  // if playerSelection is "rock"
  else if (playerSelection === "rock") {
    switch (computerSelection) {
      // if computerSelection is "paper"
      case "paper":
        // add 1 to computerWins
        computerWins++;
        // return "You lose! Paper beats Rock!"
        return "You lose! Paper beats Rock!";
        break;
      // if computerSelection is "scissors"
      case "scissors":
        // add 1 to userWins
        userWins++;
        // return "You win! Rock beats Scissors!"
        return "You win! Rock beats Scissors!";
        break;
    }
  }

  // if playerSelection is "paper"
  else if (playerSelection === "paper") {
    switch (computerSelection) {
      // if computerSelection is "scissors"
      case "scissors":
        // add 1 to computerWins
        computerWins++;
        // return "You lose! Scissors beats Paper!"
        return "You lose! Scissors beats Paper!";
        break;
      // if computerSelection is "rock"
      case "rock":
        // add 1 to userWins
        userWins++;
        // return "You win! Paper beats Rock!"
        return "You win! Paper beats Rock!";
        break;
    }
  }

  // if playerSelection is "scissors"
  else if (playerSelection === "scissors") {
    switch (computerSelection) {
    // if computerSelection is "rock"
    case "rock":
      // add 1 to computerWins
      computerWins++;
      // return "You lose! Rock beats Scissors!"
      return "You lose! Rock beats Scissors!";
      break;
    // if computerSelection is "paper"
    case "paper":
      // add 1 to userWins
      userWins++;
      // return "You win! Scissors beats Paper!"
      return "You win! Scissors beats Paper!";
      break;
    }
  }
}