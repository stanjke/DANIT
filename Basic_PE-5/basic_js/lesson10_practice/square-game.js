// console.log(document);
let square = document.createElement("div"); //NODE - вулез
let squareColor = "blue";
let squareHeight = 100;
let squareWidth = 100;
let px = "px";

square.style.height = squareHeight + px;
square.style.width = squareWidth + px;
square.style.position = "absolute";
square.style.top = 0;
square.style.left = 0;
square.style.backgroundColor = squareColor;

let x = 0;
let y = 0; //846 -  border
let dirX = 1;
let dirY = 1;

// innerHeight
// innerWidth

function moveSquare() {
  x += dirX;
  y += dirY;
  square.style.top = y + "px";
  square.style.left = x + "px";
  if (y + squareHeight >= window.innerHeight || y <= 0) dirY *= -1;
  if (x + squareWidth >= window.innerWidth || x <= 0) dirX *= -1;

  // if (y + squareHeight >= window.innerHeight || y <= 0) {
  //   //            961 >= 961                 961 <= 0
  //   //                FALSE          ||        TRUE
  //   //                              TRUE

  //   // true || false = true
  //   // true && false = false
  //   dirY *= -1;
  // }
}
//   API - application programming interface
//   DOM API - Document Object Model application programming interface
// square.addEventListener("click", moveSquare);

// setInterval(moveSquare, 1);

document.body.appendChild(square);
