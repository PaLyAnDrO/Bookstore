import express from 'express';
var router = express.Router();
import {getBooks} from "../mysql.js";

router.get('/api/books', async (req, res) => {
    const sort = req.query.sort;

    let books = '';

    switch (sort) {
        case 'price_asc':
            books = await getBooksSortedBy('price', 'ASC');
            break;
        case 'price_desc':
            books = await getBooksSortedBy('price', 'DESC');
            break;
        case 'newest':
            books = await getBooksSortedBy('release_date', 'DESC');
            break;
        case 'rating':
        default:
            books = await getBooksSortedBy('rating', 'DESC');
            break;
    }

    res.json(books);
});


export default router;