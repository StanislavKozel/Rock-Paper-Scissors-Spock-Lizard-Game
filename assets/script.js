let userScore = 0;
let compScore = 0;
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
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function win() {
  userScore++;
  userScoreSpan.innerHTML = userScore;
  compScoreSpan.innerHTML = compScore;
}

function loose() {
    console.log("lost")
}

function draw() {
    console.log("draw")
}

function game(usersChoice) {
  const computerChoice = getComputerChoice();
  switch (usersChoice + computerChoice) {
    case "scissorspaper":
    case "scissorslizard":
    case "paperrock":
    case "paperspock":
    case "rockscissors":
    case "rocklizard":
    case "lizardspock":
    case "lizardpaper":
    case "spockscissors":
    case "spockrock":
        win();
        break;
    case "paperscissors":
    case "lizardscissors":
    case "rockpaper":
    case "spockpaper":
    case "scissorsrock":
    case "lizardrock":
    case "spocklizard":
    case "paperlizard":
    case "scissorsspock":
    case "rockspock":
        loose();
        break;
    case "scissorsscissors":
    case "paperpaper":
    case "rockrock":
    case "lizardlizard":
    case "spockspock":
        draw();
        break;
  }
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