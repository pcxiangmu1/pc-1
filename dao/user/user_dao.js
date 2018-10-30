//引入"User"的Model
const{User}=require("../model/model.js");


//用户数据访问处理
const UserDao={
	//保存用户的数据
   save(userinfo){
   	//根据model创建文档（document）
      const user=new User(userinfo);
    //保存到集合中,并返回保存结果的Promise
   return user.save();
   },
   //用户查找数据
   find(condition){
     return User.find(condition);
   }

}

module.exports=UserDao;