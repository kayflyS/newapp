// using DOM to target html element 
const computerChoiceD = document.getElementById('computerchoice')
const userChoiceD = document.getElementById("userchoice")
const resultD = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice;

let computerChoice;

let result;
// adding the click function
possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceD.innerHTML = userChoice
   
    generateComputerChoice()
    getResult()
}))
// function to generate commputer choice randomly
function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    
    if (randomNumber === 1) {
        computerChoice = 'rock';
    }

    if (randomNumber === 2) {
        computerChoice = 'paper';
    }
    
    if (randomNumber === 3) {
        computerChoice = 'scissors';
    }

    computerChoiceD.innerHTML = computerChoice
}
// function for the result to access the winner
function getResult() {
    if (computerChoice === userChoice){
        result = "its a draw"
    }
   

}


