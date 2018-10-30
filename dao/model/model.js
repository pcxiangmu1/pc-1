//引入mongoose依赖

const mongoose = require('mongoose');
//连接数据库:h51806
mongoose.connect('mongodb://localhost/h51806');

//Schema 数据结构 ：用户
const userSchema=new mongoose.Schema({
	username:String,
	password:String,
	email:String,
	regTime:Date
});

//Schema 数据结构 ：职位
const positionSchema=new mongoose.Schema({
	name:String,
	salary:Number,
	company:String,
	logo:String
	
});


//mmodal集合:用户
const User = mongoose.model('user', userSchema);  //对应users集合


//mmodal集合:职位
const Position= mongoose.model('position', positionSchema);  //对应position集合

module.exports={User,Position};