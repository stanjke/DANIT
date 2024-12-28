// const number = 12; // number
// const nagativeNumber = -12; // number

// const magicNumber = "12"; // string

// const varibale = true; // boolean
// const negativeVariable = false; //boolean

// let varibaleWithoutStatement; // undefined

// let variableTwo = number; // 12

// // number = 13;
// variableTwo = 14;

// console.log("variable number equal to: ", number);

// // camelCase

{
  const allCombinations = [
    { x: true, y: true, "x && y": true && true, "x || y": true || true },
    { x: true, y: false, "x && y": true && false, "x || y": true || false },
    { x: false, y: true, "x && y": false && true, "x || y": false || true },
    { x: false, y: false, "x && y": false && false, "x || y": false || false },
  ];
  console.table(allCombinations);
}
