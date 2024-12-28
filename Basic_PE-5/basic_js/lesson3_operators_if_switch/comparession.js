// Comparession  operators:

// Equal (==) - compares two operands, returns true if they are equal
// {
//   let x = 1;
//   let y = "1";
//   console.log("(==): ", x == y);
//   console.log("(===): ", x === y);
// }

// Not equal (!=) - compares two operands, returns true if they are not equal
// {
//   let x = 2;
//   let y = "2";
//   console.log("Not equal (!=) - compares two operands, returns true if they are not equal: ", x !== y); // 2 != "2"
// }

// Strict equal (===) - compares two operands, returns true if they are equal and of the same type
// {
//   let x = 1;
//   let y = "1";
//   console.log("Strict equal (===) - compares two operands, returns true if they are equal and of the same type: ", x === y);
// }

// Strict not equal (!==) - compares two operands, returns true if they are not equal or not of the same type
// {
//   let x = 1;
//   let y = "1";
//   console.log("Strict not equal (!==) - compares two operands, returns true if they are not equal or not of the same type: ", x !== y);
// }

// Greater than (>) - compares two operands, returns true if the left operand is greater than the right operand
// {
//   let x = "def";
//   let y = "abc";
//   console.log("Greater than (>) - compares two operands, returns true if the left operand is greater than the right operand: ", x > y);
// }

// Less than (<) - compares two operands, returns true if the left operand is less than the right operand
// {
//   let x = 2;
//   let y = 1;
//   console.log("Less than (<) - compares two operands, returns true if the left operand is less than the right operand: ", 2 < 1);
// }

// Greater than or equal (>=) - compares two operands, returns true if the left operand is greater than or equal to the right operand
{
  // let x = 2;
  // let y = 2;
  // console.log("Greater than or equal (>=) - compares two operands, returns true if the left operand is greater than or equal to the right operand: ", x >= y);
}

// Less than or equal (<=) - compares two operands, returns true if the left operand is less than or equal to the right operand
{
  // let x = 2;
  // let y = 2;
  // console.log("Less than or equal (<=) - compares two operands, returns true if the left operand is less than or equal to the right operand: ", x <= y);
}

// Comparison operators table

{
  const comparisonResults = [
    { Operator: "==", Description: "Equal (дорівню)", x: 1, y: 1, Result: 1 == 1 },
    { Operator: "!=", Description: "Not equal (не дорівнює)", x: 1, y: 2, Result: 1 != 2 },
    { Operator: "===", Description: "Strict equal (суворе порівняння)", x: 1, y: "1", Result: 1 === "1" },
    { Operator: "!==", Description: "Strict not equal", x: 1, y: "1", Result: 1 !== "1" },
    { Operator: ">", Description: "Greater than", x: 2, y: 1, Result: 2 > 1 },
    { Operator: "<", Description: "Less than", x: 1, y: 2, Result: 1 < 2 },
    { Operator: ">=", Description: "Greater than or equal", x: 2, y: 1, Result: 2 >= 1 },
    { Operator: "<=", Description: "Less than or equal", x: 1, y: 2, Result: 1 <= 2 },
  ];

  console.table(comparisonResults);
}

// Tasks block

// First block:
{
  // Axen: Перевір, чи 1 дорівнює 1.
  // Bogdan: Перевір, чи 1 не дорівнює 2.
  // Serhii: Перевір, чи 1 строго дорівнює "1".
  // Michael: Перевір, чи 1 строго не дорівнює "1".
  // Mikita: Перевір, чи 2 більше за 1.
  // Oleksii: Перевір, чи 1 менше за 2.
  // Alex: Перевір, чи 2 більше або дорівнює 1.
}

// Second block:
{
  // Axen: Перевір, чи 1 менше або дорівнює 2.
  // Bogdan: Перевір, чи 3 дорівнює 3.
  // Serhii: Перевір, чи 4 не дорівнює 5.
  // Michael: Перевір, чи 6 строго дорівнює "6".
  // Mikita: Перевір, чи 7 строго не дорівнює "7".
  // Oleksii: Перевір, чи 8 більше за 7.
  // Alex: Перевір, чи 9 менше за 10.
}

// Third block:
{
  // Axen: Перевір, чи 11 більше або дорівнює 10.
  // Bogdan: Перевір, чи 12 менше або дорівнює 13.
  // Serhii: Перевір, чи 14 дорівнює 14.
  // Michael: Перевір, чи 15 не дорівнює 16.
  // Mikita: Перевір, чи 17 строго дорівнює "17".
  // Oleksii: Перевір, чи 18 строго не дорівнює "18".
  // Alex: Перевір, чи 19 більше за 18.
}
