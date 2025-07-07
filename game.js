function getComputerChoice() {
    let choice = Math.floor(Math.random()*3)
    
    return (choice==0) ? "rock"
        :  (choice==1) ? "paper"
        :  "scissors";
}

function getHumanChoice() {
    let choice = prompt("Choose your weapon of choice: rock, paper, or scissors", "rock")
    const hand = ["rock", "paper", "scissors"]

    while (!hand.includes(choice)) {
        choice = prompt("That weapon does not exist! Choose a different one: rock, paper, or scissors", "rock")
    }
    
    return choice
}