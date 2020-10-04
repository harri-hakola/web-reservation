const express = require('express');

const router = express.Router();

router.get('/Posts', (req, res) => {
    res.send('We are at posts');
});


module.exports = router;