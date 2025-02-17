### **План уроку: Масиви в JavaScript**

---

#### **Мета уроку:**
Ознайомити дітей із масивами у JavaScript, їх основними властивостями, особливостями та способами використання. Показати, як створювати, змінювати та перебирати масиви. Дати учням кілька простих практичних завдань для закріплення знань.

---

### **1. Що таке масиви?**
- **Визначення:** Масив — це структура даних, яка дозволяє зберігати кілька значень в одній змінній.
- **Приклад:**  
  ```javascript
  let fruits = ["яблуко", "банан", "груша"]
  ```
- Масиви зберігають дані у вигляді списку, де кожному елементу присвоюється індекс, починаючи з 0.

## Табличка для прикладу:
| Індекс | Значення |
|-------:|:--------|
| 0      | яблуко  |
| 1      | банан   |
| 2      | груша   |


### **2. Особливості масивів**

###    Масиви можуть містити дані різних типів:
  ```javascript
  let mix = [42, "Привіт", true];
  ```


### Динамічна зміна розміру:
#### Ви можете додавати або видаляти елементи:

  ```javascript
    let numbers = [1, 2, 3];
    numbers.push(4); // Додаємо 4
    numbers.pop(); // Видаляємо останній елемент
  ```

#### Перевірка, чи це масив:


  ```javascript
    console.log(Array.isArray([1, 2, 3])); // true
    console.log(Array.isArray("Привіт")); // false
  ```


