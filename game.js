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
function plySel() {
    playerSelection = prompt("Rock, Paper, or Scissors?");
    playerSelection = playerSelection.toLowerCase();
}
function playGame() {
    console.log(`Computer picked ${comSelection}`)
    console.log(`you picked ${playerSelection}`)
  if (comSelection == 'scissors' && playerSelection == 'rock'){
    
    console.log(`You picked ${playerSelection} and it beats ${comSelection}, you win!`)
  
} else if (comSelection == 'scissors' && playerSelection == 'scissors' ){
    
    console.log(`It's a draw!`)
  
} else if (comSelection == 'scissors' && playerSelection == 'paper'){
   
    console.log(`Computer picked ${comSelection} and it beats ${playerSelection}, you lose!`)
  
} else if (comSelection == 'paper' && playerSelection == 'rock'){
    
    console.log(`Computer picked ${comSelection} and it beats ${playerSelection}, you lose`)
  
} else if (comSelection == 'paper' && playerSelection == 'paper'){
    
    console.log(`It's a draw!`)

} else if (comSelection == 'paper' && playerSelection == 'scissors'){

    console.log(`You picked ${playerSelection} and it beats ${comSelection}, you win!`)

} else if (comSelection == 'rock' && playerSelection == 'scissors'){

    console.log(`Computer picked ${comSelection} and it beats ${playerSelection}, you lose`)

} else if (comSelection == 'rock' && playerSelection == 'paper'){

    console.log(`You picked ${playerSelection} and it beats ${comSelection}, you win!`)

} else if (comSelection == 'rock' && playerSelection == 'rock'){

    console.log(`It's a draw!`)

}
}

for (let i=0;i<5; i++) {
plySel();
computerPlay();
playGame();
}
