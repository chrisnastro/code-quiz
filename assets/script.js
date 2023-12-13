var startButton = document.getElementById("startbutton");
var rulesBox = document.getElementById("rulesbox");
var questionBox = document.getElementById("questionbox");
var finish = document.getElementById("finish");
var scoreButton = document.getElementById("scorebutton");
var initials = document.getElementById("initials");
var queCount = 0;
var counter = 60;

startButton.onclick = () => {
    function countdown() {
        counter--;
        if (counter === 0) {
            clearInterval(startCountdown)
            timeUp()
        };
        let timeRemaining = document.queryselector("#timeleft");
        let timeTag = "<span>Time Remaining: " + counter + "</span>"
        timeRemaining.innerHtml = timeTag;
    };
    var startTimer = setInterval(countdown, 1000);
    questionBox.classList.remove("hide");
    showQuestions(queCount)
};