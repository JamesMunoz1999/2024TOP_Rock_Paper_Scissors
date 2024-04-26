let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let randomNumber = Math.random()
    if (randomNumber >= 0 && randomNumber <= 0.33) {
        return "rock"
    } else if (randomNumber > 0.33 && randomNumber <= 0.66) {
        return "paper"
    } else if (randomNumber > 0.66) {
        return "scissors"
    }
}

function getHumanChoice() {
    let choice = prompt()

    return choice
}



//Write a function that takes the human and computer choices as arguments
//Plays a Single Round  
//Increments the round winner's score
//Logs the winner announcement and Displays both current scores

function playRound(humanChoice, computerChoice){
    let humanSelection = getHumanChoice().toLowerCase()
    let computerSelection = getComputerChoice()

    if (humanSelection === "rock" && computerSelection === "rock") {
        console.log("You tied! You chose: rock. Computer chose: rock.")
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanSelection === "rock" && computerSelection === "paper") {
        console.log("You lost! You chose: rock. Computer chose: paper.")
        computerScore += 1
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanSelection === "rock" && computerSelection === "scissors") {
        console.log("You won! You chose: rock. Computer chose: scissors.")
        humanScore += 1
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    }

    if (humanSelection === "paper" && computerSelection === "paper") {
        console.log("You tied! You chose: paper. Computer chose: paper.")
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanSelection === "paper" && computerSelection === "scissors") {
        console.log("You lost! You chose: paper. Computer chose: scissors.")
        computerScore += 1
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanSelection === "paper" && computerSelection === "rock") {
        console.log("You won! You chose: paper. Computer chose: rock.")
        humanScore += 1
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    }

    if (humanSelection === "scissors" && computerSelection === "scissors") {
        console.log("You tied! You chose: scissors. Computer chose: scissors.")
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanSelection === "scissors" && computerSelection === "rock") {
        console.log("You lost! You chose: scissors. Computer chose: rock.")
        computerScore += 1
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    } else if(humanSelection === "scissors" && computerSelection === "paper") {
        console.log("You won! You chose: scissors. Computer chose: paper.")
        humanScore += 1
        console.log(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)
    }
}

// document.querySelector("button").addEventListener("click", playRound)

// playRound()

function playGame() {
    for (let i=0; i<5; i++) {
        playRound()
    }
    if (humanScore > computerScore) {
        console.log("You have won the best of 5 rounds!")
    } else if (humanScore < computerScore) {
        console.log("You have lost the best of 5 rounds!")
    } else {
        console.log("You and the computer tied the best of 5 rounds!")
    }
}

playGame()