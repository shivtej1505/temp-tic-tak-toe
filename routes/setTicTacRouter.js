var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  var model=req.query;
  const fs = require('fs');
  let jsonData = JSON.parse(fs.readFileSync('ticTacToe.json', 'utf-8'));
  jsonData[Number(model.x)][Number(model.y)]=Number(model.user);
  let data = JSON.stringify(jsonData);  
  fs.writeFileSync('ticTacToe.json', data);  
   res.send({success:true});
});

module.exports = router;
