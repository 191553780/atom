$(function(){
	(function(){
		$('.blend_left>span').addClass('blend_left_span')
		setInterval(function(){
			$('.blend_left>hgroup>h2').css({'width':'100%','opacity':'1'})
		},500)
		setInterval(function(){
			$('.blend_left>hgroup>h4').css({'width':'100%','opacity':'1'})
		},1000)
		setInterval(function(){
			$('.blend_right').css({'transform':'translateY(0)','opacity':'1'})
		},1500)
		setInterval(function(){
			$('.secret_content').css({'transform':'translateY(0)','opacity':'1'})
		},2000)

		$('.nav-right').css({'transform':'translateX(0)'});
		$('.header-zhe').fadeOut(1000);
		setTimeout(function(){
			$('.nav-d').animate({'height':'100%'},400).css({'width':'61px','background':'#aaa'});
			setTimeout(function(){
				$('header').css({'border-left':'1px solid #aaa'});
			},400)
			$('div.tab').css({'transform':'translateY(0)','opacity':'1'})
		},1100)
	})();
	$(window).on('load',function(){
		$('.nav-right').css({'transform':'translateX(0)'});
		$('.header-zhe').fadeOut(1000);
		setTimeout(function(){
			$('.nav-d').animate({'height':'100%'},400).css({'width':'61px','background':'#aaa'});
			setTimeout(function(){
				$('header').css({'border-left':'1px solid #aaa'});
			},400)
		},1100)
	})
	
	$(window).scroll(function(){
		var wScroll = parseInt($(document).scrollTop());
		// console.log(wScroll)
		if(determine($('.masters_content'))){
			$('.masters_left>p.title').css({'transform':'translateX(10px)','opacity':'1'})
			$('.masters_right>p>img').addClass('img_scroll')
		}

		if(determine($('.title_content'))){
			$('.st_left').css({'transform':'translateX(0)','opacity':'1'})
			$('.story_boder').css({'width':'43vw','left':'0','right':'auto'})
			$('.one_left>p:first-child').css({'transform':'translateX(0)','opacity':'1'})
			setInterval(function(){
				$('.one_left>p:last-child').css({'transform':'translateX(0)','opacity':'1'})
			},200)
			$('.one_right>p:first-child>img').addClass('img_scroll')
			setInterval(function(){
				$('.one_right>p:last-child>img').addClass('img_scroll')
			},200)
		}
		if(determine($('.story_two'))){
			$('.two_left>img').addClass('img_scroll')
			$('.two_right>p:first-child').css({'transform':'translateX(0)','opacity':'1'})
			setInterval(function(){
				$('.two_right>p:last-child').css({'transform':'translateX(0)','opacity':'1'})
			},200)
		}
		if(determine($('.story_three'))){
			$('.three_swaper>img').addClass('img_scroll')
			$('.three_title>p:first-child').css({'transform':'translateX(0)','opacity':'1'})
			setInterval(function(){
				$('.three_title>p:last-child').css({'transform':'translateX(0)','opacity':'1'})
			},200)
		}
		if(determine($('.story_four'))){
			$('.four_right>img').addClass('img_scroll')
			$('.four_left>p:first-child').css({'transform':'translateX(0)','opacity':'1'})
			setInterval(function(){
				$('.four_left>p:last-child').css({'transform':'translateX(0)','opacity':'1'})
			},200)
		}
		if(determine($('.rank'))){
			$('.rank_swaper>img').addClass('img_scroll')
			$('.rank_border').css('height','210px')
			$('.rank_title>.title').css({'transform':'translateY(0)','opacity':'1'})
			setInterval(function(){
				$('.rank_title>.desc').css({'transform':'translateY(0)','opacity':'1'})
			},500)
			setInterval(function(){
				$('.rank_swaper>h6:nth-of-type(1),.rank_swaper>h6:nth-of-type(2)').css({'transform':'translateY(0)','opacity':'1'})
			},1000)
		}
	})

	
	function determine(a){
		if( (a.offset().top <= ($(window).height()+$(document).scrollTop())) && (a.offset().top+a.height() >= $(document).scrollTop())){
			return true;
		}else{
			return false;
		}
	}

})