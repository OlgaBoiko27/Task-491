const inputField = document.querySelector('#inputField');
const doubleField = document.querySelector('#duplicateField');
const submitButton = document.querySelector('#submitButton');

inputField.addEventListener('input', function () {
    doubleField.textContent = inputField.value
})

submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    const inputValue = inputField.value;
    console.log(inputField.value);
    inputField.value = '';
    doubleField.textContent = '';
});