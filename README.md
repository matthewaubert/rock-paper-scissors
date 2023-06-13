**Rock Paper Scissors**

This website was built as part of the Odin Project Foundations: JavaScript Basics lesson in order to implement everything I've learned thus far about JavaScript.

I learned and was able to implement JavaScript basics; but more importantly, I was able to learn about the programming process. I first understood the problem, then planned, then wrote pseudocode, and _finally_ wrote the actual game code – decomposing it into smaller divisible functions as I went.

1. Understand the Problem
  Write a program that allows a user to play a five-round game of Rock, Paper, Scissors with the computer in the browser console. The computer will randomly select one of the three choices (rock, paper, or scissors), the player will select one of the three choices, and the results will be compared. Rock beats scissors, scissors beats paper, and paper beats rock. Then the console will print the result of the round for the user – win, lose, or tie – and the selections of both the user and computer (e.g. "You lose! Paper beats rock!"). After five rounds, the winner of the game – user or computer - will be decided.
2. Plan
  • Does the program have a user interface? What will it look like? What functionality will the interface have?
    This will be a browser console program, so no user interface is necessary. The only user functionality will be the user input of "Rock", "Paper", or "Scissors".
  • What inputs will your program have? Will the user enter data or will you get input from somewhere else?
    The user will input "Rock", "Paper", or "Scissors" into the prompt. The computer will randomly select its choice from the same options.
  • What's the desired output?
    The desired output is a console log at the end of each round stating the results and the selections of both the user and computer (e.g. "You lose! Paper beats rock!"). At the end of five rounds, the desired output is a console log of the overall winner.
3. Pseudocode
  variable to hold computerWins, initialized to 0
  variable to hols userWins, initialized to 0

  repeat 5 times:
    function to randomly select computer's choice and store it in computerSelection
      get random integer between 0 and 3
      if random integer is 0
        computerSelection = "Rock"
      if random integer is 1
        computerSelection = "Paper"
      if random integer is 2
        computerSelection = "Scissors"

    prompt user for input of "Rock", "Paper", or "Scissors" and store it in userSelection
    while userSelection !== "Rock", "Paper", or "Scissors" (case insensitive)
      re-prompt user

    if userSelection is same as computer selection
      print `It's a tie! ${userSelection} is the same as ${computerSelection}!`

    if userSelection is "rock"
      if computerSelection is "paper"
        print "You lose! Paper beats Rock!"
        add 1 to computerWins
      if computerSelection is "scissors"
        print "You win! Rock beats Scissors!"
        add 1 to userWins

    if userSelection is "paper"
      if computerSelection is "scissors"
        print "You lose! Scissors beats Paper!"
        add 1 to computerWins
      if computerSelection is "rock"
        print "You win! Paper beats Rock!"
        add 1 to userWins

    if userSelection is "scissors"
      if computerSelection is "rock"
        print "You lose! Rock beats Scissors!"
        add 1 to computerWins
      if computerSelection is "paper"
        print "You win! Scissors beats Paper!"
        add 1 to userWins
  
  if userWins > computerWins
    print "Congratulations! You win!"
  if computerWins > userWins
    print "Sorry, but you lost!"
  else
    print "It's a tie!"