//1 - getComputerChoice - Randomly return rock, paper or scissors. Is the function to make the computer play.

//2 - Function to play a single round of rps, playRound. It should take two parameters: playerSelection (case sensitive) and computerSelection. It should return a string that declares the winner. 

//3 - NEW function called game(). The function 2- should be called inside this function to: a) keep score b) reports a winner or a loser c) use console.log to display the results of each round. d) use prompt() to get input from the user.


function computerSelection(){
    let options = ["rock", "paper", "scissors"]
    return options[0]
}
