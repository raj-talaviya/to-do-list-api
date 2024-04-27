var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller')

//user login and logout
router.post("/userlogin",user.userlogin);
router.get("/userlogout",user.userlogout);


router.post("/updatetask2/:id",user.updatetask2)
router.get("/viewtask2",user.viewtask2)

module.exports = router;
