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
    console.log("Human score: " + humanScore.toString() + ", Computer score: " + computerScore.toString());
}

function playGame() {
    let currRounds = 0;
    let buttons = document.querySelectorAll("button");
    buttons.forEach((humanChoice) => {
        button.addEventListener("click", () => {
            if (currRounds < 5) {
                let humanSelection = humanChoice.id;
                let computerSelection = getComputerChoice();
                playRound(humanSelection, computerSelection);
                currRounds++;
            }
        })
    })
}

playGame();