const express = require('express');
const router = express.Router();
const bookModel = require('../../models/books');


router.get('/all-books', async (req, res) => {
    const allBooks = await bookModel.find()
    const uniqueBookList = [];
    allBooks.forEach((bookData) => {
        const isBookAlreadyExists = uniqueBookList.find(book => book.title == bookData.title)
        if(!isBookAlreadyExists){
            uniqueBookList.push(bookData)
        }
    })
    return res.status(200).send({status: true, data: uniqueBookList})
})

router.get('/books', async (req, res) => {
    const query = req.query
    const bookList = await bookModel.find(query)
    const uniqueBookList = [];
    bookList.forEach((bookData) => {
        const isBookAlreadyExists = uniqueBookList.find(book => book.title == bookData.title)
        if(!isBookAlreadyExists){
            uniqueBookList.push(bookData)
        }
    })
    return res.status(200).send({status: true, data: uniqueBookList})
})

router.get('/book/details', async (req, res) => {
    const title = req.query.title
    const bookDetails = await bookModel.findOne({title: title})
    return res.status(200).send({status: true, data: bookDetails})
})

router.get('/authors', async (req, res) => {
    const uniqueAuthors = await bookModel.distinct('author')
    return res.status(200).send({status: true, data: uniqueAuthors})
})

router.get('/countries', async (req, res) => {
    const uniqueCountry = await bookModel.distinct('country')
    return res.status(200).send({status: true, data: uniqueCountry})
})
module.exports = router;