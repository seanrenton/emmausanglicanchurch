var mongoose = require('mongoose');



// Schema

var userSchema = mongoose.Schema({

  firstname: String,

  lastname: String,

  email: String,

  password: String

});


module.exports = mongoose.model('User', userSchema);