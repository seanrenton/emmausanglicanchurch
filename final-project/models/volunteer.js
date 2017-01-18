var mongoose = require('mongoose');


var volunteerSchema = mongoose.Schema({
    name: String,

})

module.exports = mongoose.model('Volunteer', volunteerSchema);