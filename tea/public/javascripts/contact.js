$(function(){
	$(window).scroll(function(){
		var gun=$(this).scrollTop()
		console.log(gun);
		if(gun>0){
			$('div.tit1>div').css("transform","translateX(10px)")
			console.log('div.tit1>div')
			$('div.left_tit>h3').fadeIn();
			console.log('div.left_tit>h3')
			$('div.right_tit').css("transform","translateX(-10px)")
		}

	})

	window.onload = function(){
		$('.nav-right').css({'transform':'translateX(0)'});
		$('.header-zhe').fadeOut(1000);
		setTimeout(function(){
			$('.nav-d').animate({'height':'100%'},400).css({'width':'61px','background':'#aaa'});
			setTimeout(function(){
				$('header').css({'border-left':'1px solid #aaa'});
			},400)
			$('div.tab').css({'transform':'translateY(0)','opacity':'1'})
		},1100)
	}
})