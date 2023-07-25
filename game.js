let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 1;

const result = document.querySelector('.result')
const round = document.querySelector('.round');
const playerScoreCounter = document.querySelector('.playerscore');
const computerScoreCounter = document.querySelector('.computerscore');

function comSel() {
    choose = Math.floor(Math.random() * 3) + 1;
    if (choose === 1) {
        return 'scissors';
    } else if (choose === 2) {
        return 'rock';
    } else if (choose === 3) {
        return 'paper';
    }
}

function plyrSel(event) {
    const button = event.target;
    playerSelection = button.textContent.toLowerCase();
    game();
}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', plyrSel);
paperButton.addEventListener('click', plyrSel);
scissorsButton.addEventListener('click', plyrSel);

function playGame() {
    const comSelection = comSel();
    console.log(`Computer picked ${comSelection}`);
    console.log(`You picked ${playerSelection}`);

    if (comSelection === playerSelection) {
        result.textContent = `Player picked ${playerSelection} and Computer picked ${comSelection} it's a draw!`;
    } else if (
        (comSelection === 'rock' && playerSelection === 'paper') ||
        (comSelection === 'scissors' && playerSelection === 'rock') ||
        (comSelection === 'paper' && playerSelection === 'scissors')
    ) {
        result.textContent = `You picked ${playerSelection} and it beats ${comSelection}, you win!`;
        playerScore++;
    } else {
        result.textContent = `Computer picked ${comSelection} and it beats ${playerSelection}, you lose!`;
        computerScore++;
    }
    playerScoreCounter.textContent = `Player Score: ${playerScore}`;
    computerScoreCounter.textContent = `Computer Score: ${computerScore}`;
}
function gameResult() {
    if (playerScore > computerScore) {
        round.textContent = `You won the game!`;
    } else if (playerScore < computerScore) {
        round.textContent = `You lost the game!`;
    } else {
        round.textContent = `It's a draw!`;
    }
}

function game() {
    if (roundsPlayed < 5) {
        roundsPlayed++;
        round.textContent = `Round ${roundsPlayed}`;
        comSel();
        playGame();
    } else if (roundsPlayed === 5) {
        roundsPlayed++
        comSel();
        playGame();
        gameResult();
        rockButton.removeEventListener('click', plyrSel);
        paperButton.removeEventListener('click', plyrSel);
        scissorsButton.removeEventListener('click', plyrSel);   
    } else if (roundsPlayed === 6) {
        
    }
    
}
