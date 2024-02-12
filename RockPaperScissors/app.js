//declare and initialize objects
const user = document.getElementById("choose");
const btn = document.getElementById("button");
const results = document.querySelector(".results");
let computerChoice = "ROCK";

// Generate computer value

const compFn = () => {
  let random = Math.random();
  if (random <= 0.33) {
    computerChoice = "ROCK";
  } else if (random <= 0.66) {
    computerChoice = "SCISSORS";
  } else {
    computerChoice = "PAPER";
  }
  return computerChoice;
};

//Generate results
const resultFn = () => {
  let prompt = "";
  const comp = compFn();
  let user = choose.value;
  console.log(comp);
  console.log(user);
  if (comp == user) {
    prompt = "This is a draw";
  } else if (user == "PAPER" && comp == "SCISSORS") {
    prompt = `You used ${user} and your opponent used ${comp}, therefore your opponent wins `;
  } else if (user == "PAPER" && comp == "ROCK") {
    prompt = `You used ${user} and your opponent used ${comp}, therefore you win`;
  } else if (user == "SCISSORS" && comp == "ROCK") {
    prompt = `You used ${user} and your opponent used ${comp}, therefore your opponent wins `;
  } else if (user == "SCISSORS" && comp == "PAPER") {
    prompt = `You used ${user} and your opponent used ${comp}, therefore you win `;
  } else if (user == "ROCK" && comp == "SCISSORS") {
    prompt = `You used ${user} and your opponent used ${comp}, therefore you Win `;
  } else if (user == "PAPER" && comp == "ROCK") {
    prompt = `You used ${user} and your opponent used ${comp}, therefore your Opponent wins `;
  }

  return prompt;
};

btn.addEventListener("click", function () {
  const x = resultFn();
  results.innerHTML = x;
});
