let square = document.createElement("div");
let blue = "blue";

square.style.height = "115px";
square.style.width = "115px";
square.style.backgroundColor = blue;

let x = 0;
let y = 0;
let dirX = 1;
let dirY = 1;

function moveSquare() {
  x += dirX;
  y += dirY;
  square.style.top = y + "px";
  square.style.left = x + "px";
}

document.body.appendChild(square);
