// Logical operators:

// Logical AND (&&) - returns true if both operands are true
{
  // let apple1 = true;
  // let apple2 = true;
  // let apple1 = true; //boolean
  // let apple2 = true; //boolean
  // && - logical AND
  // console.log("Logical AND (&&) - returns true if both operands are true: ", true && false);
}

// Logical OR (||) - returns true if at least one of the operands is true

// {
//   let apple1 = true;
//   let apple2 = true;
//   let apple3 = true;
//   let apple4 = false;
//   let apple5 = false;
//   let apple6 = false;
//   console.log("Logical OR (||) - returns true if at least one of the operands is true: ", apple1 || apple2); // true
//   console.log("Logical OR (||) - returns true if at least one of the operands is true: ", apple3 || apple4); // true
//   console.log("Logical OR (||) - returns true if at least one of the operands is true: ", apple5 || apple6); // false
// }

// Logical NOT (!) - converts the operand to boolean and then negates it
// {
//   let x = true;
//   console.log(!x);
//   // console.log("Logical NOT (!) - returns true if the operand is false: ", !x);
// }

// "!!" converts the operand to boolean and then negates it twice
// {
//   let x = true;
//   console.log("!! converts the operand to boolean and then negates it twice: ", !!x);
// }

// Logical operators table

// {
//   const logicalResults = [
//     { Operator: "&&", Description: "Logical AND", x: true, y: false, Result: true && false },
//     { Operator: "||", Description: "Logical OR", x: true, y: false, Result: true || false },
//     { Operator: "!", Description: "Logical NOT", x: true, Result: !true },
//     { Operator: "!!", Description: "Double Logical NOT", x: true, Result: !!true },
//   ];

//   console.table(logicalResults);
// }

// All possible combinations for logical AND (&&) and OR (||)
// {
//   const allCombinations = [
//     { x: true, y: true, "x && y": true && true, "x || y": true || true },
//     { x: true, y: false, "x && y": true && false, "x || y": true || false },
//     { x: false, y: true, "x && y": false && true, "x || y": false || true },
//     { x: false, y: false, "x && y": false && false, "x || y": false || false },
//   ];
//   console.table(allCombinations);
// }

// Tasks block

// First block:
{
  // Axen: Перевір, чи true && false.
  // Bogdan: Перевір, чи true || false.
  // Serhii: Перевір, чи !true.
  // Michael: Перевір, чи !!true.
  // Mikita: Перевір, чи false && true.
  // Oleksii: Перевір, чи false || true.
  // Alex: Перевір, чи !false.
}

// Second block:
{
  // Axen: Перевір, чи !!false.
  // Bogdan: Перевір, чи true && true.
  // Serhii: Перевір, чи true || true.
  // Michael: Перевір, чи false && false.
  // Mikita: Перевір, чи false || false.
  // Oleksii: Перевір, чи !true.
  // Alex: Перевір, чи !!true.
}

// Third block:
{
  // Axen: Перевір, чи true && false.
  // Bogdan: Перевір, чи true || false.
  // Serhii: Перевір, чи !false.
  // Michael: Перевір, чи !!false.
  // Mikita: Перевір, чи false && true.
  // Oleksii: Перевір, чи false || true.
  // Alex: Перевір, чи !true.
}
