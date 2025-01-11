// Об'єкт це невпорядкована колекція властивостей виду "ключ: значення".

// Створення об'єкта:
// Літеральний спосіб:

// const emptyObject = {};

// const emptyArray = ["element1", "elemnt2"]; //0,1,2....

// console.log(emptyObject);
// console.log(emptyArray);

// {
const obj = {
  key: "is",
  number: 1,
  boolean: true,
  array: [1, 2, 3],
  object: {
    key: "Abrakadabra",
    firstName: "Bogdan",
    innerObj: {
      anything: 4,
      superInnerObject: {
        superInnerValue: "superInnerValue",
        superDuperInnerObject: {
          final: "years old",
        },
      },
    },
  },
};

const result = [obj.object.firstName, obj.key, obj.number + 11, obj.object.innerObj.superInnerObject.superDuperInnerObject.final];

console.log(result);

console.log(result[0] + " " + result[1] + " " + result[2] + " " + result[3]);

console.log("LIMIT: ", limit);

// console.log(obj.array[2] - obj.array[0]); //2

// obj.firstName = "John";
// obj.lastName = "Doe";

//   // Point notation:
//   {
//     console.group("Point notation:");
//     console.log(obj.key);
//     console.log(obj.number);
//     console.log(obj.boolean);
//     console.log(obj.array);
//     console.log(obj.object);
//     console.log(obj.firstName);
//     console.log(obj.lastName);
//     console.groupEnd();
//   }

//   // Bracket notation:
//   {
//     console.group("Bracket notation:");
//     console.log(obj["key"]);
//     console.log(obj["number"]);
//     console.log(obj["boolean"]);
//     console.log(obj["array"]);
//     console.log(obj["object"]);
//     console.log(obj["firstName"]);
//     console.log(obj["lastName"]);
//     console.groupEnd();
//   }

//   const objectWithExoticKeys = {
//     "": "empty string",
//     " ": "space",
//     "!": "exclamation mark",
//     1: "one",
//     1.1: "one point one",
//     "1 1": "one space one",
//     "1!": "one exclamation mark",
//     "1.1!": "one point one exclamation mark",
//     "1 1!": "one space one exclamation mark",
//   };

//   {
//     console.group("Exotic keys:");
//     console.log(objectWithExoticKeys[""]);
//     console.log(objectWithExoticKeys[" "]);
//     console.log(objectWithExoticKeys["!"]);
//     console.log(objectWithExoticKeys["1"]);
//     console.log(objectWithExoticKeys["1.1"]);
//     console.log(objectWithExoticKeys["1 1"]);
//     console.log(objectWithExoticKeys["1!"]);
//     console.log(objectWithExoticKeys["1.1!"]);
//     console.log(objectWithExoticKeys["1 1!"]);
//     console.groupEnd();
//   }

//   // Error will be occured:
//   // console.log(objectWithExoticKeys.1);
//   // console.log(objectWithExoticKeys.1.1);
//   // console.log(objectWithExoticKeys.1 1);
//   // console.log(objectWithExoticKeys.1!);
//   // console.log(objectWithExoticKeys.1.1!);
//   // console.log(objectWithExoticKeys.1 1!);

//   // Rediclarating object properties:
//   {
//     console.group("Rediclarating object properties:");
//     console.log(obj.key);
//     obj.key = "new value";
//     console.log(obj.key);
//     console.groupEnd();
//   }

//   // Deleting object properties:
//   {
//     console.group("Deleting object properties:");
//     console.log(obj.key);
//     delete obj.key;
//     // instead of obj.key = undefined;
//     console.log(obj.key);
//     console.groupEnd();
//   }

//   // Внутрішні атрибути об'єкта:
//   // Існує два типи властивостей об'єкта: data properties та accessor properties.

//   // Data properties:
//   {
//     // [[Configurable]] – визначає, чи можна перевизначити властивість або видалити її за допомогою оператора delete.
//     // [[Enumerable]] – показує, чи властивість може бути виведена у циклі for...in.
//     // [[Writable]] – визначає, чи можна змінювати значення властивості.
//     // [[Value]] – значення властивості.

//     // За замовчуванням, для усіх властивостей, визначених безпосередньо в об'єкті, атрибути
//     // [[Configurable]], [[Enumerable]] та [[Writable]] встановлені на true.
//     // Значення за замовчуванням для [[Value]] – undefined.

//     const dataObject = {
//       key: "value",
//     };

//     console.log(Object.getOwnPropertyDescriptor(dataObject, "key"));

//     // Для зміни будь-якого атрибута властивості використовується метод Object.defineProperty().
//     console.log(dataObject.key);

//     Object.defineProperty(dataObject, "key", {
//       writable: false,
//     });

