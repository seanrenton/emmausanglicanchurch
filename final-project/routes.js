var Users = require('./controllers/userCtrl'),
    User = require('./models/users'),
    Middleware = require('./middleware');
    

module.exports = (app)=>{
  
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });

  app.get('/api/me', (req, res)=>{
    User.findOne({_id : req.session.userID}, (err, user)=>{
      res.send(user)
    })
  })
  app.get('/logout', (req, res)=>{
    req.session.reset();

    res.redirect('/')
  });
  
  app.post('/api/users', Users.create);

  app.get('/api/users', Middleware.isLoggedIn, Users.get);

  app.post('/api/users/login', Users.login);

    
}