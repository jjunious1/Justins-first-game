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

// let array = [a, b, c, d]
// const a = 1
// const b = 2
// const c = 3
// const d = 4

// event listeners
let gameStart = gameButton.addEventListener('click', () => {
  pCards[0].innerHTML = randomChoices()
  pCards[1].innerHTML = randomChoices()
  opponentCards[0].innerHTML = randomChoices()
  gameButton.innerHTML = 'Stay'
  playTurn.style.display = 'block'
  let player = 1
  gameButton.removeEventListener('click', gameStart)
})

let gamePlay = playTurn.addEventListener('click', () => {
  let i = 0
  if (player === 1 && pCards[i] === 0) {
    for (i < pCards.length; i++; ) {
      pCards[i].innerHTML = randomChoices()
    }
    if (gameButton === 'click') {
    }
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
