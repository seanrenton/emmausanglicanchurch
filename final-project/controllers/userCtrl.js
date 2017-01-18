var User = require('../models/users'),
    bcrypt = require('bcryptjs');

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
  },
  login : (req, res)=>{
    if(req.params.id){
      User.findOne({email : req.body.email.toLowerCase()}, (err, user)=>{
        if(err){
          return res.send(err)
        }
        if(!user){
          return res.send('No user email found!')
        }
        bcrypt.compare(req.body.password, user.password, (err, matched)=>{
          if(err){
            return res.send(err)
          }
          if(!matched){
            res.send('Invalid password')
          }
          req.session.userID = user._id

          res.send(user);
        })
      })
    }
  }

}
