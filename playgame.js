// Global Variables
let gameButton = document.querySelector('.game button')
let playTurn = document.querySelector('.Hit')
let gameChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pCards = document.getElementsByClassName('p1')
let opponentCards = document.getElementsByClassName('opp')
let winner = document.getElementsByClassName('.winner')
let player = 1

// functions
let randomChoices = () => {
  const choice = gameChoices[Math.floor(Math.random() * gameChoices.length)]
  const choices = choice
  return choices
}
let playerTotal = (pCards) => {
  let sum = 0
  for (let i = 0; i < pCards.length; i++) {
    console.log(pCards[i])
  }
}

// let array = [a, b, c, d]
// const a = 1
// const b = 2
// const c = 3
// const d = 4

// event listeners
//starts the game and hands out some of the cards
let gameStart = gameButton.addEventListener('click', () => {
  pCards[0].innerHTML = randomChoices()
  pCards[1].innerHTML = randomChoices()
  opponentCards[0].innerHTML = randomChoices()
  gameButton.innerHTML = 'Stay'
  playTurn.style.display = 'block'
  let player = 1
  gameButton.removeEventListener('click', gameStart) // not working
})

let gamePlay = playTurn.addEventListener('click', () => {
  for (let i = 0; i < pCards.length; i++)
    if (player === 1 && pCards[i] === 0) {
      pCards[i].innerHTML = randomChoices()
    } else {
      console.log('yay')
    }
})

//Variables for card PNG

// Winning conditions
// if () === 21) {
//   winner.innerHTML = 'You WIN'
// }

//Functions

//Game logic
