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
	// 类别
	var sqlval = {}
	var tagObj = {one:'',two:'',three:'',four:'',five:'',six:'',seven:''}
	var cateObj = {one:'',two:'',three:'',four:'',five:'',six:''}
	sqlval.cate = '';
	sqlval.tag = '';
	$('.base_box li').on('click',function(){
		color($(this),'base_selected')
		cateData($(this).attr('value'),cateObj)
		sqlval.cate = cateObj.one+cateObj.two+cateObj.three+cateObj.four+cateObj.five+cateObj.six
		getData(sqlval)
	})
	$('.tag_box li').on('click',function(){
		tag($(this).text(),$(this))
		tagData($(this).text(),tagObj)
		sqlval.tag = tagObj.one+tagObj.two+tagObj.three+tagObj.four+tagObj.five+tagObj.six+tagObj.seven
		getData(sqlval) 
	})

	// 切换心
	// console.log($('.product_bottom ul'))
	$('.product_bottom ul').on('click','.icon_like>p',function(){
		$(this).removeClass('like_click').siblings().addClass('like_click')
	})

	// 标签内tag
	var tag_val;
	for(var i=0;i<$('.goods_tag span').length;i++){
		tag_val = $('.goods_tag span').eq(i).text()
		tag(tag_val,$('.goods_tag span').eq(i))
	}
	// 删除多余空标签
	var goods_tag_span = $('.goods_tag>span');
	for(var m=0;m<goods_tag_span.length;m++){
		if(goods_tag_span[m].innerHTML == 'null' || goods_tag_span[m].innerHTML == ''){
			$('.goods_tag>span').eq(m).css({'display':'none'})
		}
	}

	function color(res,type){
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
	function cateData(cate,obj){
		switch(cate){
			case 'やぶきた':
				if(obj.one == ''){
					obj.one = cate+'&'
				}else{
					obj.one = ''
				}
			break;
			case 'さえみどり':
				if(obj.two == ''){
					obj.two = cate+'&'
				}else{
					obj.two = ''
				}
			break;
			case 'ゆたかみどり':
				if(obj.three == ''){
					obj.three = cate+'&'
				}else{
					obj.three = ''
				}
			break;
			case 'あさつゆ':
				if(obj.four == ''){
					obj.four = cate+'&'
				}else{
					obj.four = ''
				}
			break;
			case 'あさのか':
				if(obj.five == ''){
					obj.five = cate+'&'
				}else{
					obj.five = ''
				}
			break;
			case 'おくみどり':
				if(obj.six == ''){
					obj.six = cate+'&'
				}else{
					obj.six = ''
				}
			break;
		}
	}
	function tagData(tag,obj){
		switch(tag){
			case '人気':
				if(obj.one == ''){
					obj.one = tag+'&'
				}else{
					obj.one = ''
				}
			break;
			case 'ギフト':
				if(obj.two == ''){
					obj.two = tag+'&'
				}else{
					obj.two = ''
				}
			break;
			case '深蒸し茶':
				if(obj.three == ''){
					obj.three = tag+'&'
				}else{
					obj.three = ''
				}
			break;
			case '抹茶入':
				if(obj.four == ''){
					obj.four = tag+'&'
				}else{
					obj.four = ''
				}
			break;
			case '粉末茶':
				if(obj.five == ''){
					obj.five = tag+'&'
				}else{
					obj.five = ''
				}
			break;
			case '水出し可':
				if(obj.six == ''){
					obj.six = tag+'&'
				}else{
					obj.six = ''
				}
			break;
			case 'ティーバッグ':
				if(obj.seven == ''){
					obj.seven = tag+'&'
				}else{
					obj.seven = ''
				}
			break;
		}
	}

	function empty(data){
		$('.product_bottom ul').empty()
		var arr = [];
		var params = [];
		for(var i=0;i<data.length;i++){
			params[params.length] = data[i].id;
			window.sessionStorage.setItem("searchParams", params);

			var li = '<li><a href="/archives?name='+data[i].name+'&id='+data[i].id+'"><div class="goods_img"><img src="images/'+data[i].img+'"alt=""></div><div class="goods_title">'+data[i].name+'</div><div class="goods_info"><p class="goods_tag"></p><p class="goods_price">¥'+data[i].price+'+tax</p></div><div class="goods_desc">'+data[i].depict+'</div></a><div class="icon_like"><p class="like_click"><svg width="100%"height="100%"viewBox="0 0 52 52"><path d="M674.867,6446.55a8.956,8.956,0,0,1,5.572,1.99c5.446,4.31,4.915,13.55-1.233,21.48-4.805,6.2-13.08,15.15-17.482,19.82-4.413-4.68-12.712-13.66-17.483-19.82-6.149-7.93-6.679-17.17-1.235-21.48a9.027,9.027,0,0,1,14.3,4.56,4.57,4.57,0,0,0,8.83,0,9.136,9.136,0,0,1,8.73-6.55m0-3.55a12.555,12.555,0,0,0-3.941.64,12.427,12.427,0,0,0-8.216,8.54,1.021,1.021,0,0,1-1.974,0,12.433,12.433,0,0,0-8.216-8.54,12.368,12.368,0,0,0-11.715,2.12c-7.014,5.55-6.742,16.92.631,26.43,6.015,7.77,17.348,19.73,20.287,22.81,2.935-3.07,14.246-15.01,20.287-22.81,7.374-9.51,7.645-20.88.631-26.43a12.468,12.468,0,0,0-7.774-2.76h0Z"transform="translate(-635.719 -6443)"></path></svg></p><p><svg width="100%"height="100%"viewBox="0 0 52 52"><path d="M683.105,3240.98a12.572,12.572,0,0,0-19.931,6.43,1.024,1.024,0,0,1-1.974,0,12.537,12.537,0,0,0-19.93-6.43c-7.013,5.56-6.742,16.92.631,26.43,6.015,7.77,17.347,19.73,20.286,22.81,2.935-3.07,14.245-15.01,20.287-22.81C689.847,3257.9,690.118,3246.54,683.105,3240.98Z"transform="translate(-636.188 -3238.22)"></path></svg></p></div></li>'
			$('.product_bottom ul').append(li)
			// console.log(data[i].tag)
			if(data[i].tag != null){
				arr = data[i].tag.split('&')
				// console.log(arr)	
				for(var j=0;j<arr.length;j++){
					// console.log(arr[j])
					var span = '<span>'+arr[j]+'</span>'
					$('.goods_tag').eq(i).append(span)
				}
			}else{
				data[i].tag = ''
			}
		}	
	}

	function getData(sqlval){
		if(sqlval.cate == '' && sqlval.tag == ''){
			// console.log('没有字段')
			$.ajax({
				url:'/products',
				type:'post',
				data:sqlval,
				success:function(data){
					// console.log(data)
					// if(!$('.base_box li').hasClass('base_selected') || !$('.tag_box li').attr('class')){
						empty(data)
					// }
				}
			})
		}else{
			$.ajax({
				url:'/products',
				type:'post',
				data:sqlval,
				success:function(data){
					// console.log(data)
					// if($('.base_box li').hasClass('base_selected') || $('.tag_box li').attr('class')){
						// console.log(1)
						empty(data)
					// }
				}
			})
		}
	}
})