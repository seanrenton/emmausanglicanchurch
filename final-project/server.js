var express = require('express'),
    mongoose = require('mongoose'),
    io = require('socket.io'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    Routes = require('./routes'),
    PORT = process.env.PORT || 3000,
    sessions = require('client-sessions')({
      cookieName : 'user',
      secret : '',
      requestKey : 'session',
      cookie : {
        httpOnly : true
      }
    })

mongoose.connect('mongodb://localhost/EmmausAnglican');


var app = express();


// Middleware

app.use(
express.static('public'),
morgan,
bodyParser.json(),
bodyParser.urlencoded({extended : true}),
(req, res, next)=>{
  console.log(`SESSION : `, 
  `${req.session.uid}`);
  next()
});

// Routes

Routes(app);

app.listen(PORT, ()=>{
  console.log(`Server running on ${PORT}`);
});