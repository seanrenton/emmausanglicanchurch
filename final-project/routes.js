var Users = require('./controllers/userCtrl');

module.exports = (app)=>{
  
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'});
  });
  
  app.post('/api/users', Users.create);
  
  
}