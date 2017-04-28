/* CREATE BY SANJORCOOL */


//页面宽度高度响应设定
function heightauto(){
	var win_h = $(window).height();
	var win_w = $(window).width();
	if(win_h < 680){
		// n_content_box
		win_h = 680;
	}
	if(win_w <768){
		$('.n_content_box').css({
			width:"100%"
		});
	}else{
		$('.n_content_box').css({
			width: win_w - 80 + "px"
		});

	}
	$('body').width(win_w);
	$('body').height(win_h);
}
heightauto();
window.onresize = function(){
	heightauto();
}
//

//点击退出登录，回到登陆界面
function logoutAuto(){
	$('.article_prev').animate({
		bottom:"0"
	},300)
	$('.article_next').animate({
		top:"100%"
	},500);
	$('#function_nav_ico').animate({
		bottom: '-50px'
	},300);
	$('.function_nav').fadeOut(300);
}
//

//点击登陆按钮时的动效
function loginAuto(){
	$('.article_prev').animate({
		bottom:"100%"
	},700);
	$('.article_next').animate({
		top:0
	},500);
	$('#function_nav_ico').animate({
		bottom: '10px'
	},600);
	
	$('#function_nav_ico').attr('title',1);
	navfunclick($("#function_nav_ico"));

}
//

//当窗口宽度小于768px时，导航栏打开关闭function
function navfunclick(obj){
	if($(obj).attr('title') == 0){
		$('.function_nav').fadeIn(500);
		$(obj).find("img").attr('src','/public/images/ico_nav_close.png');
		$(obj).css('background','#fff')
		$(obj).attr('title',1);
	}else{
		$('.function_nav').fadeOut(500);
		$(obj).find("img").attr('src','/public/images/img_logo.png');
		$(obj).css('background','#9f49ff')
		$(obj).attr('title',0);
	}
}
//

//导航栏hover属性
$('.nav').find('.ico_box').each(function(){
	$(this).hover(function(){
		$(this).siblings(".log_text").stop(false,true).animate({
			left:"-110px"
		},200);
	},function(){
		$(this).siblings(".log_text").stop(false,true).animate({
			left:"0"
		},200);
	})
})
