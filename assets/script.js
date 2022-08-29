const userScore = 0;
const compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreDiv = document.getElementsByClassName("score");
const results = document.getElementsByClassName("results");
const rockDiv = document.getElementById("rock");
const paperDiv = document.getElementById("paper");
const scissorsDiv = document.getElementById("scissors");
const spockDiv = document.getElementById("spock");
const lizardDiv = document.getElementById("lizard");

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors", "spock", "lizard"];
    console.log(Math.random() * 3);
}

function game(usersChoice) {

}

function main() {
    rockDiv.addEventListener('click', function() {
        game("rock");
    })
    paperDiv.addEventListener('click', function() {
        game("paper");
    })
    scissorsDiv.addEventListener('click', function() {
        game("scissors");
    })
    spockDiv.addEventListener('click', function() {
        game("spock");
    })
    lizardDiv.addEventListener('click', function() {
        game("lizard");
    })
}

main();