const express = require('express')
const router = express.Router()

router.use("/books", require('./routes/books'))


module.exports = router