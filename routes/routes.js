var userDomain = require('./controllers/userCtrl');


module.exports = (app) =>{
  app.post('/api/users', userDomain.create);
  
  
  
  
  app.get('/', (req, res)=>{
    res.sendFile('index.html', {root : './public/html'})
  })
}