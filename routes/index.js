var express = require('express');
var router = express.Router();
var admin = require('../controller/admincontroller')

router.post('/admin',admin.admin);
router.post('/adminlogin',admin.adminlogin);
router.get('/adminlogout',admin.adminlogout);


router.post("/adduser",admin.adduser);
router.post("/updateuser/:id",admin.updateuser);
router.get("/deleteuser/:id",admin.deleteuser);
router.get("/viewuser",admin.viewuser);


router.post("/addtask",admin.addtask);
router.post("/updatetask/:id",admin.updatetask);
router.get("/deletetask/:id",admin.deletetask);
router.get("/viewtask",admin.viewtask);

module.exports = router;
