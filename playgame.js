// GLOBAL VARIABLES

let gameButton = document.querySelector('.Start')
let turnEnd = document.querySelector('.Stay')
let playTurn = document.querySelector('.Hit')
let checker = document.querySelector('.Check')
let resetButton = document.querySelector('.Reset')
let pCards = document.querySelectorAll('.p1')
let gameChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let opponentCards = document.getElementsByClassName('opp')
let winner = document.querySelector('.winner')
let winsPlayer = document.querySelector('.player-wins')
let winsOpponent = document.querySelector('.opponent-wins')
let drawTotal = document.querySelector('.draws-wins')
let player = 1
let playerScore = 0
let opponentScore = 0
let count = 0

let resetGame = resetButton.addEventListener('click', () => {
  document.querySelectorAll('.opponent-board')[0].childNodes.forEach((cardDeck) => {
    cardDeck.innerHTML = '0'
})
document.querySelectorAll('.player-board')[0].childNodes.forEach((element) => {
  element.innerHTML = '0'
})
player = 1
gameStart
winner.innerHTML = ''
resetButton.style.display = 'none'
})

// FUNCTIONs

//random card generator
let randomChoices = () => {
  const choice = gameChoices[Math.floor(Math.random() * gameChoices.length)]
  const choices = choice
  return choices
}

//player and opponent Score calculator

let playerTotal = () => {
  let sum = 0
  for (let i = 0; i < pCards.length; i++) {
    sum += parseInt(pCards[i].innerHTML)
    playerScore = sum
  }
  return playerScore
}
let opponentTotal = () => {
  let sum = 0
  for (let i = 0; i < opponentCards.length; i++) {
    sum += parseInt(opponentCards[i].innerHTML)
    opponentScore = sum
  }
  return opponentScore
}
//winning conditions 

let winningNumbers = () => {
  if (playerScore > opponentScore && playerScore <= 21 && opponentScore <= 21) {
    console.log('Player 1 wins')
    winner.textContent = 'Player 1 wins'
    count ++
    winsPlayer.innerHTML = ('wins = ' + count)
  } else {
    console.log('Opponent wins')
    winner.textContent = 'Opponent wins'
    count ++
    winsOpponent.innerHTML = ('losses = ' + count)
  }
}
let draw = () => {
  if (playerScore > 21) {
winner.textContent = 'Draw'
count ++
    draw.innerHTML = ('Draws = ' + count)
    playTurn.style.display = 'none'
    resetGame.style.display = 'block'
  } else if (playerScore > 21 || opponentScore > 21){
    console.log('Opponent wins')
    winner.textContent = 'Bust'
    playTurn.style.display = 'none'
    resetGame.style.display = 'block'
}}

// // EVENT LISTENERS

// changes the turn to the opponent

let changeTurn = turnEnd.addEventListener('click', () => {
  if ((turnEnd = 'click')) {
player = 0
console.log(player)
    }
})
// //starts the game and hands out some of the starting cards

let gameStart = gameButton.addEventListener(
  'click',
  () => {
    pCards[0].innerHTML = randomChoices()
    pCards[0].classList.add('layer')
    pCards[0].style.color = 'black'
    pCards[1].innerHTML = randomChoices()
    pCards[1].classList.add('layer')
    pCards[1].style.color = 'black'
    opponentCards[0].innerHTML = randomChoices()
    opponentCards[0].classList.add('layer')
    opponentCards[0].style.color = 'black'
    gameButton.style.display = 'none'
    turnEnd.style.display = 'block'
    playTurn.style.display = 'block'
    checker.style.display = 'block'
    playerTotal()
    opponentTotal()
  },
  { once: true }
  // found this on stackoverflow as a way to disable a button click event
)
// // handles hits and stay logic

let gamePlay = playTurn.addEventListener('click', () => {
if (player === 1 && pCards[2].innerHTML === '0') {
  pCards[2].innerHTML = randomChoices()
  pCards[2].classList.add('layer')
  pCards[2].style.color = 'black'
  changeTurn
  playerTotal()
  draw()

} else if (player === 1 && pCards[2].innerHTML != '0' && pCards[3].innerHTML === '0') {
  pCards[3].innerHTML = randomChoices()
  pCards[3].classList.add('layer')
  pCards[3].style.color = 'black'
  changeTurn
  playerTotal()
  draw()

} else if (player === 1 && pCards[3].innerHTML != '0' && pCards[4].innerHTML === '0') {
  pCards[4].innerHTML = randomChoices()
  pCards[4].classList.add('layer')
  pCards[4].style.color = 'black'
  changeTurn
  playerTotal()
  draw()

} else if (player === 0 && opponentCards[1].innerHTML === '0'){
  opponentCards[1].innerHTML = randomChoices()
  opponentCards[1].classList.add('layer')
  opponentCards[1].style.color = 'black'
  opponentTotal()

}else if (player === 0 && opponentCards[1].innerHTML != '0' && opponentCards[2].innerHTML === '0') {
  opponentCards[2].innerHTML = randomChoices()
  opponentCards[2].classList.add('layer')
  opponentCards[2].style.color = 'black'
  opponentTotal()
  
} else if (player === 0 && opponentCards[2].innerHTML != '0' && opponentCards[3].innerHTML === '0'){
  opponentCards[3].innerHTML = randomChoices()
  opponentCards[3].classList.add('layer')
  opponentCards[3].style.color = 'black'
  opponentTotal()

} else if (player === 0 && opponentCards[3].innerHTML != '0' && opponentCards[4].innerHTML === '0'){
  opponentCards[4].innerHTML = randomChoices()
  opponentCards[4].classList.add('layer')
  opponentCards[4].style.color = 'black'
  opponentTotal()
  
} else {
  console.log('nothing')
}
})
// checking winner and reseting game
let gameDecision = checker.addEventListener('click', () => {
  winningNumbers()
    playTurn.style.display = 'none'
    checker.style.display = 'none'
    resetButton.style.display = 'block'
    resetGame
})

