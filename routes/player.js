var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/getData', function(req, res, next) {
    // const fs = require('fs');

    // let rawdata = fs.readFileSync('ticTacToe.json');  
    // let ticTacToe = JSON.parse(rawdata);  
    res.json({ username: 'Flavio' })

});

module.exports = router;
