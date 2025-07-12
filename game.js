let humanScore = 0;
let computerScore = 0;
const rounds = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    
    return (choice==0) ? "rock"
        :  (choice==1) ? "paper"
        :  "scissors";
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose! Paper beats rock");
        computerScore++;
    }
    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win! Rock beats scissor");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win! Paper beats rock");
        humanScore++;
    }
    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose! Scissors beats paper");
        computerScore++;
    }
    else if (humanChoice == "scissor" && computerChoice == "rock") {
        console.log("You lose! Rock beats scissor");
        computerScore++;
    }
    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win! Scissor beats paper");
        humanScore++;
    }
    else {
        console.log("Draw! Let's reroll again");
    }
    let computerChoiceDisplay = document.querySelector("#cchoice");
    let humanScoreDisplay = document.querySelector("#hscore");
    let computerScoreDisplay = document.querySelector("#cscore");
    computerChoiceDisplay.textContent = "The computer choose " + computerChoice;
    humanScoreDisplay.textContent = humanScore.toString();
    computerScoreDisplay.textContent = computerScore.toString();
}

function playGame() {
    let currRounds = 0;
    let buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (currRounds < rounds) {
                let humanSelection = button.id;
                let computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                currRounds++;
            }
            else {
                if (humanScore > computerScore) {
                    alert("You win!")
                }
                else if (computerScore > humanScore) {
                    alert("The computer wins!");
                }
                else {
                    alert("TIE!");
                }
            }
        })
    })
}

playGame();