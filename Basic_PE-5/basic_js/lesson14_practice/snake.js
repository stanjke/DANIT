const gameBoard = document.getElementById("game-board");
const gridSize = 20;

function createGrid() {
  for (let i = 0; i < gridSize * gridSize; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    gameBoard.appendChild(cell);
  }
}
createGrid();
