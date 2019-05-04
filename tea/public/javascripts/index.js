/*头部加载*/
$(function(){
	(function(){
			$('.nav-d').animate({'height':'100%'},400).delay(300).animate({'width':'60px'},500);
			
			setTimeout(function(){
				$('.header-zhe').fadeOut(1000);
				$('.nav-right').css({'transform':'translateX(0)'});
				setTimeout(function(){
					loade($('main .dirList>ul>li'));
					$('.main-left').fadeIn(2000)
					setTimeout(function(){
						$('.main-text').css({'transform':'translateY(0)','opacity':'1'});
						loade($('main .logo .word span'))
						$('main .logo .word p').css({'transform':'scale(0.5)','opacity':'1'})
					},1000)
				},500)
			},1100)
			if($(window).scrollTop()<$(window).height()){	
				// console.log('上滑')
				$('.nav-top').css('bottom','0').finish().fadeOut(500).next().css('bottom','-60px').finish().fadeOut(500);
			}else{
				// console.log('下滑')
				$('.nav-top').css('bottom','60px').finish().fadeIn(500).next().css('bottom','0').finish().fadeIn(500);
			}
		})()
})