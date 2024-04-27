var mongoose = require('mongoose');

//admin login
var taskschema = new mongoose.Schema({
    username:{
        type:String
    },
    taskname:{
        type:String
    }
});

module.exports = mongoose.model("task",taskschema);