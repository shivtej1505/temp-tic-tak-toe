var express = require('express');
var router = express.Router();

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  const fs = require('fs');
  let jsonData = (fs.readFileSync('ticTacToe.json', 'utf-8'));
    res.json(jsonData);
});

module.exports = router;
