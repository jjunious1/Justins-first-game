// Global Variables
let gameButton = document.querySelector('.game button')
let gameChoices = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let playerCards = document.getElementsByClassName('p1')
let opponentCards = document.getElementsByClassName('.opp')
// playerCards.forEach(players(,))

// event listeners
let click1 = gameButton.addEventListener('click', () => {
  console.log('button clicked')
  if (playerCards.src === '') {
    playerCards.src = 'https://pngimg.com/uploads/cards/cards_PNG8492.png'
  }
})

//Variables for card PNG

// Winning conditions

//Functions

//Game logic
