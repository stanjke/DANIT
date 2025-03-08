const gameBoard = document.getElementById("game-board");
const gridSize = 20;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    // for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
  }
}

createGrid();

function generateFood() {
  let newFood;
  newFood = {
    x: Math.floor(Math.random() * gridSize),
    y: Math.floor(Math.random() * gridSize),
  };
  console.log(newFood.x);
  console.log(newFood.y);
  return newFood;
}
function draw() {
  let cells = document.querySelectorAll(".cell");
  let food = generateFood();
  // console.log("CELLS: ", cells);
  console.log("FOOD: ", food);
  let foodIndex = food.y * gridSize + food.x;
  cells[foodIndex].classList.add("food");
}

draw();
