// Реалізуйте програму, яка по натисканню на кнопку видалятиме обраний елемент випадаючого списку. 
// Можуть видалятися всі елементи в будь-якому порядку.
// Список з елементами знаходиться у файлі index.html
// Для запуску використовувати Live Server
// Для перевірки виконання виконати команду node tests/task3.test.js

const mySelect = document.getElementById('dropdown')
const deleteBtn = document.getElementById('deleteButton')

deleteBtn.addEventListener('click', () => {
    
    const selectedOption = mySelect.options[mySelect.selectedIndex]
    mySelect.removeChild(selectedOption);
})