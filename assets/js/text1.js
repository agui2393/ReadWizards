// Variables
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Questions Data
const questions = [{
        question: "Question 1",
        answers: {
            a: "a",
            b: "b",
            c: "c"
        },
        correctAnswer: "b"
    },
    {
        question: "question 2",
        answers: {
            a: "a",
            b: "b",
            c: "c"
        },
        correctAnswer: "b"
    },
    {
        question: "question 3",
        answers: {
            a: "a",
            b: "b",
            c: "c"
        },
        correctAnswer: "a"
    }
];
// Start Game 
function startGame() {
    document.getElementById("startPage").style.display = "none";
    document.getElementById("gamePage").style.display = "flex";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("questionText").innerText = question.question;

    const answerButtons = document.querySelectorAll("#answers button");
    answerButtons[0].innerText = `A) ${question.answers.a}`;
    answerButtons[1].innerText = `B) ${question.answers.b}`;
    answerButtons[2].innerText = `C) ${question.answers.c}`;

    // Enable the buttons before every question
    answerButtons.forEach(button => button.disabled = false);

    document.getElementById("feedback").style.display = "none";
    document.getElementById("nextButton").style.display = "none";

    startTimer();
}

// Timer
function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;

    clearInterval(timer);

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("feedbackText").textContent = "Time's up!";
            document.getElementById("feedback").style.display = "flex";
            document.getElementById("nextButton").style.display = "flex";
        }
    }, 1000);
}

function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    const feedbackText = document.getElementById("feedbackText");

    clearInterval(timer);

    const answerButtons = document.querySelectorAll("#answers button");

    // Disable all buttons after an answer is selected
    answerButtons.forEach(button => button.disabled = true);

    if (selectedAnswer === question.correctAnswer) {
        feedbackText.textContent = "It's correct!";
        score++;
    } else {
        feedbackText.textContent = "It's not correct!";
    }

    document.getElementById("feedback").style.display = "block";
    document.getElementById("nextButton").style.display = "block";
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showGameOverPage();
    }
}

// Game Over Function
function showGameOverPage() {
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("gameOverPage").style.display = "block";
    document.getElementById("finalScoreText").innerText = `Your final score is: ${score}`;

    if (score < 3) {
        document.getElementById("tryAgainButton").style.display = "block";
        document.getElementById("nextGameButton").style.display = "none";
    } else {
        document.getElementById("tryAgainButton").style.display = "none";
        document.getElementById("nextGameButton").style.display = "block";
    }
}

// Restart Game 
function restartGame() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("gameOverPage").style.display = "none";
    document.getElementById("startPage").style.display = "flex";
}

// Go to Next Game Function
function nextGame() {
    window.location.href = "text2.html"
}