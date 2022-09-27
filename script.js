function playRound(computer, player) {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {

        function getComputerChoice() {
            let options = ["rock", "paper", "scissors"];
            return options[Math.floor(Math.random() * options.length)]
        }

        function getPlayerChoice() {
            return (prompt("Choose your weapon").toLowerCase());
        }

        computer = getComputerChoice();
        player = getPlayerChoice();

        console.log(`Computer: ${computer} - Player: ${player}`)
        if (computer === "rock" && player === "scissors") {
            console.log("Computer wins. Rock beats scissors");
            computerScore += 1;
        }
        else if (computer === "scissors" && player === "rock") {

            console.log("You win. Rock beats scissors");
            playerScore += 1;

        }
        else if (computer === "scissors" && player === "paper") {

            console.log("Computer wins. Scissors beats paper");
            computerScore += 1;

        }
        else if (computer === "paper" && player === "scissors") {

            console.log("You win. Scissors beats paper");
            playerScore += 1;
        }
        else if (computer === "paper" && player === "rock") {

            console.log("Computer wins. Paper beats rock");
            computerScore += 1;
        }
        else if (computer === "rock" && player === "paper") {

            console.log("You win. Paper beats rock");
            playerScore += 1;

        } else {
            console.log("It's a tie");
            computerScore += 0;
            playerScore += 0;

        };


    }

    return (`Final score: Computer: ${computerScore} - Player: ${playerScore}`)

}







    


