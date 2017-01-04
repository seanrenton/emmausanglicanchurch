var User = require('../models/users');

module.exports = {
  
  create : (req, res)=>{
    
    var newUser = new User(req.body);
    
    newUser.save((err, user)=>{
      if(err){
        return res.send(err)
      }
      
      res.send(user);
      
    })
  },
}