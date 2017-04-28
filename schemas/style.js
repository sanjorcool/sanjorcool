/* CREATE BY SANJORCOOL */

var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
	//类型编号
	style: String,
	//类型名称
	stylename: String,
	//类型缩写
	styleabb: String
});