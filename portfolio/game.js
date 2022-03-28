const computerChoiceD = document.getElementById('computerchoice')
const userChoiceD = document.getElementById("userchoice")
const resultD = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice;

let computerchoice;

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceD.innerHTML = userChoice
    generateComputerChoice()
}))

/*function generteComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1
    if(randomNumber === 1) {
        computerchoice = 'rock'
    }

    if(randomNumber === 2) {
        computerchoice = 'scissors'
    }
    
    if(randomNumber === 3) {
        computerchoice = 'paper'
    }

        computerChoiceD.innerHTML = computerchoice*/
    
    
}
