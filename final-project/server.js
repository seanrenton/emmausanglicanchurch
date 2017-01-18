var express = require('express'),
    mongoose = require('mongoose'),
    io = require('socket.io'),
    morgan = require('morgan')('dev'),
    secretKey = require('./config'),
    bodyParser = require('body-parser'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 3000,
    sessions = require('client-sessions')({
      cookieName : 'user',
      secret : 'secretKey',
      requestKey : 'session',
      cookie : {
        httpOnly : true
      }
    });



mongoose.connect('mongodb://localhost/emmaus');


var app = express();


// Middleware

app.use(
express.static('public'),
morgan,
bodyParser.json(),
bodyParser.urlencoded({extended : true}),
sessions
);

// Routes

Routes(app);

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
});