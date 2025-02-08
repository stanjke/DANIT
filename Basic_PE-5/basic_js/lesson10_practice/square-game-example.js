// Создание объекта (квадрата)
const redSquare = document.createElement("div");
redSquare.style.width = "100px";
redSquare.style.height = "100px";
redSquare.style.backgroundColor = "red";
redSquare.style.position = "absolute";
let x = 0;
let y = 0;
let dirX = 1;
let dirY = 1;
let totalClicks = 0;
const clickCounter = document.createElement("div");
document.body.appendChild(clickCounter);

let playerName = "";
let startTime;
let intervalId = null;
let gameSessions = [];

function moveSquare() {
  x += dirX;
  y += dirY;
  redSquare.style.left = x + "px";
  redSquare.style.top = y + "px";
  if (x + 100 >= window.innerWidth || x <= 0) dirX *= -1;
  if (y + 100 >= window.innerHeight || y <= 0) dirY *= -1;
}

function getRandomColor() {
  return Math.floor(Math.random() * 256);
}

function reset() {
  x = 0;
  y = 0;
  dirX = 1;
  dirY = 1;
  totalClicks = 0;
  clickCounter.innerHTML = totalClicks;
  redSquare.style.left = x + "px";
  redSquare.style.top = y + "px";
}

function getRandomDirection() {
  return Math.random() < 0.5 ? -1 : 1;
}

redSquare.addEventListener("click", () => {
  if (totalClicks === 10) {
    const endTime = new Date();
    const timeTaken = (endTime - startTime) / 1000;
    alert(`You won! Time taken: ${timeTaken} seconds. Do you want to play again?`);
    gameSessions.push({ name: playerName, time: timeTaken });
    updateScoreTable();
    reset();
    showScoreTable();
    return;
  }
  dirX = getRandomDirection();
  dirY = getRandomDirection();
  clickCounter.innerHTML = ++totalClicks;
  redSquare.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
});

redSquare.addEventListener("mouseenter", () => {
  intervalId = setInterval(moveSquare, 10);
});

redSquare.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});

function startGame() {
  playerName = prompt("Enter your name:");
  if (!playerName) {
    alert("Name is required to start the game.");
    return;
  }
  hideScoreTable();
  alert("Game will start in 3 seconds...");
  setTimeout(() => {
    startTime = new Date();
    x = Math.floor(Math.random() * (window.innerWidth - 100));
    y = Math.floor(Math.random() * (window.innerHeight - 100));
    redSquare.style.left = x + "px";
    redSquare.style.top = y + "px";
    document.body.appendChild(redSquare);
    intervalId = setInterval(moveSquare, 10);
  }, 3000);
}

function updateScoreTable() {
  const scoreTable = document.getElementById("scoreTable");
  scoreTable.innerHTML = "<tr><th>Player</th><th>Time (seconds)</th></tr>";
  gameSessions.forEach((session) => {
    const row = document.createElement("tr");
    const nameCell = document.createElement("td");
    const timeCell = document.createElement("td");
    nameCell.textContent = session.name;
    timeCell.textContent = session.time;
    row.appendChild(nameCell);
    row.appendChild(timeCell);
    scoreTable.appendChild(row);
  });
}

function showScoreTable() {
  document.getElementById("scoreTableContainer").style.display = "flex";
}

function hideScoreTable() {
  document.getElementById("scoreTableContainer").style.display = "none";
}

document.body.appendChild(clickCounter);

const scoreTableContainer = document.createElement("div");
scoreTableContainer.id = "scoreTableContainer";
const scoreTable = document.createElement("table");
scoreTable.id = "scoreTable";
scoreTableContainer.appendChild(scoreTable);
document.body.appendChild(scoreTableContainer);
updateScoreTable();

const startButton = document.getElementById("startButton");
startButton.addEventListener("click", startGame);
