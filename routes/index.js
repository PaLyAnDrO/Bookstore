import express from 'express';
var router = express.Router();
import {getBooks} from "../mysql.js";
import {renderProductsGrid} from "../public/javascripts/main.js";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', async (req, res) => {
  const books = await getBooks();
  res.render('books', {
    booksHTML: renderProductsGrid(books) // Рендериш на сервері — передаєш готовий HTML
  }); // передаємо масив у шаблон EJS
});

export default router;
