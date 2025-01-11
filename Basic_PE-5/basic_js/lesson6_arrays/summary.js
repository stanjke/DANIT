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

//   const allCombinations = [
//     { x: true, y: true, "x && y": true && true, "x || y": true || true },
//     { x: true, y: false, "x && y": true && false, "x || y": true || false },
//     { x: false, y: true, "x && y": false && true, "x || y": false || true },
//     { x: false, y: false, "x && y": false && false, "x || y": false || false },
//   ];
//   console.table(allCombinations);

//   const logicalResults = [
//     { Operator: "&&", Description: "Logical AND", x: true, y: false, Result: true && false },
//     { Operator: "||", Description: "Logical OR", x: true, y: false, Result: true || false },
//     { Operator: "!", Description: "Logical NOT", x: true, Result: !true },
//     { Operator: "!!", Description: "Double Logical NOT", x: true, Result: !!true },
//   ];

//   console.table(logicalResults);

//   const typeConversions = [
//     { Original: false, ConvertedToNumber: Number(false), ConvertedToString: String(false), ConvertedToBoolean: Boolean(false) },
//     { Original: true, ConvertedToNumber: Number(true), ConvertedToString: String(true), ConvertedToBoolean: Boolean(true) },
//     { Original: 0, ConvertedToNumber: Number(0), ConvertedToString: String(0), ConvertedToBoolean: Boolean(0) },
//     { Original: 1, ConvertedToNumber: Number(1), ConvertedToString: String(1), ConvertedToBoolean: Boolean(1) },
//     { Original: "0", ConvertedToNumber: Number("0"), ConvertedToString: String("0"), ConvertedToBoolean: Boolean("0") },
//     { Original: "000", ConvertedToNumber: Number("000"), ConvertedToString: String("000"), ConvertedToBoolean: Boolean("000") },
//     { Original: "1", ConvertedToNumber: Number("1"), ConvertedToString: String("1"), ConvertedToBoolean: Boolean("1") },
//     { Original: NaN, ConvertedToNumber: Number(NaN), ConvertedToString: String(NaN), ConvertedToBoolean: Boolean(NaN) },
//     { Original: Infinity, ConvertedToNumber: Number(Infinity), ConvertedToString: String(Infinity), ConvertedToBoolean: Boolean(Infinity) },
//     { Original: -Infinity, ConvertedToNumber: Number(-Infinity), ConvertedToString: String(-Infinity), ConvertedToBoolean: Boolean(-Infinity) },
//     { Original: "", ConvertedToNumber: Number(""), ConvertedToString: String(""), ConvertedToBoolean: Boolean("") },
//     { Original: "20", ConvertedToNumber: Number("20"), ConvertedToString: String("20"), ConvertedToBoolean: Boolean("20") },
//     { Original: "twenty", ConvertedToNumber: Number("twenty"), ConvertedToString: String("twenty"), ConvertedToBoolean: Boolean("twenty") },
//   ];

//   console.table(typeConversions);
// }

//DATA TYPES:
// 1. string - "some text";
// 2. number - 1111;
// 3. boolean - true / false;

let a = 2;
let b = 2;

console.log(a > b); // false
console.log(a < b); // true
console.log(a == b); // false
console.log(a != b); // true
console.log(a < b); // false |

// >
// <
// ==
// ===
// >=
// <=
// >==
// <==
// !=
// !==
