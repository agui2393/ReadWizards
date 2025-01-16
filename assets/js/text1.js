function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}



let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

// Questions Data
const questions = [{
        question: "Can you remember where Skye was exploring?",
        answers: {
            a: "In a magic garden",
            b: "In a secret cave",
            c: "In an enchanted forest"
        },
        correctAnswer: "c"
    },
    {
        question: "Can you remember what Skye found inside the mysterious cave?",
        answers: {
            a: "A big treasure chest",
            b: "A big dragon",
            c: "A golden crown"
        },
        correctAnswer: "a"
    },
    {
        question: "What was guarding the treasure chest?",
        answers: {
            a: "A friendly wizard",
            b: "A giant creature with glowing eyes",
            c: "A talking bird"
        },
        correctAnswer: "b"
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
            document.getElementById("gamePage").style.display = "none";
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

    answerButtons.forEach(button => button.disabled = true);

    if (selectedAnswer === question.correctAnswer) {
        feedbackText.textContent = "It's correct!";
        score++;
    } else {
        feedbackText.textContent = "It's not correct!";
    }

    document.getElementById("feedback").style.display = "flex";
    document.getElementById("nextButton").style.display = "flex";
    document.getElementById("gamePage").style.display = "none";


}

function nextQuestion() {
    document.getElementById("gamePage").style.display = "flex";
    showQuestion();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showGameOverPage();
    }

}

// Game Over Function
function showGameOverPage() {
    clearInterval(timer);
    document.getElementById("gamePage").style.display = "none";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("gameOverPage").style.display = "flex";
    document.getElementById("finalScoreText").innerText = `Your final score is: ${score}`;

    if (score < 3) {
        document.getElementById("tryAgainButton").style.display = "flex";
        document.getElementById("nextGameButton").style.display = "none";
    } else {
        document.getElementById("tryAgainButton").style.display = "none";
        document.getElementById("nextGameButton").style.display = "flex";
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