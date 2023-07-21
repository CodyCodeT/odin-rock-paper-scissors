function computerPlay() {
    choose = Math.floor(Math.random()*3)+1;
    if (choose == 1) {
        comSelection = 'scissors'
    } else if ( choose == 2) {
        comSelection = 'rock'
    } else if ( choose == 3) {
        comSelection = 'paper'
    }
}
function plySel(event) {
    const button = event.target;
    playerSelection = button.textContent.toLowerCase();
}
function playGame() {
    console.log(`Computer picked ${comSelection}`)
    console.log(`you picked ${playerSelection}`)
  if (comSelection === playerSelection){
        console.log(`It's a draw!`)

} else if (
    (comSelection == 'rock' && playerSelection == 'paper') ||
    (comSelection == 'scissors' && playerSelection == 'rock') ||
    (comSelection == 'paper' && playerSelection == 'scissors')
){
    console.log(`You picked ${playerSelection} and it beats ${comSelection}, you win!`)
} else {
    console.log(`Computer picked ${comSelection} and it beats ${playerSelection}, you lose!`)
}}

const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');

rockButton.addEventListener('click', plySel);
paperButton.addEventListener('click', plySel);
scissorsButton.addEventListener('click', plySel);

document.addEventListener('click', function (e) {
if (e.target.matches('button')) {
    computerPlay();
    playGame();
}
})
// for (let i=0;i<5; i++) {
// plySel();
// computerPlay();
// playGame();
// }
