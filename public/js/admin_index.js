/* CREATE BY SANJORCOOL */


//页面宽度高度响应设定
function heightauto(){
	var win_h = $(window).height();
	var win_w = $(window).width();
	if(win_h < 680){
		win_h = 680;
	}
	$('body').width(win_w);
	$('body').height(win_h);
}
heightauto();
window.onresize = function(){
	heightauto();
}
//

//登陆方法
function login(){
	$.ajax({
		type:"post",
		url:"/api/admin/login",
		data:{
			username: $('.text_box').find('[name="username"]').val(),
			password: $('.text_box').find('[name="password"]').val()
		},
		dataType:"json",
		success:function(result){
			console.log(result);
			if(result.code == 2 ){
				$('.text_box').html("<p class='green_text'>登陆成功！正在跳转...</p>")
				setTimeout(function(){
					window.location.href=window.location.href+"/index";
				},1000)
			}else{
				var html = $('.text_box').html();
				$('.text_box').html("<p class='red_text'>"+ result.message +"</p>")
				setTimeout(function(){
					$('.text_box').html( html )
				},1000)
			}
			
		}
	})
}
$('#login').on("click",function(){
	login();
})
$(document).keyup(function(event){ 
    if(event.keyCode ==13){ 
		login(); 
    } 
});