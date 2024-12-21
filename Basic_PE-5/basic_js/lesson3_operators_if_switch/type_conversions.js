const typeConversions = [
  { Original: false, ConvertedToNumber: Number(false), ConvertedToString: String(false), ConvertedToBoolean: Boolean(false) },
  { Original: true, ConvertedToNumber: Number(true), ConvertedToString: String(true), ConvertedToBoolean: Boolean(true) },
  { Original: 0, ConvertedToNumber: Number(0), ConvertedToString: String(0), ConvertedToBoolean: Boolean(0) },
  { Original: 1, ConvertedToNumber: Number(1), ConvertedToString: String(1), ConvertedToBoolean: Boolean(1) },
  { Original: "0", ConvertedToNumber: Number("0"), ConvertedToString: String("0"), ConvertedToBoolean: Boolean("0") },
  { Original: "000", ConvertedToNumber: Number("000"), ConvertedToString: String("000"), ConvertedToBoolean: Boolean("000") },
  { Original: "1", ConvertedToNumber: Number("1"), ConvertedToString: String("1"), ConvertedToBoolean: Boolean("1") },
  { Original: NaN, ConvertedToNumber: Number(NaN), ConvertedToString: String(NaN), ConvertedToBoolean: Boolean(NaN) },
  { Original: Infinity, ConvertedToNumber: Number(Infinity), ConvertedToString: String(Infinity), ConvertedToBoolean: Boolean(Infinity) },
  { Original: -Infinity, ConvertedToNumber: Number(-Infinity), ConvertedToString: String(-Infinity), ConvertedToBoolean: Boolean(-Infinity) },
  { Original: "", ConvertedToNumber: Number(""), ConvertedToString: String(""), ConvertedToBoolean: Boolean("") },
  { Original: "20", ConvertedToNumber: Number("20"), ConvertedToString: String("20"), ConvertedToBoolean: Boolean("20") },
  { Original: "twenty", ConvertedToNumber: Number("twenty"), ConvertedToString: String("twenty"), ConvertedToBoolean: Boolean("twenty") },
];

console.table(typeConversions);
