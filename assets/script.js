function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            prompt("time is up!");
        }
    }, 5);
}