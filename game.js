let humanScore = 0;
let computerScore = 0;
const rounds = 5;

function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    
    return (choice==0) ? "rock"
        :  (choice==1) ? "paper"
        :  "scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose your weapon of choice: rock, paper, or scissors", "rock");
    const hand = ["rock", "paper", "scissors"];

    while (!hand.includes(choice.toLowerCase())) {
        choice = prompt("That weapon does not exist! Choose a different one: rock, paper, or scissors", "rock");
    }
    
    return choice.toLowerCase();
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
    let currRound = 0;
    while (currRound < rounds) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        currRound++;
    }
}

playGame();