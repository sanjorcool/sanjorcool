/*
*
* CREATE BY SANJORCOOL ON 20170324
*
*/
var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	//用户名称
	username: String,
	//用户类型
	userstyle: String,
	//创建时间
	createdate: { type: Date , defaulte: Date.now },
	//绑定邮箱
	email: { type: String , defaulte:""},
	//密码
	password: String
})