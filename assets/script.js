let userScore = 0;
let compScore = 0;
const userScoreSpan = document.getElementById("user-score");
const compScoreSpan = document.getElementById("comp-score");
const scoreDiv = document.getElementsByClassName("score");
const results = document.querySelector(".results > p");
const rockDiv = document.getElementById("r");
const paperDiv = document.getElementById("p");
const scissorsDiv = document.getElementById("s");
const spockDiv = document.getElementById("sp");
const lizardDiv = document.getElementById("l");

function getComputerChoice() {
    const choices = ["r", "p", "s", "sp", "l"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
} 

function convertToWord(letter) {
    if(letter === "r") return "Rock";
    if(letter === "p") return "Paper";
    if(letter === "s") return "Scissors";
    if(letter === "sp") return "Spock";
    return "Lizard";
}

function win(usersChoice, computerChoice) {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  results.innerHTML = `${convertToWord(usersChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
}

function loose(usersChoice, computerChoice) {
  compScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  results.innerHTML = `${convertToWord(usersChoice)} loses to ${convertToWord(computerChoice)}. You Lost!`;
}

function draw(usersChoice, computerChoice) {
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
  results.innerHTML = `${convertToWord(usersChoice)} equals ${convertToWord(computerChoice)}. It's a Draw!`;
}

function game(usersChoice) {
  const computerChoice = getComputerChoice();
  switch (usersChoice + computerChoice) {
    case "sp":
    case "sl":
    case "pr":
    case "psp":
    case "rs":
    case "rl":
    case "lsp":
    case "lp":
    case "sps":
    case "spr":
        win(usersChoice, computerChoice);
        break;
    case "ps":
    case "ls":
    case "rp":
    case "spp":
    case "sr":
    case "lr":
    case "spl":
    case "pl":
    case "ssp":
    case "rsp":
        loose(usersChoice, computerChoice);
        break;
    case "ss":
    case "pp":
    case "rr":
    case "ll":
    case "spsp":
        draw(usersChoice, computerChoice);
        break;
  }
}

function main() {
    rockDiv.addEventListener('click', function() {
        game("r");
    })
    paperDiv.addEventListener('click', function() {
        game("p");
    })
    scissorsDiv.addEventListener('click', function() {
        game("s");
    })
    spockDiv.addEventListener('click', function() {
        game("sp");
    })
    lizardDiv.addEventListener('click', function() {
        game("l");
    })
}

main();