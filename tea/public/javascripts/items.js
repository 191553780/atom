$(function(){
	var num =-25;
	$('.Modalframe').on('mousewheel',function(e){
		// console.log(e);
		if(e.deltaY==1){
			// console.log('当前正在上滑');
			num = Math.min(-25,num+6)
		}else if(e.deltaY==-1){
			// console.log('当前正在下滑');
			num = Math.max(-75,num-6)
		}
		$('.address-frame').css('transform','translate(-50%,'+num+'%)');
	})

	$('.address_tab>span').on('click',function(){
		$(this).addClass('active').siblings().removeClass('active');
		if($(this).index()==0){
			$('.address-frame>.one').show().next().hide();
		}else if($(this).index()==1){
			$('.address-frame>.two').show().prev().hide();
		}
	})

	$('.main_content_left>ul>li>img').on('click',function(){
		var str = $(this).attr('src')
		$('.main_content_left>img').attr('src',str)
	})
	// 添加购物车
	$('.g_button').on('click',function(){
		var loca = window.localStorage;
		var name = $('.main_content_right>h2').text()
		var pic = $('.main_content_right>b').attr('pir')
		var srcImg = $('.main_content_left>ul>li').eq(0).children('img').attr('src')
		var arr = []
		if(loca['cart']){
			var res = JSON.parse(loca['cart'])
			var ins = true;
			for(var i=0;i<res.length;i++){
				if(res[i].name==name){
					res[i].num = parseInt(res[i].num)+1;
					ins = false;
				}
			}
			if(ins){
				res[res.length] = {
					name:name,
					pic:pic,
					num:1,
					img:srcImg
				}
			}arr = res
		}else{
			arr[arr.length] = {
				name:name,
				pic:pic,
				num:1,
				img:srcImg
			}
		}
		loca['cart'] = JSON.stringify(arr)
		var aaa = JSON.parse(loca['cart'])
		var sum = 0
		for(var i=0;i<aaa.length;i++){
			sum += parseInt(aaa[i].num)
		}
		if(sum){
			if(sum>99){
				$('.shopping>span').css('display','block').text('99+')
			}else{
				$('.shopping>span').css('display','block').text(sum)
			}
			$('.shopping-frame>.ab2').addClass('active').siblings().removeClass('active')
		}else{$('.shopping-frame>.ab1').addClass('active').siblings().removeClass('active')}
		
		/*$.ajax({
			url:'/goods',
			type:'post',
			data:{name:$('.main_content_right>h2').text(),num:cont},
			success:function(data){
				var sum  = 0,con = 0;
				if(data.length==0){
					$('.shopping>span').remove()
					$('.shopping-frame>.ab1').addClass('active').siblings().removeClass('active')
				}else{
					for(var i=0;i<data.length;i++){
						sum += data[i].num
						con += data[i].total
					}
					
				}
			},
			error:function(err){
				return console.error(err)
			}
		})*/
	})

})