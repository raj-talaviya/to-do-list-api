var usermodel = require('../model/usermodel');
var taskmodel = require('../model/taskmodel');

var user_status = "";


//user login
exports.userlogin = async (req, res) => {
    var data = await usermodel.find({ "email": req.body.email });
    if (user_status == 0) {
        if (data.length == 1) {
            if(data[0].password==req.body.password){
                user_status = 1
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

//user logout
exports.userlogout = (req, res) => {
    user_status = 0;
    res.status(200).json({
        status: "User Logout"
    })
}


//view task
exports.viewtask2 = async (req, res) => {
    if(user_status==1){
        var data = await usermodel.find({"email":req.body.email})
        if(data.length>0){
            var get_task = await taskmodel.find({"username":data[0].name})
            if(get_task.length>0){
                res.status(200).json({
                    get_task
                })
            }
            else{
                res.status(200).json({
                    status:"task Not Added"
                })
            }
        }
        else{
            res.status(200).json({
                status:"Plzz Login"
            })
        }
    }
    else{
        res.status(200).json({
            status:"Plzz Login"
        })
    }
}

//task update
exports.updatetask2=async(req,res)=>{
    var id=req.params.id
    var data = await taskmodel.findByIdAndUpdate(id,req.body)
    res.status(200).json({
        status:"task Update",
        data
    })
}