/* CREATE BY SANJORCOOL */
var express = require('express');
var router = express.Router();

// router.use(function(req,res,next){

// })

router.get('/',function(req,res,next){
	res.render('admin/login')
})

router.get('/index',function(req,res,next){
	res.render('admin/index',{
		userInfo : req.userInfo
	})
})
module.exports = router;