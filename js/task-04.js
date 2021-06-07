// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]')
const decrementBtn = document.querySelector('[data-action="decrement"]')
const counter = document.querySelector('span')

const increment = () => {
    counterValue += 1;
    counter.textContent = counterValue;
}

const decrement = () => {
    counterValue -= 1;
    counter.textContent = counterValue;
}

incrementBtn.addEventListener('click', increment);
decrementBtn.addEventListener('click', decrement);

// 'этот вариант почему то не работает ((()))
// const counterValue = function ({name, invalue = 0, step = 1 } = {}) {
//     this.value = invalue;
//     this.step = step;
//     this.refs = this.getRefs(name);
//     this.bindEvents();
// };
// counterValue.prototype.getRefs = function (name) {
  
//     const refs = {};
//     refs.container = document.querySelector(name);
//     refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
//     refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
//     refs.value = refs.container.querySelector('span')
//     return refs;
// }
// counterValue.prototype.bindEvents = function () {
//     this.refs.incrementBtn.addEventListener('click', () => {
//         this.increment();
//         this.valueOfspan();
//     });
//     this.refs.decrementBtn.addEventListener('click', () => {
//         this.decrement();
//         this.valueOfspan();
//     });
// }
// counterValue.prototype.valueOfspan = function () {
//     this.refs.value.textContent = this.value;
// }

// counterValue.prototype.increment = function () {
//     this.value += this.step;
     
// }

// counterValue.prototype.decrement = function () {
//     this.value += this.step;
    
// }

// const counter = new counterValue({name: counter, step:  1});
// console.log(counter)

