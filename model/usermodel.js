var mongoose = require('mongoose');

//user login
var adminschema = new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
});

module.exports = mongoose.model("user",adminschema);