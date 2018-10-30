//用户"业务逻辑层"的处理

const Userservices={
	//登录
	login(req,res,next){

	},
	//注册
	register(req,res,next){
		//从请求中获取注册用户的用户名，密码，email
		//get请求方式获取数据
       const {username,passwird,email}=req.query；
      /* //POST请求方式获取数据
       const {username,password,email}=req.body;*/

      //用户密码的加密处理
      //................. 

      //将用户注册信息发送到数据访问层处理
      //...............

	},
    //检测用户名是否存在
	check(req,res,next){

	},
	//注销
	logout(req,res,next){

	}
}

module.exports=User;