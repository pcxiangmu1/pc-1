var express = require('express');
var router = express.Router();

//用户业务逻辑处理对象
const UserService=require("../services/user/user-services.js");

/* GET users listing. */
router.get('/', function(req, res, next){//mongoosejs.com/ {
  res.send('respond with a resource');
});

//登录：完整路径"/api/users/login"
router.post("/login", UserService.login);

//注册：完整路径"/api/users/register"
router.post("/register", UserService.register);

//注销：完整路径"/api/users/register"
router.get("/register", UserService.register);

module.exports = router;
