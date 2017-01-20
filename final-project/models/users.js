var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
const SALTY_BITS = 10;



// Schema

var User = mongoose.Schema({

  firstname: {type : String, required : true},

  lastname: {type : String, required : true},

  email: {type : String, required : true, unique : true},

  password: {type : String, required : true},

  phone: {type : String, required : true},

  address: {type : String, required : true},
  
  admin: {type : Boolean, default : false},

  volunteer: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Volunteer'
  }]

});

User.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')){
    return next();
  }
  bcrypt.genSalt(SALTY_BITS, (saltErr, salt)=>{
    if(saltErr){
      return next(saltErr);
    }
    console.info('SALT generated!', salt);

    bcrypt.hash(user.password, salt, (hashErr, hashedPassword)=>{
      if(hashErr){
        return next(hashErr);
      }

      user.password = hashedPassword;
      next();
    })
  })
})




module.exports = mongoose.model('User', User);