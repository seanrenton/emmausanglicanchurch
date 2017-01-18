var mongoose = require('mongoose');



// Schema

var User = mongoose.Schema({

  firstname: {type : String, required : true},

  lastname: {type : String, required : true},

  email: {type : String, required : true, unique : true},

  password: {type : String, required : true},

  phone: {type : String, required : true},

  address: {type : String, required : true},
  
  role: {type : Number, default : 0},

  volunteer: [{
    type: mongoose.Schema.ObjectId,
    ref: 'Volunteer'
  }]

});


module.exports = mongoose.model('User', User);