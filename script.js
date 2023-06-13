// variable to hold computerWins, initialized to 0
let computerWins = 0;
// variable to hols userWins, initialized to 0
let userWins = 0;

// repeat 5 times:
  // function to randomly select computer's choice and store it in computerSelection
  const computerSelection = getComputerChoice();
  //console.log(computerSelection);

  // prompt user for input of "Rock", "Paper", or "Scissors" and store it in userSelection
  // while userSelection !== "Rock", "Paper", or "Scissors" (case insensitive)
    // re-prompt user

  // if userSelection is same as computer selection
    // print `It's a tie! ${userSelection} is the same as ${computerSelection}!`

  // if userSelection is "rock"
    // if computerSelection is "paper"
      // print "You lose! Paper beats Rock!"
      // add 1 to computerWins
    // if computerSelection is "scissors"
      // print "You win! Rock beats Scissors!"
      // add 1 to userWins

  // if userSelection is "paper"
    // if computerSelection is "scissors"
      // print "You lose! Scissors beats Paper!"
      // add 1 to computerWins
    // if computerSelection is "rock"
      // print "You win! Paper beats Rock!"
      // add 1 to userWins

  // if userSelection is "scissors"
    // if computerSelection is "rock"
      // print "You lose! Rock beats Scissors!"
      // add 1 to computerWins
    // if computerSelection is "paper"
      // print "You win! Scissors beats Paper!"
      // add 1 to userWins

// if userWins > computerWins
  // print "Congratulations! You win!"
// if computerWins > userWins
  // print "Sorry, but you lost!"
// else
  // print "It's a tie!"


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
      selection = "Rock";
      break;
    // if random integer is 1
    case 1:
      // computerSelection = "Paper"
      selection = "Paper";
      break;
    // if random integer is 2
    case 2:
      // computerSelection = "Scissors"
      selection = "Scissors";
      break;
  }
  
  // return selection
  return selection;
}