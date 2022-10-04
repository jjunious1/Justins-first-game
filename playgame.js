// Global Variables
let gameButton = document.querySelector('.game button')
let turnEnd = document.querySelector('.Stay')
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
let playerTotal = () => {
  let sum = 0
  for (let i = 0; i < pCards.length; i++) {
    sum += parseInt(pCards[i].innerHTML)
  }
  console.log(sum)
}
let opponentTotal = () => {
  let sum = 0
  for (let i = 0; i < opponentCards.length; i++) {
    sum += parseInt(opponentCards[i].innerHTML)
  }
  console.log(sum)
}

// let winningNumbers = () => {
//   if (playerTotal > opponentTotal) {
//     console.log('winner')
//   }
//   if (playerTotal < opponentTotal) {
//     console.log('you lose')
//   }
// }// not working

// event listeners
//starts the game and hands out some of the cards
let gameStart = gameButton.addEventListener(
  'click',
  () => {
    pCards[0].innerHTML = randomChoices()
    pCards[1].innerHTML = randomChoices()
    opponentCards[0].innerHTML = randomChoices()
    gameButton.style.display = 'none'
    turnEnd.style.display = 'block'
    playTurn.style.display = 'block'
    let player = 1
    opponentTotal()
    playerTotal()
  },
  { once: true } // found this on stackoverflow as a way to disable a button click event
)
gameButton.addEventListener('click', (switchturns) => {
  gameButton.style.pointerEvents = ''
  let player = 0
})
let changeTurn = gameButton.addEventListener('click', (switchturns) => {
  gameButton.style.pointerEvents = ''
  let player = 0
})
let gamePlay = playTurn.addEventListener('click', () => {
  if (player === 1) {
    pCards[2].innerHTML = randomChoices()
    playerTotal()
  } else {
    opponentCards[1].innerHTML = randomChoices()
    opponentTotal()
  }
})

//Variables for card PNG

// Winning conditions
// if () === 21) {
//   winner.innerHTML = 'You WIN'
// }

//Functions

//Game logic
