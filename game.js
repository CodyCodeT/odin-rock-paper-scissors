let roundsPlayed = 1;

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
        console.log(`It's a draw!`);
    } else if (
        (comSelection === 'rock' && playerSelection === 'paper') ||
        (comSelection === 'scissors' && playerSelection === 'rock') ||
        (comSelection === 'paper' && playerSelection === 'scissors')
    ) {
        console.log(`You picked ${playerSelection} and it beats ${comSelection}, you win!`);
    } else {
        console.log(`Computer picked ${comSelection} and it beats ${playerSelection}, you lose!`);
    }
}

function game() {
    if (roundsPlayed < 5) {
        roundsPlayed++;
        const round = document.querySelector('.round');
        round.textContent = `Round ${roundsPlayed}`;
        comSel();
        playGame();
    } else if (roundsPlayed === 5) {
        comSel();
        playGame();
        const round = document.querySelector('.round');
        round.textContent = `Game Over`;
        const rockButton = document.querySelector('.rock');
        const paperButton = document.querySelector('.paper');
        const scissorsButton = document.querySelector('.scissors');
        rockButton.removeEventListener('click', plyrSel);
        paperButton.removeEventListener('click', plyrSel);
        scissorsButton.removeEventListener('click', plyrSel);
    }
}
