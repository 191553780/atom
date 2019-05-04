$(function(){
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


	$(document).ready(function(){
		var i=0;var j=0;
		$(document).ready(function(){
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
	})


	/*--------代码---------*/
	var arr = ['rgb(99, 175, 140)','rgb(219, 197, 158)','rgb(167, 210, 179)','rgb(221, 221, 110)']
	var leiname = ['','お知らせ','お茶のコトs','知覧のヒト']
	// 请求li列表
	function res(){
		$.ajax({
				url:'/info',
				type:'post',
				data:{class:list},
				success:function(data){
					$('.section_box2>ul').empty();
					if(data.length){
						for(var length=0;length<data.length;length++){
							var date = data[length].date.slice(0,10);
							$('.section_box2>ul').append('<li><a href="JavaScript:;"><div><img src="images/'+data[length].images+'" alt=""><span><svg><path d="M558.293,587.669l0.707-.727-0.707-.727v-0.081h-0.079l-7-7.194-1.112,1.143,5.884,6.051H541v1.617h14.991l-5.884,6.05,1.112,1.143,7-7.193h0.079v-0.082Z"></path></svg></span></div><div><div><p style="background:'+arr[data[length].class]+'">'+leiname[data[length].class]+'</p></div><div><p>'+date+'</p></div></div><div><p>'+data[length].title+'</p></div></a></li>')
						}
						console.log($('main > section.section_box1 > div > .title_text_contents ul li').eq(list).children('span').css('color'))
					}else{
						$('.section_box2>ul').append('<li><a href="JavaScript:;">記事がありません。</a></li>')
					}
				}
			})
	}
	var list = 0;
	res()
	$('main>section.section_box1>div>.title_text_contents>ul>li').click(function(){
		$('section.section_box1>div>.title_text_contents ul li').children('span').css({'border-bottom':'2px solid #dedede','color':'#000'}).next().children('path').css('fill','#dedede')
		if($(this).index()==0){
			$(this).children('span').css({'border-bottom':'2px solid #63af8c','color':'#63af8c'}).next().children('path').css('fill','#63af8c')
			list = 0
		}else if($(this).index()==1){
			list = 1
			$(this).children('span').css({'border-bottom':'2px solid #e1caa2','color':'#e1caa2'}).next().children('path').css('fill','#e1caa2')
		}else if($(this).index()==2){
			list = 2
			$(this).children('span').css({'border-bottom':'2px solid #a7d2b3','color':'#a7d2b3'}).next().children('path').css('fill','#a7d2b3')
		}else if($(this).index()==3){
			list = 3
			$(this).children('span').css({'border-bottom':'2px solid #dddd6e','color':'#dddd6e'}).next().children('path').css('fill','#dddd6e')
		}
		res()
		
	})
	
	
	
	
})
