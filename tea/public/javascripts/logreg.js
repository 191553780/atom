$(function(){
		// 注册验证
	//user	
	var user = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
	var nameFlag=false;
	// var policyFlag=$('#policy').prop('checked');
	$('.reg-frame .user-1>input').change(function(){
		var str = $(this).val();
		if(str != ''){
			if(user.test(str)){
				$(this).parent().next('.error').text('').css('display','none');
				$.ajax({
					url:'/stores',
					type:'post',
					data:{name:str},
					success:function(data){
						if(data=="meiyou"){
							nameFlag=true;
						}else{
							nameFlag=false;
							$('.reg-frame .user-1>input').parent().next('.error').text('该邮箱已被注册!').css('display','block');
						}
					},
					error:function(err){
						return console.log(err)
					}
				})
			}else{
				nameFlag=false;
				$(this).parent().next('.error').text('账号格式不正确!').css('display','block');
			}
		}else{
			nameFlag=false;
			$(this).parent().next('.error').text('账号不能为空!').css('display','block');
		}
	})
	//pass
	var pass=/^\w{6,20}$/;
	var passFlag=false;
	$('.reg-frame .pass-1>input').change(function(){
		// policyFlag=$('#policy').prop('checked');
		var str=$(this).val();
		if(pass!=''){
			if(pass.test(str)){
				passFlag=true;
                $(this).parent().next('.error').css('display','none');
			}else{
				passFlag=false;
				$(this).parent().next('.error').text('密码格式错误!').css('display','block');
			}
		}else{
			passFlag=false;
			$(this).parent().next('.error').text('密码不能为空!').css('display','block');
		}

	})

	
	// policyFlag=$('#policy').prop('checked');
	$('#reg').submit(function(){
		console.log(1)
		var policyFlag=$('#policy').prop('checked');
		console.log(policyFlag);
		if(nameFlag&&passFlag&&policyFlag){
			return true;
		}else{
			return false;
		}
	})

	//登录验证
	$('#log').submit(function(){
        var nameFlag=false;
        var passFlag=false;
		var str=$('.login-frame .user-2 .user').val();
			
			if(str!=''){
			if(user.test(str)){
				nameFlag=true;
				
			}else{
				nameFlag=false;
				$('.login-frame .pass-2 input').parent().next('.error').text('账号或密码错误!').css('display','block');
			}
		}else{
        	nameFlag=false;
			$('.login-frame .user-2 .user').parent().next('.error').text('账号不能为空!').css('display','block');
		}
		
		

		if(nameFlag){
				$.ajax({
					url:'/login',
					async:false,
					type:'post',
					data:{name:str},
					success:function(data){
						// var password=
						if(data[0].pass==''||data[0].pass!=$('.login-frame .pass-2 input').val()){
							$('.login-frame .pass-2 input').parent().next('.error').text('账号或密码错误!').css('display','block');
							passFlag=false;
						}else{
							passFlag=true;
							window.sessionStorage.setItem("key",$('.login-frame .pass-2 input').val());
						}
					},
					error:function(err){
						return console.log(err)
					}
				})

			}
		if(nameFlag&&passFlag){
			return true;
		}else{
			$('.login-frame .pass-2 input').parent().next('.error').text('账号或密码错误!').css('display','block');
			return false;
		}
	
})

})