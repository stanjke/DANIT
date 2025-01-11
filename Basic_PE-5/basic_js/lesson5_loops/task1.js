let number = Math.floor(Math.random() * 10) + 1;
let isCorrect = false;

while (!isCorrect) {
  let answer = prompt("Try to guess number from 1 to 10 🤔");
  if (answer == number) {
    alert("Correct!!! 🎉");
    isCorrect = true;
  } else {
    alert("Incorrect. Try again. 🙃");
  }
}
