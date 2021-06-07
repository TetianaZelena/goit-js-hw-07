// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

// <input type="text" placeholder="Ваше имя?" id="name-input" />
// <h1>Привет, <span id="name-output">незнакомец</span>!</h1>


const inputEvents = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

function onInputChage(event) {
    
    if (event.currentTarget.value === '') {
      outputValue.textContent ='незнакомец';
    }
    else{
        outputValue.textContent = event.currentTarget.value;
    } }


inputEvents.addEventListener('input', onInputChage);

