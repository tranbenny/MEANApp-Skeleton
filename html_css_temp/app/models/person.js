// model to defines the db models
var mongoose = require('mongoose');

module.exports = mongoose.model('Person', {
    name : {type : String, default: ''} 
});