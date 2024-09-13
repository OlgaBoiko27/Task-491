const consoleLog = document.querySelector('#consoleLog');

consoleLog.addEventListener('click', () => {
    alert('Служит для вывода информации в консоль')
});

const alertElement = document.querySelector('#alert');

alertElement.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна с кнопкой ОК')
});

const promptElement = document.querySelector('#prompt');

promptElement.addEventListener('click', () => {
    alert('Служит для вывода диалогового окна с полем для ввода текста')
});