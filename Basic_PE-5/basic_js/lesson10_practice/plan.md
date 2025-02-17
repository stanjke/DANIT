## План написання гри

1. **Створення об'єкта (квадрата)**
   - Створити елемент `div` для червоного квадрата.
   - Додати квадрат на сторінку.

2. **Функція руху квадрата**
   - Написати функцію `moveSquare`, яка буде змінювати координати квадрата і оновлювати його положення на сторінці.
   - Додати логіку для зміни напрямку руху при досягненні меж вікна.

3. **Функція отримання випадкового кольору**
   - Написати функцію `getRandomColor`, яка буде повертати випадкове значення кольору.

4. **Функція скидання гри**
   - Написати функцію `reset`, яка буде скидати координати квадрата, напрямок руху і лічильник кліків.

5. **Функція зміни напрямку руху**
   - Написати функцію для отримання випадкового напрямку руху.

6. **Функція обробки кліків по квадрату**
   - Написати обробник події `click` для квадрата.
   - Збільшувати лічильник кліків, змінювати колір квадрата і напрямок руху при кожному кліку.
   - Перевіряти, чи досяг лічильник 10 кліків, і показувати повідомлення про перемогу з можливістю почати гру заново.

7. **Функції для запуску і зупинки руху квадрата**
   - Написати обробники подій `mouseenter` і `mouseleave` для квадрата.
   - Запускати рух квадрата при наведенні миші і зупиняти при виході миші.

8. **Додавання квадрата на сторінку**
   - Додати квадрат на сторінку після всіх налаштувань і функцій.

## Приблизний порядок функцій в коді

1. Створення об'єкта (квадрата)
2. Функція руху квадрата
3. Функція отримання випадкового кольору
4. Функція скидання гри
5. Функція зміни напрямку руху
6. Функція обробки кліків по квадрату
7. Функції для запуску і зупинки руху квадрата
8. Додавання квадрата на сторінку