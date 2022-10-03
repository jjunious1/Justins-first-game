// Global Variables
let gameButton = document.querySelector('.game button')
let gameChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let pCards = document.getElementsByClassName('p1')
let opponentCards = document.getElementsByClassName('.opp')
let winner = document.getElementsByClassName('.winner')

// let array = [a, b, c, d]
// const a = 1
// const b = 2
// const c = 3
// const d = 4

// event listeners
let gameStart = gameButton.addEventListener('click', () => {
  gameButton.innerHTML = 'HIT'
  // const choices = pCards.forEach((i) => {
  //   if (pCards.src === '') {
  //     pCards[i].src = 'https://pngimg.com/uploads/cards/cards_PNG8492.png'
  //   }
  console.log(choices)
})

//Variables for card PNG

// Winning conditions
if (sum(gameChoices) === 21) {
  winner.innerHTML = 'You WIN'
}

//Functions

//Game logic
