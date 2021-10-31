let pscore = "0";
let cscore = "0";

let UpdateScore = () => {
  let playerscore = document.querySelector(".player p");
  let computerscore = document.querySelector(".computer p");
  playerscore.textContent = pscore;
  computerscore.textContent = cscore;
};

let Start = () => {
  let startButton = document.querySelector(".intro button");
  let playPage = document.querySelector(".match");

  startButton.addEventListener("click", () => {
    playPage.classList.add("fadeOut");

    let intro = document.querySelector(".intro");
    intro.classList.add("fade-in");
  });
};

let computerOption = ["paper", "rock", "scissors"];
let playMatch = () => {
  let options = document.querySelectorAll(".matchbutton button");
  let playerHand = document.querySelector(".playerHand");
  let computerHand = document.querySelector(".computerHand");
  let hands = document.querySelectorAll(".hand img");

  hands.forEach((element) => {
    element.addEventListener("animationend", function () {
      this.style.animation = "";
    });
  });

  options.forEach((option) => {
    option.addEventListener("click", function () {
      let computerNumber = Math.floor(Math.random() * 3);
      let computerChoice = computerOption[computerNumber];
      setTimeout(() => {
        compareHand(this.textContent, computerChoice);
        playerHand.src = `./photo/${this.textContent}.png`;
        computerHand.src = `./photo/${computerChoice}.png`;
      }, 2000);

      playerHand.style.animation = "playShake 3s ease";
      computerHand.style.animation = "computerShake 3s ease";
    });
  });
};
let compareHand = (playerChoice, computerChoice) => {
  let winner = document.querySelector(".winner");
  if (playerChoice === computerChoice) {
    winner.textContent = "This Match is Draw";
    return;
  }
  if (playerChoice === "rock") {
    if (computerChoice === "scissors") {
      winner.textContent = "player is winner";
      pscore++;
      UpdateScore();
      return;
    } else {
      winner.textContent = "Computer is winner";
      cscore++;
      UpdateScore();
      return;
    }
  }
  if (playerChoice === "paper") {
    if (computerChoice === "scissors") {
      winner.textContent = "computer is winner";
      cscore++;
      UpdateScore();
      return;
    } else {
      winner.textContent = "player is winner";
      pscore++;
      UpdateScore();
      return;
    }
  }
  if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      winner.textContent = "computer is winner";
      cscore++;
      UpdateScore();
    } else {
      winner.textContent = "player is winner";
      pscore++;
      UpdateScore();
      return;
    }
  }
};

playMatch();
Start();
