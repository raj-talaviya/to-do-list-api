var adminmodel = require('../model/adminmodel');
var taskmodel = require('../model/taskmodel');
var usermodel = require('../model/usermodel');

var admin_status = "";

//admin data insert
exports.admin = async (req, res) => {
    var data = await adminmodel.create(req.body);
    res.status(200).json({
        status: "data insert",
        data
    })
}

//admin login
exports.adminlogin = async (req, res) => {
    var data = await adminmodel.find({ "email": req.body.email });
    if (admin_status == 0) {
        if (data.length == 1) {
            if(data[0].password==req.body.password){
                admin_status = 1
                res.status(200).json({
                    status: "Login Success"
                })
            }
            else {
                res.status(200).json({
                    status: "Check Your Email And Password"
                })
            }
        } else {
            res.status(200).json({
                status: "Check Your Email And Password"
            })
        }
    } else {
        res.status(200).json({
            status: "User Is Already Login"
        })
    }
}

//admin logout
exports.adminlogout = (req, res) => {
    admin_status = 0;
    res.status(200).json({
        status: "User Logout"
    })
}


//add user
exports.adduser = async(req,res) => {
    var data = await usermodel.create(req.body);
    res.status(200).json({
        status:"user add",
        data
    })
}

//user update
exports.updateuser = async(req,res)=>{
    var id = req.params.id
    var data = await usermodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"user Update",
        data
    })
}

//user delete
exports.deleteuser = async(req,res)=>{
    var id = req.params.id
    var data = await usermodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"user Delete",
        data
    })
}

//view user
exports.viewuser = async (req, res) => {
    var data = await usermodel.find();
    res.status(200).json({
        data
    })
}

//add task
exports.addtask = async (req, res) => {
    var data = await taskmodel.create(req.body);
    res.status(200).json({
        status: "Add task",
        data
    })
}

//task update
exports.updatetask=async(req,res)=>{
    var id=req.params.id
    var data = await taskmodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"task Update",
        data
    })
}

//task delete
exports.deletetask=async(req,res)=>{
    var id=req.params.id
    var data = await taskmodel.findByIdAndDelete(id)
    res.status(200).json({
        status:"task Delete",
        data
    })
}

//view task
exports.viewtask = async (req, res) => {
    var data = await taskmodel.find();
    res.status(200).json({
        data
    })
}

