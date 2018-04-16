const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <html>
        <head>
            <title>Shri 2018</title>
        </head>
        <h1>Hello</h1>
        </html>
    `);
});

module.exports = router;
