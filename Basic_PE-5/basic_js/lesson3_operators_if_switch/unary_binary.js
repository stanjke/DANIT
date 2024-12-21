// Unary operators

// Unary plus (+) - converts an operand into a number
// {
//   let x = "1";
//   x = +x; // now x is a number 1
//   console.log("Unary plus (+) - converts an operand into a number: ", x);
// }

// Unary minus (-) - converts an operand into a number and negates after
// {
//   let y = "2";
//   y = -y; // now y is a number -2
//   console.log("Unary minus (-) - converts an operand into a number and negates after: ", y);
// }

// Increment (++) postfix notation - increases a number by 1
// {
//   let a = 1;
//   console.log("value is retrieved only after the operation is done: ", a++);
//   a++;
//   console.log("Increment (++) - increases a number by 1: ", a);
// }

// Increment (++) prefix notation - increases a number by 1
// {
//   let a1 = 1;
//   console.log("value is retrieved immediately: ", ++a1);
//   ++a1;
//   console.log("Increment (++) prefix notation - increases a number by 1: ", a1);
// }

// Decrement (--) postfix notation - decreases a number by 1
// {
//   let b = 2;
//   b--;
//   console.log("Decrement (--) - decreases a number by 1: ", b);
// }

// Decrement (--) prefix notation - decreases a number by 1
// {
//   let b1 = 2;
//   --b1;
//   console.log("Decrement (--) prefix notation - decreases a number by 1: ", b1);
// }

// Unary operators table
// {
//   const unaryResults = [
//     { Operator: "+", Description: "Unary plus", Operand: '"1"', Result: +"1" },
//     { Operator: "-", Description: "Unary minus", Operand: '"2"', Result: -"2" },
//     {
//       Operator: "++ (postfix)",
//       Description: "Increment postfix",
//       Operand: "1",
//       Result: (() => {
//         let a = 1;
//         a++;
//         return a;
//       })(),
//     },
//     {
//       Operator: "++ (prefix)",
//       Description: "Increment prefix",
//       Operand: "1",
//       Result: (() => {
//         let a1 = 1;
//         return ++a1;
//       })(),
//     },
//     {
//       Operator: "-- (postfix)",
//       Description: "Decrement postfix",
//       Operand: "2",
//       Result: (() => {
//         let b = 2;
//         b--;
//         return b;
//       })(),
//     },
//     {
//       Operator: "-- (prefix)",
//       Description: "Decrement prefix",
//       Operand: "2",
//       Result: (() => {
//         let b1 = 2;
//         return --b1;
//       })(),
//     },
//   ];

//   console.table(unaryResults);
// }

// Task block

// First block:
{
  // Axen: Перетвори рядок "5" на від'ємне число.
  // Bogdan: Збiльш число 2 на 1 i одразу виведи результат.
  // Serhii: Зменш число 8 на 1 i одразу виведи результат.
  // Michael: Перетвори рядок "42" на число.
  // Mikita: Збiльш число 7 на 1.
  // Oleksii: Зменш число 6 на 1.
  // Alex: Перетвори рядок "7.5" на число.
}

// Second block:
{
  // Axen: Збiльш число 3 на 1.
  // Bogdan: Зменш число 3 на 1 i одразу виведи результат.
  // Serhii: Перетвори рядок "-3" на додатне число.
  // Michael: Збiльш число 1 на 1 i одразу виведи результат.
  // Mikita: Зменш число 2 на 1.
  // Oleksii: Перетвори рядок "100" на число.
  // Alex: Збiльш число 5 на 1.
}

// Third block:
{
  // Axen: Зменш число 5 на 1.
  // Bogdan: Перетвори рядок "0" на число.
  // Serhii: Збiльш число 7 на 1 i одразу виведи результат.
  // Michael: Зменш число 7 на 1.
  // Mikita: Перетвори рядок "10" на число.
  // Oleksii: Збiльш число 4 на 1 i одразу виведи результат.
  // Alex: Зменш число 8 на 1 i одразу виведи результат.
}
