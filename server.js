var express = require('express'), 
    mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    morgan = require('morgan'),
    port = process.env.PORT || 3000,
    app = express(); 

app.use( express.static('public') ); 


app.listen(port, ()=>{
  console.log(`Server running on ${port}!`);
});