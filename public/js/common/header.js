function Header(){
   this.init();
}

//导航的HTML模板
Header.NavTemplate=`
 <div class="container">
   	 <nav class="navbar navbar-inverse ">
					    <div class="navbar-header">
					      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
					        <span class="sr-only">Toggle navigation</span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					        <span class="icon-bar"></span>
					      </button>
					      <a class="navbar-brand" href="#">职位管理系统</a>
					    </div>

					   
					    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					      <ul class="nav navbar-nav">
					        <li class="active"><a href="/">首页 <span class="sr-only">(current)</span></a></li>
					        <li><a href="/html/position.html">职位管理</a></li>
					      </ul>
                <ul class="nav navbar-nav navbar-right">
					         <li data-toggle="modal" data-target="#loginModal"><a href="#">登录</a></li>
					        <li data-toggle="modal" data-target="#regModal"><a href="#">注册</a></li> 
					      </ul>
                 <ul class="nav navbar-nav navbar-right hidden  login-success">
                   <li><a href="#">欢迎：</a></li>
                  <li><a href="javascript:void(0);" class="link-logout">注销</a></li> 
                </ul>

					    </div>

                    </nav>
   </div>`;



$.extend(Header.prototype,{
	//初始化
	init(){
		this.createDom();
		this.loadUser();
		this.addListener();
	},
    //创建DOM
    createDom(){
    	$("header").html(Header.NavTemplate);
    },
    //加载登录成功的用户信息
    loadUser(){
    //从sessionStorage中读取登陆成功的用户信息
    const user=sessionStorage.username;
     if(user){  //存在，说明登陆成功
     	$(".login-success").removeClass("hidden").prev("ul").remove();
        $(".login-success a:first").html("欢迎："+user);
     }else{   //不存在加载登录注册的模态框
     	this.createModal();
     }
    },

   //创建登录和注册模态框
   createModal(){
   	  new LoginModal();
   	  new RegisterModal();
   },
   //注册事件监听
   addListener(){
   	$(".link-logout").on("click",this.logoutHandler);
   },
   //注销处理
   logoutHandler(){
   	   sessionStorage.removeItem("username");
   	   $.getJSON("http://rap2api.taobao.org/app/mock/94667/api/users/logout",(data)=>{
          if(data.res_body.status===1){
          	location.reload();
          }
   	   });
   }
});

new Header();