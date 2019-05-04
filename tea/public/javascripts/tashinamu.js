$(function(){
    	$(document).ready(function(){ 
			var i=0;
		    var titleText = setInterval(function(){
				$('.titlewords>div').eq(i).css({'transform':'translateX(0)','opacity':'1'})
				i++;
				if(i>$('.titlewords>div:last').index()){
					clearInterval(titleText);
				}
			},100)

			setTimeout(function(){
				var j=0;
				var titleTextbot1 = setInterval(function(){
					$('.oneLeft_content>h3>div').eq(j).css({'transform':'translateX(0)','opacity':'1','letter-spacing':'3px'})
					j++
					if(j>$('.oneLeft_content>h3>div:last').index()){
						clearInterval(titleTextbot1)
					}
				},50)
			},1000)
			setTimeout(function(){
				$('.title_border').css({'height':'232px'})
			},100)
			setTimeout(function(){
				$('.titleRight>p').css({'transform':'translateY(0)','opacity':'1'})
			},1150)

			setTimeout(function(){
				$('.inner_content').css({'transform':'translateY(0)','opacity':'1'})
			},1500)


		}); 



})
//header加载
$(function(){
	(function(){
		$('.nav-right').css({'transform':'translateX(0)'});
		$('.header-zhe').fadeOut(1000);
		setTimeout(function(){
			$('.nav-d').animate({'height':'100%'},400).css({'width':'61px','background':'#aaa'});
			setTimeout(function(){
				$('header').css({'border-left':'1px solid #aaa'});
			},400)
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