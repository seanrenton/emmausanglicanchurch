var Users = require('../models/users.js');

module.exports = {
  
  create : (req, res) =>{
    
    var newUser = new Users(req.body);
    
    newUser.save((err, users)=>{
      res.send(users)
    });
  },
  
  
}