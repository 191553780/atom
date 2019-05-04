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
	
	$('.img_nav').on('click','p',function(){
		$(this).addClass('img_select').siblings().removeClass('img_select')
		$(this).parents('.img_nav').siblings('ul').children('li').eq($(this).index()).css({'display':'block'}).siblings().css({'display':'none'})
	})

	// 切换心
	$('.icon_like').on('click','p',function(){
		console.log()
		$(this).removeClass('like_click').siblings().addClass('like_click')
	})

	var tags = $('.inner_tags>ul>li')
	for(var i=0;i<tags.length;i++){
		tag(tags[i].innerHTML,$('.inner_tags>ul>li').eq(i))
	}

	// 获取地址栏id
	function GetRequest() {  
	   var url = location.search; //获取url中"?"符后的字串  
	   var str = url.substring(url.indexOf('&')+1)
	   return str.split('=')[1];
	} 
	var sessionid = GetRequest();
	window.sessionStorage.setItem('id',sessionid)
	// 左右点击事件
	var ids = window.sessionStorage.getItem("searchParams").split(',')
	var idsLength = ids.length
	$('.pagination_content').on('click','.pagination_left',prevData)
	$('.pagination_content').on('click','.pagination_right',nextData)
	function prevData(){
		for(var i=0;i<ids.length;i++){
			if(sessionid == ids[i]){
				window.sessionStorage.setItem('id',ids[i-1])
				$.ajax({
					url:'/archives',
					type:'post',
					data:{id:ids[i-1]},
					success:function(data){
						// 左判断
						if(window.sessionStorage.getItem('id') == 'undefined'){
							$('.pagination_content').off('click','.pagination_left',prevData)
							$('.pagination_content .pagination_left').css({'opacity':'0'})
						}else{
							$('.pagination_content').on('click','.pagination_left',prevData)
							$('.pagination_content .pagination_left').css({'opacity':'1'})
							window.location.href='/archives?name='+data[0].name+'&id='+window.sessionStorage.getItem('id')
						}
					}
				})
			}
		}
	}
	function nextData(){
		for(var i=0;i<ids.length;i++){
			if(sessionid == ids[i]){
				window.sessionStorage.setItem('id',ids[i+1])
				$.ajax({
					url:'/archives',
					type:'post',
					data:{id:ids[i+1]},
					success:function(data){
						// 右判断
						if(window.sessionStorage.getItem('id') == 'undefined'){
							window.sessionStorage.setItem('id',idsLength)
							$('.pagination_content').off('click','.pagination_right',nextData)
							$('.pagination_content .pagination_right').css({'opacity':'0'})
						}else{
							$('.pagination_content').on('click','.pagination_right',nextData)
							$('.pagination_content .pagination_right').css({'opacity':'1'})
							window.location.href='/archives?name='+data[0].name+'&id='+window.sessionStorage.getItem('id')
						}
					}
				})
			}
		}
	}

	function color(res,type){
		// console.log(res)
		if(!res.hasClass(type)){
			res.addClass(type)
		}else{
			res.removeClass(type)
		}
	}
	function tag(tag,obj){
		switch(tag){
			case '人気':
				color(obj,'background_one')
			break;
			case 'ギフト':
				color(obj,'background_two')
			break;
			case '深蒸し茶':
				color(obj,'background_three')
			break;
			case '抹茶入':
				color(obj,'background_four')
			break;
			case '粉末茶':
				color(obj,'background_five')
			break;
			case '水出し可':
				color(obj,'background_six')
			break;
			case 'ティーバッグ':
				color(obj,'background_seven')
			break;
		}
	}

	function priceSwitch(x) {
	    //制保留两位小数
	    var f = parseFloat(x);
	    if (isNaN(f)) return false;
	    var f = Math.round(x * 100) / 100;
	    var s = f.toString();
	    var rs = s.indexOf('.');
	    if (rs < 0) {
	        rs = s.length;
	        s += '.';
	    }
	    while (s.length < (rs + 1) + 2) {
	        s += '0';
	    }
	    //每三位用一个逗号隔开
	    var leftNum=s.split(".")[0];
	    var rightNum="."+s.split(".")[1];
	    var result;
	    //定义数组记录截取后的价格
	    var resultArray=new Array();
	    if(leftNum.length>3){
	        var i=true;
	        while (i){
	            resultArray.push(leftNum.slice(-3));
	            leftNum=leftNum.slice(0,leftNum.length-3);
	            if(leftNum.length<4){
	                i=false;
	            }
	        }
	        //由于从后向前截取，所以从最后一个开始遍历并存到一个新的数组，顺序调换
	        var sortArray=new Array();
	        for(var i=resultArray.length-1;i>=0;i--){
	            sortArray.push(resultArray[i]);
	        }
	        result=leftNum+","+sortArray.join(",")+rightNum;
	    }else {
	        result=s;
	    }
	    return result;
	}
})