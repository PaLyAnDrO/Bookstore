import express from 'express';
var router = express.Router();
import {getBooks, getGenres} from "../mysql.js";
import {renderGenres, renderProductsGrid} from "../public/javascripts/main.js";

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/books', async (req, res) => {
  const books = await getBooks();
  const genres = await getGenres();
  res.render('books', {
    booksHTML: renderProductsGrid(books),
    genresHTML: renderGenres(genres)
  }); // передаємо масив у шаблон EJS
});

router.get('/registration', async (req, res) => {
  res.render('registration', { title: 'Log in' });
});

export default router;
