$(function(){
	$(document).ready(function(){
		var i=0;var j=0;
		$(document).ready(function(){ 
		    // alert("页面加载完成！"); 
		    var titleText = setInterval(function(){
				$('.title_text>div>h2>div').eq(i).css({'transform':'translateX(0)','opacity':'1'})
				i++
				if(i>$('.title_text>div>h2>div:last').index()){
					clearInterval(titleText)
				}
			},100)
			setTimeout(function(){
				var j=0;
				var titleTextbot1 = setInterval(function(){
					$('.title_text>div>h3>div:first>div').eq(j).css({'transform':'translateX(0)','opacity':'1','letter-spacing':'3px'})
					j++
					if(j>$('.title_text>div>h3>div:first>div:last').index()){
						clearInterval(titleTextbot1)
					}
				},50)
			},1000)
			setTimeout(function(){
					var j=0;
				var titleTextbot1 = setInterval(function(){
					$('.title_text>div>h3>div:eq(1)>div').eq(j).css({'transform':'translateX(0)','opacity':'1','letter-spacing':'3px'})
					j++
					if(j>$('.title_text>div>h3>div:eq(1)>div:last').index()){
						clearInterval(titleTextbot1)
					}
				},50)
			},1350)
			setTimeout(function(){
				var j=0;
				var titleTextbot1 = setInterval(function(){
					$('.title_text>div>h3>div:eq(2)>div').eq(j).css({'transform':'translateX(0)','opacity':'1','letter-spacing':'3px'})
					j++
					if(j>$('.title_text>div>h3>div:eq(2)>div:last').index()){
						clearInterval(titleTextbot1)
					}
				},50)
			},1800)
			setTimeout(function(){
				$('.title_text_line').css({'height':'232px'})
			},100)
			setTimeout(function(){
				$('.title_text_contents>p').css({'transform':'translateY(0)','opacity':'1'})
			},1150)
		}); 
	(function(){
		$('.nav-right').css({'transform':'translateX(0)'});
		$('.header-zhe').fadeOut(1000);
		setTimeout(function(){
			$('.nav-d').animate({'height':'100%'},400).css({'width':'61px','background':'#aaa'});
			setTimeout(function(){
				$('header').css({'border-left':'1px solid #aaa'});
			},400)
			$('div.tab').css({'transform':'translateY(0)','opacity':'1'})
			},1100)
		})()
	})

	// 侧边栏点击事件
	$( ".text1" ).click(function(){
		$('body,html').animate({'scrollTop':$( "div.content_text1" ).offset().top},400);
	})
	$( ".text2" ).click(function(){
		$('body,html').animate({'scrollTop':$( "div.content_text2" ).offset().top},400);
	})
	$( ".text3" ).click(function(){
		$('body,html').animate({'scrollTop':$( "div.content_text3" ).offset().top},400);
	})
	$( ".text4" ).click(function(){
		$('body,html').animate({'scrollTop':$( "div.content_text4" ).offset().top},400);
	})


	$('div.bg>ul>li>a').click(function(){
		$('.header-zhe').stop(true).fadeIn(100).delay(300).fadeOut(500);
	})
	$('div.icon>div.heart').click(function(){
		if($(this).css('opacity')=='0'){
			$(this).css('opacity','1')
		}else{
			$(this).css('opacity','0')
		}
	})
	$('div.text_icon>div.text_heart').click(function(){
		if($(this).css('opacity')=='0'){
			$(this).css('opacity','1')
		}else{
			$(this).css('opacity','0')
		}
	})
	$(window).scroll(function(){
		var a=$(this).scrollTop()
		// console.log(a);
		if(a>$( "div.content_text1" ).offset().top-100){
			$('div.nav_fixd>ul>li').css({'color':'#5d6666','transform':'scale(1)'}).children('span').css({'width':'15px','border-top':' 1px solid #5d6666'})
			$('div.nav_fixd>ul>li.text1').css({'color':'#c1cb81','transform':'scale(1.2)'}).children('span').css({'width':'35px','border-top':' 1px solid #c1cb81'})
		}
		if(a>$( "div.content_text2" ).offset().top-100){
			$('div.nav_fixd>ul>li').css({'color':'#5d6666','transform':'scale(1)'}).children('span').css({'width':'15px','border-top':' 1px solid #5d6666'})
			$('div.nav_fixd>ul>li.text2').css({'color':'#c1cb81','transform':'scale(1.2)'}).children('span').css({'width':'35px','border-top':' 1px solid #c1cb81'})
		}
		if(a>$( "div.content_text3" ).offset().top-100){
			$('div.nav_fixd>ul>li').css({'color':'#5d6666','transform':'scale(1)'}).children('span').css({'width':'15px','border-top':' 1px solid #5d6666'})
			$('div.nav_fixd>ul>li.text3').css({'color':'#c1cb81','transform':'scale(1.2)'}).children('span').css({'width':'35px','border-top':' 1px solid #c1cb81'})
		}
		if(a>$( "div.content_text4" ).offset().top-100){
			$('div.nav_fixd>ul>li').css({'color':'#5d6666','transform':'scale(1)'}).children('span').css({'width':'15px','border-top':' 1px solid #5d6666'})
			$('div.nav_fixd>ul>li.text4').css({'color':'#c1cb81','transform':'scale(1.2)'}).children('span').css({'width':'35px','border-top':' 1px solid #c1cb81'})

		}
		if(a>$( "div.content_text5" ).offset().top-300){
			$('div.nav_fixd').css('display','none');
		}else{
			$('div.nav_fixd').css('display','block');
		}
	})
})

