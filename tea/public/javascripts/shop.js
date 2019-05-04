$(function(){
	//页面刷新
	$(document).ready(function(){	
		//title动画
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
	//	boxtwo动画
		setTimeout(function(){
				$('.boxtwo_onecontent').css({'transform':'translateY(0)','opacity':'1'})
			},1500)         
			
		}); 
	})
	//滚动条监听事件
	$(window).scroll(function(){
		// var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		if(determine($('.boxtwo_twocontent'))){
			$('.boxtwo_twocontent').css({'transform':'translateY(0)','opacity':'1'})
		}
		if(determine($('.twotitle_border'))){
			$('.twotitle_border').css({'height':'180px'})
			setTimeout(function(){
				$('.boxtwo_threeLeft').css({'transform':'translateX(0)','opacity':'1'})
				$('.boxtwo_threeRight').css({'transform':'translateX(0)','opacity':'1'})
			},500)
				// $('.twoimg>img').delay(700).fadeIn(500)
			setTimeout(function(){
				$('.twoimg>img').css({'transform':'scale(1)','opacity':'1'})
				// $('.twoimg>img').css({'transform':'scale(1.2)')
			},800)
			}
			if(determine($('.boxtwo_undertext'))){
				$('.boxtwo_undertext>h4').css({'transform':'translateY(0)','opacity':'1'})
			}
			if(determine($('#year1970,#year2000'))){
				$('.historyimg1').css({'transform':'scale(1)','opacity':'1'});
				$('.history_detail1').css({'transform':'translateX(0)','opacity':'1'});
			}
			if(determine($('#year1975'))){
				$('.historyimg3').css({'transform':'scale(1)','opacity':'1'});
			}
			if(determine($('#year1980'))){
				$('.historyimg4').css({'transform':'scale(1)','opacity':'1'});
			}
			if(determine($('#year2000'))){
				$('#year2000').css({'transform':'translateY(0)','opacity':'1'});
			}
			if(determine($('#year1996'))){
				$('#year1985,#year1996').css({'transform':'translateX(0)','opacity':'1'});
			}
			if(determine($('#year2002'))){
				$('#year2002,#year2016').css({'transform':'translateX(0)','opacity':'1'});
			}


	})

	//高德地图
	var map = new AMap.Map('twoLeft_map', {
		        zoom:10,
		        center: [106.55, 29.57],
		        viewMode:'3D',
		        mapStyle: 'amap://styles/whitesmoke'

		});
	var marker = new AMap.Marker({
    position: new AMap.LngLat(106.55, 29.57), 
    offset: new AMap.Pixel(-13, -10),
    draggable:false,
    cursor: 'move'
});

map.add(marker);
marker.setMap(map);
marker.setAnimation('AMAP_ANIMATION_BOUNCE');
		

})

//header加载
$(function(){
	window.onload = function(){
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
	}
})
//滚动条触发函数
function determine(a){
		if( (a.offset().top <= ($(window).height()+$(document).scrollTop())) && (a.offset().top+a.height() >= $(document).scrollTop())){
			return true;
		}else{
			return false;
		}
	}
