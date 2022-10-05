// Global Variables
let gameButton = document.querySelector('.game button')
let turnEnd = document.querySelector('.Stay')
let playTurn = document.querySelector('.Hit')
let gameChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pCards = document.getElementsByClassName('p1')
let opponentCards = document.getElementsByClassName('opp')
let winner = document.getElementsByClassName('.winner')
let player = 1
let playerScore = 0
let opponentScore = 0

// let card2 = ["https://photos.app.goo.gl/Yn8BV3cAo5Z5MJka6", "https://photos.app.goo.gl/TtWP6reSnwfAuF9h6" ,"https://photos.app.goo.gl/sfa1vRD8SkdqUUgn7" ]


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
    playerScore = sum
  }
  console.log(playerScore)
}
let opponentTotal = () => {
  let sum = 0
  for (let i = 0; i < opponentCards.length; i++) {
    sum += parseInt(opponentCards[i].innerHTML)
    opponentScore = sum
  }
  console.log(opponentScore)
}
let changeTurn = turnEnd.addEventListener('click', () => {
  if ((turnEnd = 'click')) {
player = 0
console.log(player)
    }
})

let winningNumbers = () => {
  if (playerScore > opponentScore) {
    console.log('p wins')
  } else {
    console.log('o wins')
  }
}
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
    playerTotal()
    opponentTotal()
  },
  { once: true }
  // found this on stackoverflow as a way to disable a button click event
)
// handles hits and stay logic
let gamePlay = playTurn.addEventListener('click', () => {
if (player === 1 && pCards[2].innerHTML === '0') {
  pCards[2].innerHTML = randomChoices()
  changeTurn
  playerTotal()

} else if (player === 1 && pCards[2].innerHTML != '0' && pCards[3].innerHTML === '0') {
  pCards[3].innerHTML = randomChoices()
  changeTurn
  playerTotal()

} else if (player === 1 && pCards[3].innerHTML != '0' && pCards[4].innerHTML === '0') {
  pCards[4].innerHTML = randomChoices()
  changeTurn
  playerTotal()

} else if (player === 0 && opponentCards[1].innerHTML === '0'){
  opponentCards[1].innerHTML = randomChoices()
  opponentTotal()

}else if (player === 0 && opponentCards[1].innerHTML != '0' && opponentCards[2].innerHTML === '0') {
  opponentCards[2].innerHTML = randomChoices()
  opponentTotal()

} else if (player === 0 && opponentCards[2].innerHTML != '0' && opponentCards[3].innerHTML === '0'){
  opponentCards[3].innerHTML = randomChoices()
  opponentTotal()

} else if (player === 0 && opponentCards[3].innerHTML != '0' && opponentCards[4].innerHTML === '0'){
  opponentCards[4].innerHTML = randomChoices()
  opponentTotal()
} else {
  console.log('nothing')
}
})
winningNumbers()
