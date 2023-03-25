'use strict';

const checkButton = document.querySelector('.check');
const againButton = document.querySelector('.again');
const checkInput = document.querySelector('.guess');
const message = document.querySelector('.message');
const scoreDOM = document.querySelector('.score');
const highScoreDOM = document.querySelector('.highscore');
const displaySecretNumber = document.querySelector('.number')
const bodyElement = document.querySelector('body');

const generateRandom = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateRandom();
let score = 20;
let highScore = 0;

const changeScore = () => {
    score--;
    scoreDOM.textContent = score;
}

const printLose = () => {
    message.textContent = "🎇 You Lost the Game";
    scoreDOM.textContent = 0;
}

const checkHighScore = () => {
    if (score > highScore) {
        highScore = score;
        highScoreDOM.textContent = highScore;
    }
}

const displayMessage = (customMessage) => { message.textContent = customMessage; }

checkButton.addEventListener("click", () => {
    const guess = Number(checkInput.value)
    console.log(guess);

    if (!guess) {
        displayMessage("⛔ No number");
    } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number");
        bodyElement.style.backgroundColor = "#60b347";
        displaySecretNumber.textContent = secretNumber;
        checkHighScore();
    } else if (guess > secretNumber) {
        if (score > 1) {
            displayMessage("📈Too High");
            changeScore();
        } else {
            printLose();
        }
    } else if (guess < secretNumber) {
        if (score > 1) {
            displayMessage("📉 Too Low");
            changeScore();
        } else {
            printLose();
        }
    }
})

againButton.addEventListener("click", () => {
    score = 20;
    secretNumber = generateRandom();
    scoreDOM.textContent = score;
    displayMessage("Start guessing...");
    displaySecretNumber.textContent = "?";
    bodyElement.style.backgroundColor = "#222";
    checkInput.value = null;
})