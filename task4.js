// Реалізуйте програму, яка відслідковуватиме зміну розміру (ширини і висоти) вікна браузера
//  і виводитиме на поточну сторінку при її розтязі/стисканні відповідні значення.
// Для запуску використовувати Live Server
// Для перевірки node tests/task4.test.js

const width = document.getElementById('widthValue')
const height = document.getElementById('heightValue')

const updateInfo = () => {
    width.innerHTML = `${window.innerWidth}`;
    height.innerHTML = `${window.innerHeight}`;
}
window.addEventListener('resize', updateInfo)

updateInfo();