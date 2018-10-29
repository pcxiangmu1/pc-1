
## pc-1
第一个项目




## 职位管理系统

>基于 Express +MongoDB 的后台职位管理系统

##  业务

1.用户注册
2.用户登录
3.注销
4.职位添加
5.职位修改
6.职位删除
7.职位查询

## 前后端分离

前端：
    UI
    将前端UI放置到 public目录下


 后端：

   services目录：业务逻辑层
   dao目录：数据访问层

API --CRUD
用户注册：
     URL:"/api/register"
     Method:"POST"
     Param:
        username
        password
        email
    Return:JSON
    {
    	res_code:1,
    	res_error:""
    	res_body:{
    	    data:{
    	     username:"kk"
            }
       }
    }
    用户登录：
         URL:"/api/users/login"
         Method:"post"
         Param:
              username
              password
          Return:JSON
             {
             	res_code:1,
             	res_error:""
             	res_body:{
                   status:1, --1 表示登录成功   0 表示登录失败
                   message:"success",
                   data:{
                      username:"xx"
                   }
                }
             }

   用户注销：
       URL:"/api/users/logout"
       Method:"POST"
       Param;
       Return:JSON
           {
	           	res_code:1,
	           	res_error:"",
	           	res_body:{
	           		status:1,
	           		message:"success"
	           	}
           }




生成验证码：
URL:"/api/captcha"
Method:"GET"
Return:JSON
{
	res_code:1,
	res_error:"",
	res_body:{
	   data:"<svg>.....</svg>"
  }
}
校验验证码：
	URL:"/api/captcha/verify"
	Method:"GET"
	Param:
	  code
	Return:JSON
		{
          res_code:1,
          res_error:""
          res_body:{
             valid:true
        }
     }