//     dataObject.key = "new value"; // TypeError: Cannot assign to read only property 'key' of object '#<Object>'

//     // Ми можем створити нову властивість з вказаними атрибутами. По замовчуванню, всі атрибути встановлені на false.

//     Object.defineProperty(dataObject, "newKey", {
//       value: "new value",
//     });

//     console.log(Object.getOwnPropertyDescriptor(dataObject, "newKey"));

//     // Також ми можем використовувати метод Object.defineProperties() для визначення декількох властивостей одночасно.

//     Object.defineProperties(dataObject, {
//       newKey: {
//         value: "super new value",
//         configurable: true,
//         enumerable: true,
//         writable: true,
//       },
//       anotherNewKey: {
//         value: "another new value",
//         configurable: true,
//         enumerable: true,
//         writable: true,
//       },
//     });
//   }

//   // Accessor properties:// Object.keys():
//   // Властивість in:
//   // Оператор in повертає true, якщо властивість існує в об'єкті, інакше – false.

//   {
//     const obj = {
//       key: "value",
//     };

//     console.log("key" in obj); // true
//     console.log("newKey" in obj); // false
//   }

//   // Створення об'єкта з прототипом:
//   // Щоб створити об'єкт з прототипом, використовуйте метод Object.create():

//   {
//     const obj = {
//       key: "value",
//     };

//     const objWithPrototype = Object.create(obj);

//     console.log(objWithPrototype.key); // value
//   }

//   // Властивість Object.prototype.hasOwnProperty():
//   // Метод hasOwnProperty() повертає true, якщо властивість існує в об'єкті, інакше – false.
//   // Метод hasOwnProperty() не перевіряє властивості прототипу.

//   {
//     const obj = {
//       key: "value",
//     };

//     console.log(obj.hasOwnProperty("key")); // true

//     const objWithPrototype = Object.create(obj);

//     objWithPrototype.newKey = "new value";

//     console.log(objWithPrototype.hasOwnProperty("key")); // false
//     console.log(objWithPrototype.hasOwnProperty("newKey")); // true
//   }

//   // Цикл for...in
//   // Цей цикл використовується для перебору властивостей об'єкта.
//   // Властивість може бути перераховуваною якщо ії вбудована властивість enumerable встановлена в true.

//   {
//     const obj = {
//       key: "value",
//       number: 1,
//       boolean: true,
//       array: [1, 2, 3],
//       object: { key: "value" },
//     };

//     for (const key in obj) {
//       console.log(key, obj[key]);
//     }

//     // Цикл for...in також перераховує властивості прототипу.
//   }

//   // Методи для роботи з об'єктами:

//   {
//     // Метод Object.keys() повертає масив із властивостей об'єкта.
//     // Метод Object.keys() повертає тільки власні властивості об'єкта, не включаючи властивості прототипу.
//     const obj = {
//       key: "value",
//       number: 1,
//       boolean: true,
//     };

//     const keys = Object.keys(obj);

//     console.log(keys);

//     // Метод Object.values() повертає масив із значень властивостей об'єкта.
//     // Метод Object.values() повертає тільки значення власних властивостей об'єкта,
//     // не включаючи значення властивостей прототипу.
//     const values = Object.values(obj);

//     console.log(values);

//     // Метод Object.entries() повертає масив масивів, кожен з яких містить пару ключ-значення об'єкта.
//     // Метод Object.entries() повертає тільки пари ключ-значення власних властивостей об'єкта,
//     // не включаючи пари ключ-значення властивостей прототипу.

//     const entries = Object.entries(obj);

//     console.log(entries);
//   }

//   // Копіювання об'єктів:
//   {
//     // Щоб скопіювати об'єкт, ми можем використати метод Object.assign():
//     const sourceObject = {
//       key: "value",
//       number: 1,
//       boolean: true,
//       array: [1, 2, 3],
//       object: { key: "value" },
//     };

//     const targetObject = {};

//     Object.assign(targetObject, sourceObject);

//     console.log(targetObject);

//     // Іншим способом копіювання об'єктів є використання оператора spread:

//     const copiedObject = { ...sourceObject };

//     console.log(copiedObject);

//     // Обидва способи копіювання об'єктів копіюють тільки перший рівень вкладеності.
//     // Якщо об'єкт містить вкладені об'єкти, вони будуть посилатися на ті ж самі об'єкти в пам'яті.
//     // Щоб скопіювати об'єкт повністю, використовуйте метод JSON.parse(JSON.stringify()):

//     const deeplyCopiedObject = JSON.parse(JSON.stringify(sourceObject));

//     console.log(deeplyCopiedObject);
//   }
// }
