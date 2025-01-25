const redSquare = document.createElement("div");
redSquare.style.width = "100px";
redSquare.style.height = "100px";
redSquare.style.backgroundColor = "red";
redSquare.style.position = "absolute";
redSquare.style.display = "flex";
redSquare.style.justifyContent = "center";
redSquare.style.alignItems = "center";

const clickCounter = document.createElement("span");

redSquare.appendChild(clickCounter);

//implement infinity moving of the square

let x = 0;
let y = 0;
let dirX = 1;
let dirY = 1;
let totalClicks = 0;

function getRandomDirection() {
  return Math.random() < 0.5 ? -1 : 1;
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

function moveSquare() {
  x += dirX;
  y += dirY;
  redSquare.style.left = x + "px";
  redSquare.style.top = y + "px";
  if (x + 100 >= window.innerWidth || x <= 0) dirX *= -1;
  if (y + 100 >= window.innerHeight || y <= 0) dirY *= -1;
}

redSquare.addEventListener("click", () => {
  if (totalClicks === 10) {
    alert("You won! Do you want to play again?");
    reset();
    return;
  }
  dirX = getRandomDirection();
  dirY = getRandomDirection();
  clickCounter.innerHTML = ++totalClicks;
  redSquare.style.backgroundColor = `rgb(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
});

let intervalId = null;

redSquare.addEventListener("mouseenter", () => {
  intervalId = setInterval(moveSquare, 10);
});

redSquare.addEventListener("mouseleave", () => {
  clearInterval(intervalId);
});
//add function to change color of the square

document.body.appendChild(redSquare);
