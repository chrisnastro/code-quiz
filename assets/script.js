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
            clearInterval(startTimer)
            timeUp()
        };
        let timeRemaining = document.querySelector("#timeleft");
        let timeTag = "<span>Time Remaining: " + counter + "</span>"
        timeRemaining.innerHTML = timeTag;
    };
    var startTimer = setInterval(countdown, 1000);
    questionBox.classList.remove("hide");
    showQuestions(queCount)
};

function showQuestions(index) {
    if (queCount >= 10) {
        return;
    }
    const questions = document.querySelector(".questions");
    const choices = document.querySelector("#choices");
    let queTag = "<span>" + questions[index].numb + ". " + questions[index].questions + "</span>";
    let optionTag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[1] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
        + '<div class="option">' + questions[index].options[3] + '<span></span></div>'
        questions.innerHTML = queTag;
        choices.innerHTML = optionTag;
        const choice = choices.querySelectorAll(".option");
        for (let i = 0; i < choice.length; i++) {
            choice[i].setAttribute("onclick", "choiceSelected(this)");
        }
}

function questionAnswered(answer){
    if (queCount>=10){
        return;
    }
    let userAnswer = answer.textContent;
    let rightAnswer = questions[queCount].answer;
    if(userAnswer == rightAnswer){
        const response = document.querySelector("#response");
        response.innerHTML = '<div id="response"><span>Correct!</span</div>';
        setTimeout(nextQuestion, 500)
        score += 1
    } else {
        const response = document.querySelector("#response");
        response.innerHTML = '<div id="response"><span>Incorrect!</span</div>';
        setTimeout(nextQuestion, 500)
        counter -= 5
    }
}
function nextQuestion(){
    queCount++;
    if(queCount == 10){
        quizOver()
    };
    showQuestions(queCount);
    const response = documnent.querySelector("#response");
    response.innerHTML = '<div id="response"><span></span></div>';
}

function quizEnd(){
    questionBox.classList.add("hide");
    finish.classList.remove("hide");
    const score = document.querySelector(".score");
    let scoreTag = '<h3 class="score"> Your score was '+ score +'out of 10!</h3>';
    score.innerHTML = scoreTag;
}

scoreButton.onclick = () => {
    let initials = initialsText.value;
    var resultsData = {
        initials: initials,
        score: score
    }
    localStorage.setItem((localStorage.length+1), JSON.stringify(resultsData));
    initialsText.value = ""
    location.reload();
}