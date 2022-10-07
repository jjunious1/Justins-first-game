// GLOBAL VARIABLES

//button variables
let gameButton = document.querySelector('.Start')
let turnEnd = document.querySelector('.Stay')
let playTurn = document.querySelector('.Hit')
let checker = document.querySelector('.Check')
let resetButton = document.querySelector('.Reset')

//board variables
let board1 = document.querySelectorAll('.player-board')
let board2 = document.querySelectorAll('.opponent-board')
let pCards = document.querySelectorAll('.p1')
let gameChoices = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let opponentCards = document.getElementsByClassName('opp')
let winner = document.querySelector('.winner')
let winsPlayer = document.querySelector('.player-wins')
let winsOpponent = document.querySelector('.opponent-wins')
let drawTotal = document.querySelector('.draws-wins')
let player = 1
let playerScore = 0
let opponentScore = 0
let wins = 0
let losses = 0

let resetGame = resetButton.addEventListener('click', () => {
  board1[0].childNodes.forEach((cardDeck1) => {
    cardDeck1.innerHTML = '0'
    cardDeck1.st
})
  board2[0].childNodes.forEach((cardDeck2) => {
    cardDeck2.innerHTML = '0'
})
  player = 1
  winner.innerHTML = ''
  gameButton.style.display = 'block'
  playTurn.style.display = 'block'
  checker.style.display = 'block'
  resetButton.style.display = 'none'
  playerScore = 0
  opponentScore = 0
})

// FUNCTIONs

//random card generator
const randomChoices = () => {
  const choice = gameChoices[Math.floor(Math.random() * gameChoices.length)]
  const choices = choice
  return choices
}

//player and opponent Score calculator

const playerTotal = () => {
  let sum = 0
  for (let i = 0; i < pCards.length; i++) {
    sum += parseInt(pCards[i].innerHTML)
    playerScore = sum
  }
  return playerScore
}
const opponentTotal = () => {
  let sum = 0
  for (let i = 0; i < opponentCards.length; i++) {
    sum += parseInt(opponentCards[i].innerHTML)
    opponentScore = sum
  }
  return opponentScore
}
//winning conditions 

const winningNumbers = () => {
  if (playerScore > opponentScore && playerScore <= 21 && opponentScore <= 21) {
    console.log('Player 1 wins')
    winner.textContent = 'Player 1 wins'
    wins += 1
    winsPlayer.innerHTML = ('wins = ' + wins)
  } else {
    console.log('Opponent wins')
    winner.textContent = 'Opponent wins'
    losses += 1
    winsOpponent.innerHTML = ('losses = ' + losses)
  }
}
const bust = () => {
  if (playerScore > 21 || opponentScore > 21) {
    winner.textContent = 'BUST'
    resetButton.style.display = 'block'
    playTurn.style.display = 'none'
    checker.style.display = 'none'
    turnEnd.style.display = 'none'
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

let gameStart = ()=> {gameButton.addEventListener('click',() => {
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
  }
)}

// // handles hits and stay logic

let gamePlay = playTurn.addEventListener('click', () => {
  if (player === 1 && pCards[2].innerHTML === '0') {
    pCards[2].innerHTML = randomChoices()
    pCards[2].classList.add('layer')
    pCards[2].style.color = 'black'
    changeTurn
    playerTotal()
    bust()

} else if (player === 1 && pCards[2].innerHTML != '0' && pCards[3].innerHTML === '0') {
    pCards[3].innerHTML = randomChoices()
    pCards[3].classList.add('layer')
    pCards[3].style.color = 'black'
    changeTurn
    playerTotal()
    bust()

} else if (player === 1 && pCards[3].innerHTML != '0' && pCards[4].innerHTML === '0') {
    pCards[4].innerHTML = randomChoices()
    pCards[4].classList.add('layer')
    pCards[4].style.color = 'black'
    changeTurn
    playerTotal()
    bust()

} else if (player === 0 && opponentCards[1].innerHTML === '0'){
    opponentCards[1].innerHTML = randomChoices()
    opponentCards[1].classList.add('layer')
    opponentCards[1].style.color = 'black'
    opponentTotal()
    bust()

}else if (player === 0 && opponentCards[1].innerHTML != '0' && opponentCards[2].innerHTML === '0') {
    opponentCards[2].innerHTML = randomChoices()
    opponentCards[2].classList.add('layer')
    opponentCards[2].style.color = 'black'
    opponentTotal()
    bust()
  
} else if (player === 0 && opponentCards[2].innerHTML != '0' && opponentCards[3].innerHTML === '0'){
    opponentCards[3].innerHTML = randomChoices()
    opponentCards[3].classList.add('layer')
    opponentCards[3].style.color = 'black'
    opponentTotal()
    bust()

} else if (player === 0 && opponentCards[3].innerHTML != '0' && opponentCards[4].innerHTML === '0'){
    opponentCards[4].innerHTML = randomChoices()
    opponentCards[4].classList.add('layer')
    opponentCards[4].style.color = 'black'
    opponentTotal()
    bust()

} else {
    console.log('nothing')
}
})
// checking winner and reseting game
let gameDecision = checker.addEventListener('click', () => {
    winningNumbers()
    resetButton.style.display = 'block'
    playTurn.style.display = 'none'
    checker.style.display = 'none'
    turnEnd.style.display = 'none'
    resetGame
})
gameStart()
