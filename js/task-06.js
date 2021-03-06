// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Введи 6 символов"
// />
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid .{
//   border-color: #f44336;
// }

const input = document.getElementById('validation-input');
let totalLenght = input.getAttribute('data-length');
const totalNumberLength = Number.parseInt(totalLenght);
 console.log(totalNumberLength);
input.addEventListener("focus", event => {
    input.style.display = 'block '
});
input.addEventListener('blur', (event) => {
    const valueIn = event.currentTarget.value.length;
   
    if (valueIn === totalNumberLength) {
         event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
       
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
        
    }
 
})
