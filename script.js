const input = document.querySelector("select");
const button = document.querySelector("button");
let gamePlayer = ["rock", "paper", "scissor"];
const result = document.querySelector("#result");
button.addEventListener("click", () => {
  let randomnum = Math.floor(Math.random() * 3);
  computerPlayer = gamePlayer[randomnum];
  console.log(computerPlayer);
  if (computerPlayer == "rock" && input.value == "paper") {
    console.log("computer won");
    result.innerHTML = "computer won";
  } else if (computerPlayer == "rock" && input.value == "scissor") {
    console.log("computer won");
    result.innerHTML = "computer won";
  } else if (computerPlayer == "rock" && input.value == "rock") {
    console.log("Draw");
    result.innerHTML = "Draw";
  } else if (computerPlayer == "paper" && input.value == "rock") {
    console.log("You win 😀");
    result.innerHTML = "You win 😀";
  } else if (computerPlayer == "paper" && input.value == "scissor") {
    console.log("You win 😀");
    result.innerHTML = "You win 😀";
  } else if (computerPlayer == "paper" && input.value == "paper") {
    console.log("Draw");
    result.innerHTML = "Draw";
  } else if (computerPlayer == "scissor" && input.value == "paper") {
    console.log("computer won");
    result.innerHTML = "computer won";
  } else if (computerPlayer == "scissor" && input.value == "rock") {
    console.log("You win 😀");
    result.innerHTML = "You win 😀";
  } else if (computerPlayer == "scissor" && input.value == "scissor") {
    console.log("Draw");
    result.innerHTML = "Draw";
  }
});
