$(function(){
	//给菜单绑定点击事件
	var num=1
	var time;
	$('#menu').on('click',function(){
		clearTimeout(time);
		$('header .nav-d').css({'background':'white'});
		$('header div.dirList>ul>li').css({'transform':'translateX(-10px)','opacity':'0'})
		$('header div.nav-left').finish().fadeToggle();
		$('header').css({'width':'100%'})
		num++;
		if(num%2==0){
			$('header div.dirList>ul').css({'transform':'translate(-50%,-50%)','opacity':'1'})
			loade($('header div.dirList>ul>li'));
			$(this).css({'transform':'translate(-50%) rotate(180deg)'}).removeClass().addClass('iconfont icon-x');
			$('header div.nav-d').animate({'width':'100%'},300).fadeToggle();
			$('header span.nav-text').css({'transform':'translateY(0)','opacity':'1'});
			$('header div.word').css({'opacity':'1'});
		}else{
			$(this).css({'transform':'translate(-50%) rotate(0)'}).removeClass().addClass('iconfont icon-gengduo');
			$('header div.nav-d').animate({'width':'0'},300).fadeToggle();
			$('header span.nav-text').css({'transform':'translateY(5px)','opacity':'0'});
			$('header div.word').css({'opacity':'0'})
			$('header div.dirList>ul').css({'transform':'translate(-25%,-50%)','opacity':'0'})
			time=setTimeout(function(){
				$('header').css({'width':'61px'});
			},500)
		}	
	})
	
	// 给目录绑定事件
	$('div.dirList>ul>li').on('mouseover',function(){
		$(this).siblings().css('opacity','0.4')
		$(this).css('opacity','1').find('span').css({'width':'0','left':'auto','right':'0'});
		(function(t){
			setTimeout(function(){
				t.find('span').css({'width':'15px','left':'0','right':'auto'});},200)
		})($(this))
	})
	$('div.dirList>ul>li').on('mouseout',function(){
		$(this).siblings().css('opacity','1');
	})

	//返回顶部
	var times
	$('.nav-top,.nav-top+span').on('click',function(){
			clearInterval(times)
			times = setInterval(function(){
			if(document.documentElement.scrollTop==0){
				clearInterval(times)
			}
			document.documentElement.scrollTop = document.documentElement.scrollTop-20
		},1)
	})

	// 返回顶部添加移入事件
	$('.nav-top,.nav-top+div>span').mouseover(function(){
		$('.nav-top+div>span').css({'height':'0','bottom':'auto','top':'0'})
		setTimeout(function(){
			$('.nav-top+div>span').css({'height':'100%','bottom':'0','top':'auto'})
		},200)
	})

	// 返回顶部添加隐藏事件
	var winTop=$(window).scrollTop();
	$(window).on('scroll',function(){
		if(winTop>$(window).scrollTop()){	
			// console.log('上滑')
			$('.nav-top').css('bottom','0').finish().fadeOut(500).next().css('bottom','-60px').finish().fadeOut(500);
		}else if((winTop<$(window).scrollTop() && $(window).scrollTop()>$(window).height())){
			// console.log('下滑')
			$('.nav-top').css('bottom','60px').finish().fadeIn(500).next().css('bottom','0').finish().fadeIn(500);
		}
		winTop = $(this).scrollTop();
	})
})
function loade(arr){
		for(var i=0;i<arr.length;i++){
			(function(arr,i){                                
				setTimeout(function(){
					arr.eq(i).css({'transform': 'translateX(0)','opacity':'1'})
				},i*100)
			})(arr,i)
		}
	}

// function fun(){
	
// }