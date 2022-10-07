
         
       //DOM Manipulation

       let paper = document.querySelector('#b1');;
       let rock = document.querySelector('#b2');
       let scissors = document.querySelector('#b3');
      
       let output = document.querySelector('.container1');
       let compOutput = document.querySelector('#display');
       let humanWins = document.querySelector('.container2');
       let compWins = document.querySelector('.container3');
       
       
       let  winCount = 0;
       let loseCount = 0;
       let tieCount = 0;
       

      paper.addEventListener('click',(e) => {    
        playRound(e);
        counter(playRound(e));    
   });

      rock.addEventListener('click',(e) => {    
        playRound(e);
        counter(playRound(e));    
   });
      scissors.addEventListener('click',(e) => {    
        playRound(e);
        counter(playRound(e));    
   });


      function getComputerChoice() {
        let choice = ['rock', 'paper','scissors'];
          return choice[Math.floor(Math.random()*3)];
          
        }

        
     
    
       function playRound(e) {
         let computerSelection = getComputerChoice();
         let playerSelection = e.target.innerText;
         let outcome;
             
         if (playerSelection == 'rock' && computerSelection == 'rock') {
           output.textContent = "Play again!";
           compOutput.textContent = "rock";
           outcome = 'tie';

          } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            output.textContent = "Paper beats Rock";
            compOutput.textContent = "paper";
            outcome = 'lose';
            
          } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            output.textContent = "Rock beats Scissors";
            compOutput.textContent = "scissors";
            outcome =  'win';
            
                   
          } else if (playerSelection == 'paper' && computerSelection == 'paper') {
            output.textContent = "Play again!";
            compOutput.textContent = "paper";
            outcome =  'tie';
            
          } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            output.textContent = "Paper beats Rock";
            compOutput.textContent = "rock";
            outcome =  'win';
            
            
          } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            output.textContent = "Scissors beats Paper";
            compOutput.textContent = "scissors";
            outcome = 'lose';
            
          
          } else if (playerSelection == 'scissors' && computerSelection == 'scissors') {
            output.textContent = "Play again!";
            compOutput.textContent = "scissors";
            outcome =  'tie';
            
          } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            output.textContent = "Rock beats Scissors";
            compOutput.textContent = "rock";
            outcome =  'lose';
            
          } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            output.textContent = "Scissors beats Paper";
            compOutput.textContent = "paper";
            outcome =  'win';           

          }

          return  outcome;
         }

         
        function counter(x) {
         

          if(x == 'lose') {  
            loseCount += 1;
            compWins.textContent = "Computer Wins!  " + loseCount;
            
           } else if (x == 'win'){  
            winCount += 1;
            humanWins.textContent = "Human Wins!  " + winCount;
            
           } else if (x == 'tie') {
            tieCount += 1;
           }

           if (winCount== 5) {
            output.textContent = "You are the Man¡";
            
            
           } if (loseCount == 5) {
            output.textContent = "You lost brother¡";
            
            
          } if ((winCount > 5) && (loseCount<=4) && (tieCount>=0)) {
            reseter();
          } if ((loseCount > 5) && (winCount<=4) && (tieCount>=0)) {
            reseter();
          }
         
        }

        function reseter() {
          winCount = 0;
          loseCount = 0;
          output.textContent = ' ';
          humanWins.textContent = ' ';
          compWins.textContent = ' ';
          compOutput.textContent = ' ';
        }
       
         

       

             
         
            

          