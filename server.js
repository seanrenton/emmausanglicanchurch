var express = require('express'); 
var port = process.env.PORT || 3000;

var app = express(); 

app.get('/', (req, res) =>{
  res.send('<h1> Welcome to the home page!</h1>');
})


  


app.use( express.static('public') ); 


app.listen(port, ()=>{
  console.log(`Server running on ${port}!`);
});