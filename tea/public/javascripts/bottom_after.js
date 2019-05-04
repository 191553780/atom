$(function(){
	var times;
	var bottom = '<footer><section><div class="foot_top"><ul><li><a href="">ホーム</a></li><li><i></i><a href="">はまだのブレンド</a></li></ul></div><div class="foot_bottom"><p><img src="images/apple-touch-icon.png" alt=""></p><p><span>重慶市南岸区茶園新区茶園駅17385</span><span>TEL:+(028)993-83-2851</span></p><p>17385 Kori, Chirancho, Minamikyushu-shi, kagoshima, China 897-0302</p><p class="foot_bottom_hide">17385 Kori, Chirancho, Minamikyushu-shi,<br> kagoshima, China 897-0302</p></div><div class="bottom_top"><p>page top</p></div></section>	</footer>'
	var main = $('body').find('main')
	var box = $('body').find('.box')
	if(main.length > 0){
		// console.log(1)
		$('main').after(bottom)
	}else if(box.length > 0){
		// console.log(2)
		$('.box').after(bottom)
	}

	$('.bottom_top>p').on('click',function(){
			clearInterval(times)
			times = setInterval(function(){
			if(document.documentElement.scrollTop==0){
				clearInterval(times)
			}
			document.documentElement.scrollTop = document.documentElement.scrollTop-20
		},1)
	})
})