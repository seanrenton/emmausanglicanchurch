var mongoose = require('mongoose');


var eventSchema = mongoose.Schema({
    name : {type : String, required : true},

    date : {type : String, required : true},

    time : {type : String, required : true},

    volunteers : [{type : mongoose.Schema.ObjectId, ref : "User"}]
})

module.exports = mongoose.model('Events', eventSchema);