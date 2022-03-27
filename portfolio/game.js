const computerChoiceD = document.getElementById('computerchoice')
const userChoiceD = document.getElementById("userchoice")
const resultD = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice;

possibleChoices.forEach(possibleChoice =>possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceD.innerHTML = userChoice
}))