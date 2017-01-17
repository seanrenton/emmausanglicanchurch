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

  get : (req, res)=>{
    
    if(req.params.id){
      User.findOne({_id : req.params.id},
      (err, user)=>{
        if(err){
          return res.send(err)
        }
        if(user){
          res.send(user)
        }
        else{
          res.send({badThing : 'No User Found!'});
        }
      });
    }
    else{
      User.find({}, (err, users)=>{
        if(err){
          return res.send(err);
        }
          res.send(users);
      });
    }
  }

}
