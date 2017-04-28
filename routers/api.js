/*
*
* CREATE BY SANJORCOOL ON 20170323
*
*/
var express = require('express');
var router = express.Router();
var User = require('../models/User');
var moment = require('moment');

var responseData;
router.use(function(req,res,next){
	responseData = {
		code : 0,
		message :"",
		usercode :"",
		userstyle :""
	}
	next();
})

//点击登录按钮获取临时车牌号,生成cookies
router.post('/user/login',function(req,res,next){
	var userstyle = req.body.userstyle;
	var username = req.body.username;

	User.findOne({
		username: username,
		userstyle: userstyle
	}).then(function(userInfo){
		if(userInfo){
			responseData.code = 2;
			responseData.message = "登陆成功，欢迎回来";
			responseData.usercode = username;
			responseData.userstyle = userstyle;
			res.json(responseData);
			return;
		}else{
			var user = new User({
				username: username,
				userstyle: userstyle,
				createdate: moment().add(8,'hour').format(),
				email:""
			});
			user.save();
			req.cookies.set('userInfo',JSON.stringify({
				username: username,
				userstyle: userstyle
			}));
			responseData.message = "注册并保存车牌／登陆／生成cookies";
			responseData.usercode = username;
			responseData.userstyle = userstyle;
			res.json(responseData);
			return 
		}
	})
});

//页面加载、刷新完成之后，传送临时车牌号
router.post('/user/load',function(req,res,next){
	if(req.userInfo.username){
		responseData.code = 1;
		responseData.message = "登陆未过期！请直接登陆！";
		responseData.usercode = req.userInfo.username;
		responseData.userstyle = req.userInfo.userstyle;
		res.json(responseData);
		return;
	}else{
		var newcode = randomCode(5);
		responseData.code = 3;
		responseData.message = "临时车牌生成成功，返回初始车牌号";
		responseData.usercode = newcode;
		responseData.userstyle = '000';
		res.json(responseData);
		return;
	}

});

//点击退出登陆，清除cookies
router.post('/user/logout',function(req,res){
	req.cookies.set('userInfo',null);
	req.userInfo = JSON.parse(req.cookies.get('userInfo'));
	// console.log(5);
	// console.log(req.userInfo);
	var newcode = randomCode(5);
	var userstyle = "000"
	responseData.code = 4;
	responseData.message = "退出登陆！生成新临时车牌！";
	responseData.usercode = newcode;
	responseData.userstyle = '000';
	res.json(responseData);
});

//生成随机数车牌号
function randomCode(d){
	var codeNum = "";
	for(var i=0; i<d ;i++ ){
		codeNum = codeNum + Math.round(Math.random()*9);
	}
	codeNum = codeNum.substring(0,5);
	recurTest(codeNum,d);
	return codeNum;
}

//检测车牌是否存在
function recurTest(str,d){
	User.findOne({
		username: str,
		userstyle: '000'
	}).then(function(results){
		if(results){
			console.log("车牌已经存在!")
			randomCode(d)
		}
		// console.log(str);
		return true;
	})

}

//管理登陆验证
router.post('/admin/login',function(req,res){
	var username = req.body.username;
	var password = req.body.password;
	User.findOne({
		username:username,
		password:password
	}).then(function(userInfo){
		if(!userInfo){
			responseData.code = 4;
			responseData.message = "账号或密码错误";
			res.json(responseData);
			return;
		}else{

			req.cookies.set('userInfo',JSON.stringify({
				username: userInfo.username,
				userstyle: userInfo.userstyle,
				password: userInfo.password
			}));

			responseData.code = 2;
			responseData.message = "登陆成功";
			responseData.usercode = userInfo.username;
			responseData.userstyle = userInfo.userstyle;
			res.json(responseData);
			return;
		}
	})

})

module.exports = router;
