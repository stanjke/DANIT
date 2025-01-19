// Функція — це блок коду, який виконує певну дію. Функції дозволяють використовувати код багаторазово.

// Приклад створення функцій в JavaScript

function sayHello() {
  console.log("Hello!");
}

// Виклик функції:

sayHello(1); // Hello!

// Завдання 1: Створення функції
// -Напишіть функцію hello, яка виводить "Привіт, друзі!".
// -Викличте функцію 3 рази.

// Функції з параметрами:
// Функції можуть приймати параметри. Параметри — це змінні, які визначаються в дужках функції.

// Приклад функції з параметрами:

function sayGoodbye(name) {
  console.log("Goodbye, " + name + "!");
}

sayGoodbye("John"); // Goodbye, John!

// Завдання 2: Функція з параметром

// -Створіть функцію додай, яка приймає два числа та виводить їх суму.
// -Викличте функцію з різними числами.

// Повернення значення з функції:
// Функція може не лише виконувати дію, але й повертати результат для подальшого використання.
// Ця поведінка досягається за допомогою ключового слова return.

// Приклад функції, яка повертає значення:

function returnNothing() {
  return;
}

const returnResult = returnNothing();
console.log(returnResult); // undefined

function sum(a, b) {
  return a + b;
}

let sumResult = sum(1, 2);
console.log(sumResult); // 3

// Завдання 3: Повернення значення

// -Напишіть функцію мнодення, яка приймає два числа та повертає їх добуток.
// -Збережіть результат у змінній та виведіть його.

// Завдання 4

// - Створити об'єкт user з властивостями name, age, hobby.
// - Напишіть функцію showUser, яка виводить властивості об'єкта user.
// - Напишіть функцію showHobbies, яка виводить властивість hobby об'єкта user.
// - Напишіть функцію updateHobby, яка оновлює властивість hobby об'єкта user.

const user = {
  name: "John",
  age: 18,
  hobby: ["football", "reading", "playing computer"],
};

const user2 = {
  name: "Ivan",
  age: 20,
  hobby: ["football", "ski", "fitness"],
};

function showUser(user) {
  console.log(user);
}

function showHobbies(user) {
  if (!user.hobby) {
    console.log(user.name + " has no hobbies!");
    return;
  }
  if (user.hobby) {
    user.hobby.forEach((hobby) => {
      console.log(user.name + " likes " + hobby);
    });

    console.log(user.name + " has " + user.hobby.length + " hobbies");
  }
}

function updateHobby(user, newHobby) {
  if (!user.hobby) {
    user.hobby = [];
  }
  user.hobby.push(newHobby);
  console.log(`${newHobby} додано до списку хобі ${user.name}.`);
}

updateHobby(user, "cycling");
showHobbies(user);
