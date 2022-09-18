function getComputerChoice() {
    let choice = ['Rock', 'Paper','Scissors'];
      return choice[Math.floor(Math.random()*3)];
      
    }
    console.log(getComputerChoice());

    function playRound(playerSelection, computerSelection) {
        playerSelection = playerSelection.toLowerCase();
        computerSelection = computerSelection.toLowerCase();
         console.log(playerSelection)
        console.log(computerSelection)
        
      if (playerSelection == 'rock' && computerSelection == 'rock') {
        return ("Play again!");
      } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return ("You Lose! Paper beats Rock");
      } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return ("You Win! Rock beats Scissors");
        
      } else if (playerSelection == 'paper' && computerSelection == 'paper') {
        return("Play again!");
      } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return("You Win! Paper beats Rock");
      } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return ("You Lose! Scissors beats Paper");
      
      } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
        return ("Play again!");
      } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return ("You Lose! Rock beats Scissors");
      } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return ("You Win! Scissors beats Paper");
       }
        
      }

      function Game() {
  
        //Tally up the outcomes
       let Tally = [];
       for (let i = 0; i < 5; ++i) {
       
         //Screening to input correctly
         let playerSelection = prompt("Enter Paper, Rock or Scissors");
         if(!playerSelection) {  
           alert("Play again");
           break
         } else if ( (playerSelection!='rock') || (playerSelection!='paper') || (playerSelection!='scissors')) {  
           alert("Enter the correct word");
           break
         } 
         
         let computerSelection = getComputerChoice();
         let outcome = playRound(playerSelection, computerSelection);
         console.log(outcome);
         Tally.push(outcome);
       }
       
         //Counters (for game logic)
         
         let tieCount = 0;
         let winCount = 0;
         let loseCount = 0;
       
        for (let i = 0; i < 5; i++) { 
         if (Tally[i]=='Tie') {
           tieCount++
          } else if (Tally[i]=='Win'){
           winCount++
          } else if (Tally[i]=='Lose') {
           loseCount++
          }
         }
         
        //logic to declare winner, loser or stalemate
       
          if (winCount>= 3) {
         console.log("You are the Man...")
       } else if (tieCount >= 3) {
         console.log("Stalemate....play again")
       } else if (loseCount >= 3) {
         console.log("You lost brother...")
       } else if ((winCount == 2) && (loseCount>=1)) {
         console.log("You are still the Man...")
       } else if ((winCount == 1) && (loseCount>=2)) {
         console.log("You lost brother...")
       } else if ((winCount == 1) && (loseCount==1)) {
         console.log("Stalemate....play again")
       } 
         
       }