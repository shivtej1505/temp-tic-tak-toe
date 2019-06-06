const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
  
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});
router.get('/player/1',function(req,res){
   
let data = fs.readFileSync(path.join(__dirname+'/player.html'));
    if(data)
    res.send(data.replace('param1Place',ticTacToe));
   
    //__dirname : It will resolve to your project folder.
  });

router.get('/setTic',function(req,res){
    var model=req.query;
    res.send(JSON.stringify(model));
});


//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');