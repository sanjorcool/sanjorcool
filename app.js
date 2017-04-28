/*
*
* CREATE BY SANJORCOOL ON 20170323
*
*/

//START
var express = require('express');//加载express模块
var swig = require('swig');//加载模版处理模块swig
var mongoose = require('mongoose');//加载数据库模块
var bodyParser = require('body-parser')//加载body-parser模块，处理页面post提交过来的数据，
var Cookies = require('cookies');

var app = express();//创建app应用

//配置应用模版，定义此应用的模版引擎
app.engine('html',swig.renderFile);//‘html’表示模版去引擎名称&文件后缀，‘swig.renderFile’参数表示“用于解析处理模版内容的方法”
app.set('view engine','html');//注册所使用的模版引擎
app.set('views','./views');//设置模版文件存放目录

swig.setDefaults({cache: false});//清楚模版缓存，便于开发过程中的模版调试

app.use('/public', express.static(__dirname + '/public'));//设置静态文件托管

app.use(bodyParser.urlencoded({ extended:true }));//配置body-parser模块

//设置cookies全局中间件
app.use(function(req,res,next){

	req.cookies = new Cookies(req,res);

	//解析用户登陆cookies信息
	req.userInfo = {};
	if(req.cookies.get('userInfo')){
		try{
			req.userInfo = JSON.parse(req.cookies.get('userInfo'));
			next();
		}catch(e){
			next();
		}
	}else{
		next();
	}

})

//根据不同功能划分模块独立开发
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

//链接数据库
mongoose.connect('mongodb://localhost:27017/node-demo',function(err) {
	if(err){
		console.log('数据库连接失败')
	}else{
		console.log('数据库连接成功')
		app.listen(8080);//监听HTTP请求
		console.log('loading success!');//成功且返回提示语

	}
})
//END
