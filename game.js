function getComputerChoice() {
    let choice = Math.random()*3
    
    return (choice==0) ? "rock"
        :  (choice==1) ? "paper"
        :  "scissors";
}