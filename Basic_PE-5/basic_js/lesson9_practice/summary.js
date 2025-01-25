// boolean true / false
// string "" / '' / `` - back ticks
// number 3123
// object
// undefined

//typeof()

function increaceNumberByOne(number) {
  if (typeof number === "number") {
    console.log(number + 1);
  }
}

increaceNumberByOne(2);
increaceNumberByOne(10);
increaceNumberByOne(20);
increaceNumberByOne(30);

// console.log(typeof 4);
// console.log(typeof "4");
// console.log(typeof true);
// console.log(typeof []);
// console.log(typeof {});
// console.log(typeof increaceNumberByOne);

function getFirstArrayElement(array) {
  console.log(array[0]);
}

getFirstArrayElement(["Sashko", "Axen"]);
getFirstArrayElement([1, 3, 123, 12, 3, 12312]);
