import {renderProductsGrid} from "../javascripts/main.js";

let booksData = [];

fetch('8080/api/books')
    .then(response => response.json())
    .then(data => {
        booksData = data; // Ось тут масив з бекенду зберігається у змінну
        console.log('Отримані книги:', booksData); // Можна перевірити у консолі
        // Тут можете викликати свою функцію для виводу
        renderProductsGrid(booksData); // Якщо вже маєте цю функцію
    })
    .catch(error => {
        console.error('Помилка при завантаженні книг:', error);
    });