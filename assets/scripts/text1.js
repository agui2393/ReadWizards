// Hamburger

document.getElementById('hamburger-icon').addEventListener('click', function () {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});
//Add event listeners to buttons
window.addEventListener('DOMContentLoaded', () => {
    const beginButton = document.getElementById('button-begin-quest');
    beginButton.addEventListener('click', startGame);

    const answerA = document.getElementById('answer-a');
    const answerB = document.getElementById('answer-b');
    const answerC = document.getElementById('answer-c');
    answerA.addEventListener('click', () => checkAnswer('a'));
    answerB.addEventListener('click', () => checkAnswer('b'));
    answerC.addEventListener('click', () => checkAnswer('c'));


    const nextButton = document.getElementById('next-button');
    nextButton.addEventListener('click', nextQuestion);


    const tryAgainButton = document.getElementById('try-again-button');
    tryAgainButton.addEventListener('click', restartGame);


    const nextGameButton = document.getElementById('next-game-button');
    nextGameButton.addEventListener('click', nextGame);
});


// Questions & responses for the quest 1
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

/**
 * Starts Game and transition from the start page to the game page
 */
function startGame() {
    document.getElementById("start-page").style.display = "none";
    document.getElementById("game-page").style.display = "flex";
    showQuestion();
}
/**
 * Displays the current question and answers
 **/
function showQuestion() {
    const question = questions[currentQuestion];
    document.getElementById("question-text").innerText = question.question;

    const answerButtons = document.querySelectorAll("#answers button");
    answerButtons[0].innerText = `A) ${question.answers.a}`;
    answerButtons[1].innerText = `B) ${question.answers.b}`;
    answerButtons[2].innerText = `C) ${question.answers.c}`;
    //Hides button next & feedback
    answerButtons.forEach(button => button.disabled = false);
    document.getElementById("feedback").style.display = "none";
    document.getElementById("next-button").style.display = "none";
    //Starts timer
    startTimer();
}

// Timer
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 30;

/**
 * Starts timer and counts down from 30 seconds until time is over or you select a question
 */
function startTimer() {
    timeLeft = 30;
    document.getElementById("timer").innerText = timeLeft;

    clearInterval(timer);

    timer = setInterval(function () {
        timeLeft--;
        document.getElementById("timer").innerText = timeLeft;
        // If time is up, stops the timer and show feedback + time´s up message
        if (timeLeft <= 0) {
            clearInterval(timer);
            document.getElementById("game-page").style.display = "none";
            document.getElementById("feedback-text").textContent = "Time's up!";
            document.getElementById("feedback").style.display = "flex";
            document.getElementById("next-button").style.display = "flex";
        }
    }, 1000);
}
/**
 * Checks if answer is correct and gives feedback
 */
function checkAnswer(selectedAnswer) {
    const question = questions[currentQuestion];
    const feedbackText = document.getElementById("feedback-text");
    /*stops timer*/
    clearInterval(timer);

    const answerButtons = document.querySelectorAll("#answers button");

    answerButtons.forEach(button => button.disabled = true);

    if (selectedAnswer === question.correctAnswer) {
        feedbackText.textContent = "It's correct!";
        score++;
    } else {
        feedbackText.textContent = "It's not correct!";
    }
    //hides game page and shows feedback and next button*/
    document.getElementById("feedback").style.display = "flex";
    document.getElementById("next-button").style.display = "flex";
    document.getElementById("game-page").style.display = "none";


}
/**
 * Takes you to next question and if no more questions triggers Game over.
 */
function nextQuestion() {
    document.getElementById("game-page").style.display = "flex";
    showQuestion();
    currentQuestion++;
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showGameOverPage();
    }

}

/**
 * Hides game page and feedback and shows you final score and try again or go to next quest button
 */

function showGameOverPage() {
    clearInterval(timer);
    document.getElementById("game-page").style.display = "none";
    document.getElementById("feedback").style.display = "none";
    document.getElementById("game-over-page").style.display = "flex";
    document.getElementById("final-score-text").innerText = `Your final score is: ${score}`;

    if (score < 3) {
        document.getElementById("try-again-button").style.display = "flex";
        document.getElementById("next-game-button").style.display = "none";
    } else {
        document.getElementById("try-again-button").style.display = "none";
        document.getElementById("next-game-button").style.display = "flex";
    }
}

/**
 * Restarts Game and hides final score
 */
function restartGame() {
    score = 0;
    currentQuestion = 0;
    document.getElementById("game-over-page").style.display = "none";
    document.getElementById("start-page").style.display = "flex";
}

/**
 * Takes you to next game
 */
function nextGame() {
    window.location.href = "quest2.html";
}