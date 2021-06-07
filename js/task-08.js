// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

// const inputNumber = document.querySelector('[type="number"]');
// const renderbtn = document.querySelector('[data-action="render"]');
// const destroybtn = document.querySelector('[data-action="destroy"]');
// const divBoxes = document.querySelector('#boxes');
// const createBoxes = (amount) => {
//     boxes.innerHTML = '';
//     const num = number.value;
//     const items = [];
//     for (let i = 1; i <= num; i += 1) {
//         const createDivElem = document.createElement('div');

//         createDivElem.style.backgroundColor = randomColorRGB();
//         createDivElem.style.width = (i * 10) + 30 + 'px';
//         createDivElem.style.height = (i * 10) + 30 + 'px';

//         items.push(createDivElem);
//     }
//     return items;
// }
// const elements = items.map(createBoxes)
//     inputNumber.append(...elements);
    



    