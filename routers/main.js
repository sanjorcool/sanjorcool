/*
*
* CREATE BY SANJORCOOL ON 20170323
*
*/
var express = require('express');
var router = express.Router();

router.get('/',function(req,res,next){
	res.render('main/index',{
		userInfo: req.userInfo
	})
})
 
module.exports = router;