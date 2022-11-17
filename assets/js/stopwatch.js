/* Stopwatch */
window.onload = function () {
  
    let seconds = 00;
    let tens = 00;
    let mins = 00;
    let appendTens = document.getElementById("tens");
    let appendSeconds = document.getElementById("seconds");
    let appendMins = document.getElementById("mins");
    let btnStart = document.getElementById('button-start');
    let btnStop = document.getElementById('button-stop');
    let btnReset = document.getElementById('button-reset');
    let Interval ;
  
    btnStart.onclick = function() {  
      clearInterval(Interval);
       Interval = setInterval(startTimer, 10);
    }
    
    btnStop.onclick = function() {
      clearInterval(Interval);
    }
  
    btnReset.onclick = function() {
       clearInterval(Interval);
       tens = "00";
       seconds = "00";
       mins = "00";
       appendTens.innerHTML = tens;
       appendSeconds.innerHTML = seconds;
       appendMins.innerHTML = mins;
    }
    
     
    function startTimer () {
      tens++; 
      
      if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
      }
      
      if (tens > 9){
        appendTens.innerHTML = tens;        
      } 
      
      if (tens > 99) {
        console.log("seconds");
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
      }
      
      if (seconds > 9){
        appendSeconds.innerHTML = seconds;
      }
    
      if (seconds > 60){
        console.log("mins");
        mins++;
        appendMins.innerHTML = "0" + mins;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
      }
    
      if (mins > 9){
        appendMins.innerHTML = mins;
      }

    }
  
  }