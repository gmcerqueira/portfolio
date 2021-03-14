const colorAnswer = document.querySelector("#rgb-color");
const colorsContainer = document.querySelector("#colors-container");
const answerText = document.querySelector("#answer");
const resetBtn = document.querySelector("#reset-game");
const score = document.querySelector("#score");
let points = 0;

// Cria cor aleatória
function randomColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  return `(${r}, ${g}, ${b})`;
}

// Verifica se a resposta está correta e marca a pontuação
function checkGuess(event) {
  const guess = event.target.id;
  const check = guess === "rightAnswer";
  answerText.style.color = "black";
  if (check) {
    answerText.innerHTML = "Right!";
    points += 3;
    resetColors();
  } else {
    answerText.innerHTML = "Wrong! Try again!";
    if (points > 0) {
      points -= 1;
    }
  }
  score.innerHTML = points;
}

// Cria opções de cores
function createColorBalls(numberOfColors) {
  for (let i = 0; i < numberOfColors; i += 1) {
    const ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = `rgb${randomColor()}`;
    ball.addEventListener("click", checkGuess);
    colorsContainer.appendChild(ball);
  }
}

// seleciona resposta correta mostra a cor a ser adivinhada
function selectingAnswer() {
  const balls = document.querySelectorAll(".ball");
  const colors = [];
  balls.forEach((ball) => colors.push(ball.style.backgroundColor));
  const randomIndex = Math.floor(Math.random() * colors.length);
  balls[randomIndex].id = "rightAnswer";
  colorAnswer.innerHTML = `Color: ${colors[randomIndex].slice(3)}`;
}

// Reinicia as cores e resposta correta
function resetColors() {
  colorsContainer.innerHTML = "";
  createColorBalls(6);
  selectingAnswer();
}

function restartGame() {
  resetColors()
  answerText.style.color = "transparent";
  points = 0
  score.innerHTML = points;
}

window.onload = () => {
  resetColors()
  selectingAnswer();
  resetBtn.addEventListener("click", restartGame);
};
