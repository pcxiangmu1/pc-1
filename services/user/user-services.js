//引入"UserDao"依赖
const UserDao=require("../../dao/user/user_dao.js");

//用户"业务逻辑层"的处理

const Userservice={
	//登录
	login(req,res,next){ 
     //post请求方式获取数据
     const {username,password}=req.body;
     //数据访问：根据用户名查找用户信息
      UserDao.find({username})
              .then((data)=>{
              	//判断密码
              	console.log(data);

              })
              .catch();
	},
	//注册
	register(req,res,next){
	//从请求找那个获取注册用户的用户名，密码，email
	//get请求方式获取数据
	/*const {username,password,email}=req.query;*/
	//post请求方式获取数据
	const{username,password,email}=req.body;

	//用户密码加密处理
	//.................

	//将用户注册信息发送到数据访问层
    UserDao.save({username,password,email})
              .then((data)=>{
                   console.log(data);
                   res.json({res_code:1,res_error:"",res_body:{status:1,message:"success",data:{username:data.username}}});
              })
              .catch((err)=>{
              	console.log(err);
              	res.json({res_code:1,res_error:"",res_body:{status:0,message:"failed:"+err,data:{}}});
              });


	},
    //检测用户名是否存在
	check(){

	},
	//注销
	logout(){

	}
}

module.exports=Userservice;