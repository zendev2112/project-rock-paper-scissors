//1 - getComputerChoice - Randomly return rock, paper or scissors. Is the function to make the computer play.

//2 - Function to play a single round of rps, playRound. It should take two parameters: playerSelection (case sensitive) and computerSelection. It should return a string that declares the winner. 

//3 - NEW function called game(). The function 2- should be called inside this function to: a) keep score b) reports a winner or a loser c) use console.log to display the results of each round. d) use prompt() to get input from the user.


function getComputerChoice(){
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random()*options.length)]
}

function getPlayerChoice () {
    return (prompt("Choose your weapon").toLowerCase());
}

function playRound(computer, player){
     let computerChoice = computer;
     let playerChoice = player;
     console.log(`Computer: ${computerChoice} - Player: ${playerChoice}`)
     if (computerChoice === "rock" && playerChoice === "scissors"){
        return ("Computer wins. Rock beats scissors")
     }
     else if (computerChoice === "scissors" && playerChoice === "rock"){
        return ("You win. Rock beats scissors")
     }
     else if (computerChoice === "scissors" && playerChoice === "paper"){
        return ("Computer wins. Scissors beats paper")
     }
     else if (computerChoice === "paper" && playerChoice === "scissors"){
        return ("You win. Scissors beats paper")
     }
     else if (computerChoice === "paper" && playerChoice === "rock"){
        return ("Computer wins. Paper beats rock")
     }
     else if (computerChoice === "rock" && playerChoice === "paper"){
        return ("You win. Paper beats rock")
     } else {return "Its a tie"}
     
    }

playRound(getComputerChoice(), getPlayerChoice())

    


