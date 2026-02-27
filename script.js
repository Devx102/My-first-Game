
const numberEl = document.querySelector('.number');


let secretnumber =Math.trunc(Math.random()*20)+1;
let score = 5;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function() {
     console.log(document.querySelector(".guess").value);
      const guess =Number( document.querySelector('.guess').value); 
      console.log(guess, typeof guess)

      //WHEN THERE IS NO INPUT
      if(!guess) {
          document.querySelector('.message').textContent ='🔢🔢 No number'
          
          //WHEN THE ANSWER IS CORRECT
      } else if (guess === secretnumber) { document.querySelector('.message').textContent= 'Correct Number!'

     document.body.classList.replace('bg-black', 'bg-green-500');

    numberEl.classList.remove('fa-solid', 'fa-question');
    numberEl.textContent = secretnumber;

    if(score > highscore){
    highscore = score;
    document. querySelector(".highscore").textContent = highscore;
}
          //WHEN GUESS IS TOO HIGH
      } else if (guess > secretnumber){
        if(score > 1 ){

          document.querySelector('.message').textContent = "👆👆 Too High ";
          score--
          document.querySelector('.score').textContent =score; 
      } else  {
          document.querySelector('.message').textContent = 'Fahhhhhhhh😂😂'
          score = 0;
           document.querySelector('.score').textContent =score; 
      }
      //WHEN GUESS IS TOO LOW
      } else if (guess < secretnumber){
 
    if(score > 1){
        document.querySelector('.message').textContent = "👇👇 Too low ";
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'Fahhhhhhhh😂😂';
        score = 0;
        document.querySelector('.score').textContent = score;
    }
     } 
});

// ASSIGNMENT-

document.querySelector('.again').addEventListener('click', function() {

     score = 5;
     document.querySelector('.score').textContent =score; 
     secretnumber =Math.trunc(Math.random()*20)+1;
     document.querySelector('.number').textContent ='';
     numberEl.classList.add('fa-solid', 'fa-question');
     document.querySelector('.guess').value ='';
     document.body.classList.replace('bg-green-500', 'bg-black');
     document.querySelector('.message').textContent='Start guessing...';
     
     

})
 
