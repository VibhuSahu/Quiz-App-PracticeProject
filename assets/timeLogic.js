function startCountdown() {
    var timerElement = document.getElementById("timer");
    var startBtn = document.getElementById("startBtn");
  
    var count = 50;
    timerElement.innerHTML = count;
  
    startBtn.disabled = true;
  
    var countdown = setInterval(function() {
      count--;
      timerElement.innerHTML = count;
  
      if (count === 0) {
        clearInterval(countdown);
        startBtn.disabled = false;
      }
    }, 1000);
  }
  