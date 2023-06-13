// variable to hold computerWins, initialized to 0
// variable to hols userWins, initialized to 0

// repeat 5 times:
  // function to randomly select computer's choice and store it in computerSelection
    // get random number between 1 and 3
    // if random number is 1
      // computerSelection = "Rock"
    // if random number is 2
      // computerSelection = "Paper"
    // if random number is 3
      // computerSelection = "Scissors"

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