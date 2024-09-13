const userText = prompt('Измените текст ссылки');
const userTextField = document.querySelector('a');
userTextField.textContent = userText;
console.log('Текст в ссылке изменён на', userText);