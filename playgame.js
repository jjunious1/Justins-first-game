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
let playerTotal = (playerScore) => {
  let sum = 0
  for (let i = 0; i < pCards.length; i++) {
    sum += parseInt(pCards[i].innerHTML)
  }
  return sum
}
let opponentTotal = () => {
  let sum = 0
  for (let i = 0; i < opponentCards.length; i++) {
    sum += parseInt(opponentCards[i].innerHTML)
  }
  return sum
}
let changeTurn = turnEnd.addEventListener('click', () => {
  if ((turnEnd = 'click')) {
    let player = 0
    console.log(player)
  }
})

// let winningNumbers = () => {
//   if (playerTotal < opponentTotal) {
//     console.log('p wins')
//   } else {
//     console.log('o wins')
//   }
// // }
// // not working

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
  },
  { once: true }
  // found this on stackoverflow as a way to disable a button click event
)
// handles hits and stay logic
let gamePlay = playTurn.addEventListener('click', (changeTurn) => {
  //   pCards.forEach((cards) => {
  //     pCards.innerHTML = randomChoices()
  //   })
  // })

  if (player === 1 && pCards[2].innerHTML === '0') {
    pCards[2].innerHTML = randomChoices()
  } else if (
    player === 1 &&
    pCards[2].innerHTML != '0' &&
    pCards[3].innerHTML === '0'
  ) {
    pCards[3].innerHTML = randomChoices()
  } else if (
    player === 1 &&
    pCards[3].innerHTML != '0' &&
    pCards[4].innerHTML === '0'
  ) {
    pCards[4].innerHTML = randomChoices()
  } else {
    player = changeTurn
  }
  if (player === 0 && opponentCards[1].innerHTML === '0') {
    opponentCards[1].innerHTML = randomChoices()
  } else if (
    player === 0 &&
    opponentCards[1].innerHTML != '0' &&
    opponentCards[2].innerHTML === '0'
  ) {
    opponentCards[2].innerHTML = randomChoices()
  }
})

//Variables for card PNG

// Winning conditions
// if () === 21) {
//   winner.innerHTML = 'You WIN'
// }

//Functions

//Game logic
