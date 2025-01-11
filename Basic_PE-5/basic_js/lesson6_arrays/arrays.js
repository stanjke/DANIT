let name1 = "Bogdan";
let age1 = 11;
let surname1 = "Naumchuck";
let isAdult1 = false;
let hasKids1 = false;
let isPupple1 = true;

let bogdan = [name1, age1, surname1, isAdult1, hasKids1, isPupple1]; //object
// indexes    0        1      2          3        4          5

let name2 = "Alex";
let age2 = 12;
let surname2 = ["Al", "exxx"];
let isAdult2 = false;
let hasKids2 = false;
let isPupple2 = true;

let alex = [name2, age2, surname2, isAdult2, hasKids2, isPupple2];

let itClass = [bogdan, alex];

// TYPES:
// string;
// number;
// boolean;
// object;

// while () {}

let i = 0;

while (i <= alex.length - 1) {
  console.log(alex[i]);
  i++;
}
