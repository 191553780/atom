$(function(){
	$(window).ready(function(){
		var mySwiper = new Swiper ('.swiper-container', {
	    loop: true, // 循环模式选项
	    autoplay:true,//自动轮播
	    // 如果需要分页器
	    pagination: {
	      el: '.swiper-pagination',
	      clickable:true,
	    },
	    // 如果需要前进后退按钮
	    navigation: {
	      nextEl: '.swiper-button-next',
	      prevEl: '.swiper-button-prev',
	    },
	  }) 
		var loca = window.localStorage;
		var arr = JSON.parse(loca['cart'])
		var num = 0;
		if(arr){
			for(var i=0;i<arr.length;i++){
				num += parseInt(arr[i].num)
			}
			pd(num)
		}else{
			$('.shopping>span').css('display','none');
		}
	})

	function pd(num){
		if(num>0){
			if(num>99){
				$('.shopping>span').css('display','block').text('99+')
			}else{
				$('.shopping>span').css('display','block').text(num)
			}
		}else{
			$('.shopping>span').css('display','none')
		}
	}

	// 搜索
	$('.search').on('click',function(e){
		e.stopPropagation();
		$(this).children('.search-text').css('width','250px').children('input').focus();
	})
	$('html').on('click',function(){
		$('.search-text').css('width','0');
	})

	//导航右侧弹窗功能
	// 显示
	$('a.landing-1,.reg-frame>.dl,.ab2>.weibo').on('click',function(){
		$('div.Modalframe').fadeIn().find('.login-frame').fadeIn().siblings().fadeOut();
	})
	$('a.landing-2,div.wifi,.login-frame>.zc').on('click',function(){
		$('div.Modalframe').fadeIn().find('.reg-frame').fadeIn().siblings().fadeOut();
	})
	$('a.landing-3').on('click',function(){
		$('div.Modalframe').fadeIn().find('.address-frame').fadeIn().siblings().fadeOut();
	})

	// 购物车功能
	$('.shopping').on('click',function(){
		$('div.Modalframe').fadeIn().find('.shopping-frame').fadeIn().siblings().fadeOut();
		var loca = window.localStorage;
		if(loca['cart'] && loca['cart'] != '[]'){
			$('.shopping-frame>.ab2').addClass('active').siblings().removeClass('active');
			$('.shopping-frame>.ab2>.listClass').empty()
			var arr =  JSON.parse(loca['cart'])
			var sum = 0;
			for(var i=0;i<arr.length;i++){
				$('.ab2>.listClass').append('<ul><li class="left"><div class="iconfont icon-X shut"></div><img src="'+arr[i].img+'" alt="" class="left"><p class="left name">'+arr[i].name+'</p><span class="preic right">¥'+priceSwitch(parseInt(arr[i].pic))+'</span></li><li class="right"><div class="num left"><span run="0">-</span><input type="text" value ="'+arr[i].num+'" name="quantity"><span run="1">+</span></div><span class="cont right">¥'+priceSwitch(arr[i].pic*arr[i].num)+'</span></li></ul>')
				sum += parseInt(arr[i].pic*arr[i].num)
			}
			$('.ab2>p>span.col').text('¥'+priceSwitch(sum));
		}else{
			$('.shopping-frame>.ab1').addClass('active').siblings().removeClass('active');
		}
	})
	//订单数量
	$('.ab2>.listClass').on('click','.num>span',function(){
		var loca = window.localStorage;
		var arr = JSON.parse(loca['cart'])
		var name = $(this).parents('li.right').prev('li.left').children('p.name').text()
		var sum=0,abc=0;
		if($(this).attr('run')==1){
			for(var i=0;i<arr.length;i++){
				if(arr[i].name==name){
					arr[i].num = parseInt(arr[i].num)+1;
					$(this).siblings('input').val(arr[i].num)
					$(this).parents('div.num').siblings('span.cont').text('¥'+priceSwitch(arr[i].num*arr[i].pic))
				}
				abc += parseInt(arr[i].num)
				sum += (arr[i].num*arr[i].pic)
			}
		}else{
			for(var i=0;i<arr.length;i++){
				if(arr[i].name==name){
					arr[i].num = parseInt(arr[i].num)-1;
					$(this).siblings('input').val(arr[i].num);
					$(this).parents('div.num').siblings('span.cont').text('¥'+priceSwitch(arr[i].num*arr[i].pic));
				}
				abc += parseInt(arr[i].num)
				sum += (arr[i].num*arr[i].pic);
			}
		}
		if(!(abc<0)){
			pd(abc)
		}else{
			$('.shopping>span').css('display','none');
		}
		$('.ab2>p>span.col').text('¥'+priceSwitch(sum))
		loca['cart'] = JSON.stringify(arr)
	})
	$('.ab2>.listClass').on('change','.num>input',function(){
		var loca = window.localStorage;
		var arr = JSON.parse(loca['cart'])
		var name = $(this).parents('li.right').prev('li.left').children('p.name').text()
		var numy = /^[0-9]{1,}$/
		if(numy.test($(this).val())){
			var num = Math.max(0,$(this).val());
			var sum = 0,abc =0;
			for(var i=0;i<arr.length;i++){
				if(arr[i].name==name){
					arr[i].num = num
					$(this).parents('div.num').siblings('span.cont').text('¥'+priceSwitch(arr[i].num*arr[i].pic));
				}
				abc += parseInt(arr[i].num)
				sum += (arr[i].num*arr[i].pic);
			}
			if(!(abc<0)){
				pd(abc)
			}else{	$('.shopping>span').css('display','none');}	
			$('.ab2>p>span.col').text('¥'+priceSwitch(sum))
			loca['cart'] = JSON.stringify(arr)
		}
	})
	//订单删除
	$('.ab2>.listClass').on('click','ul>li>.shut',function(){
		var loca = window.localStorage;
		var arr = JSON.parse(loca['cart']);
		var name = $(this).siblings('p.name').text();
		for(var i=0;i<arr.length;i++){
			if(arr[i].name == name){
				 arr.splice(i,1);
			}
		}
		if(arr.length=='0'){
			$('.shopping-frame>.ab1').addClass('active').siblings().removeClass('active');
		}
		pd(arr.length)
		$(this).parents('ul').remove()
		loca['cart'] = JSON.stringify(arr);
	})


	$('.login-frame>.mail').on('click',function(){
		$('div.Modalframe').fadeIn().find('.email-frame').fadeIn().siblings().fadeOut();
	})
	// 隐藏
	$('div.shut,.shopping-frame>.ab1>.weibo,.shopping-frame>.ab2>.qixt').on('click',function(){
		$('div.Modalframe').fadeOut().children().fadeOut();
	})
	
})


$(function(){
	// 删选功能
	$('.screening>li').on('click',function(){
		var cla = $(this).text()
		$.ajax({
			url:'/items',
			type:'post',
			data:{type:cla},
			success:function(data){
				// console.log(data);
				$('.box-main-list>.listAll').empty();
				for(var i=0;i<data.length;i++){
					$('.box-main-list>.listAll').append('<li><a href="/items?name='+data[i].name+'&type='+data[i].type+'"><img src="images/'+data[i].img+'" alt=""><div><p class="itme-text">'+data[i].name+'</p>	<p class="item-price">'+'¥'+priceSwitch(data[i].price)+'</p> </div></a></li>')
				}
			},
			error:function(err){
				return console.error(err)
			}
		})
	})

	// 模态框滚动
	var num =-25;
	$('.Modalframe').on('mousewheel','.frame',function(e){
		console.log(12)
		if(e.deltaY==1){
			// console.log('当前正在上滑');
			num = Math.min(-25,num+6)
		}else if(e.deltaY==-1){
			// console.log('当前正在下滑');
			num = Math.max(-75,num-6)
		}
		$(this).css('transform','translate(-50%,'+num+'%)');
	})
})

function priceSwitch(x) {
    //强制保留两位小数
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