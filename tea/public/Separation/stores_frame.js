document.writeln("<div class=\"Modalframe\">");
document.writeln("	<div class=\"login-frame frame\">");
document.writeln("		<div class=\"iconfont icon-X shut\"></div>");
document.writeln("		<div class=\"frame-top\">");
document.writeln("			<p>ログイン</p>");
document.writeln("			<p></p>");
document.writeln("		</div>");
document.writeln("		<div class=\"hr\"><hr></div>");
document.writeln("		<form action=\"/login\"  id=\"log\" method=\"get\">");
document.writeln("			<div class=\"user-2\">");
document.writeln("				<i class=\"iconfont icon-youjian\"></i>");
document.writeln("				<input type=\"text\" class=\"user\" name=\"user\" placeholder=\"メールアドレス\">");
document.writeln("			</div>");
document.writeln("			<div class=\"pass-2\">");
document.writeln("				<i class=\"iconfont icon-denglumima\"></i>");
document.writeln("				<input type=\"password\" class=\"pass\" name=\"pass\" placeholder=\"ご希望のパスワード\"> ");
document.writeln("			</div>");
document.writeln("			<div class=\"error\"></div>");
document.writeln("			<input type=\"submit\" value=\"ログイン\" class=\"sub\">");
document.writeln("			<div class=\"weibo\"><b></b><span>Weiboでログイン</span></div>");
document.writeln("		</form>	");
document.writeln("		<p class=\"zc\">新規登録はこちら</p>");
document.writeln("		<p class=\"mail\">パスワードを忘れた場合はこちら</p>");
document.writeln("	</div>");
document.writeln("	<div  class=\"reg-frame frame\">");
document.writeln("		<div class=\"iconfont icon-X shut\"></div>");
document.writeln("		<div class=\"frame-top\">");
document.writeln("			<p>新規登録</p>");
document.writeln("			<p></p>");
document.writeln("		</div>");
document.writeln("		<div class=\"hr\"><hr></div>");
document.writeln("		<form action=\"/insertUser\" id=\"reg\" method=\"post\">");
document.writeln("			<div class=\"user-1\">");
document.writeln("				<i class=\"iconfont icon-youjian\"></i>");
document.writeln("				<input type=\"text\" class=\"user\" name=\"user\" placeholder=\"メールアドレス\">");
document.writeln("			</div>");
document.writeln("			<div class=\"error\"></div>");
document.writeln("			<div class=\"pass-1\">");
document.writeln("				<i class=\"iconfont icon-denglumima\"></i>");
document.writeln("				<input type=\"password\" class=\"pass\" name=\"pass\" placeholder=\"ご希望のパスワード\"> ");
document.writeln("			</div>");
document.writeln("			<div class=\"error\"></div>");
document.writeln("			<p class=\"contract\">");
document.writeln("				<input type=\"checkbox\" id=\"policy\">");
document.writeln("				<label for=\"policy\"></label>");
document.writeln("				<span> <a href=\"#\">利用規約 ・ プライバシーポリシー に</a>同意</span>");
document.writeln("			</p>	");
document.writeln("			<input type=\"submit\" value=\"ログイン\" class=\"sub\">");
document.writeln("			<div class=\"weibo\"><b></b><span>Weiboでログイン</span></div>");
document.writeln("		</form>	");
document.writeln("		<p class=\"dl\">アカウントをお持ちの方はこちら</p>");
document.writeln("	</div>");
document.writeln("	<div class=\"shopping-frame frame\">");
document.writeln("		<div class=\"iconfont icon-X shut\"></div>");
document.writeln("		<div class=\"frame-top\">");
document.writeln("				<p>カートに入っているアイテム</p>");
document.writeln("		</div>");
document.writeln("		<div class=\"r\"></div>");
document.writeln("		<div class=\"ab1 active\">");
document.writeln("			<p>カートに商品は入っていません</p>");
document.writeln("			<div class=\"weibo\">");
document.writeln("				<span>ショッピングを続ける</span>");
document.writeln("			</div>");
document.writeln("		</div>");
document.writeln("		<div class=\"ab2\">");
document.writeln("			<div class=\"title\">");
document.writeln("				<span>アイテム名 </span>");
document.writeln("				<span>価格</span>");
document.writeln("				<span>個数</span>");
document.writeln("				<span>小計</span>");
document.writeln("			</div>");
document.writeln("			<div class=\"r\"></div>");
document.writeln("			<div class=\"listClass\">");
document.writeln("			</div>");
document.writeln("			<div class=\"r\"></div>");
document.writeln("			<p>合計<span class=\"col\">500</span></p>");
document.writeln("			<div class=\"clear\"></div>");
document.writeln("			<div class=\"weibo\">ログインして購入する</div>");
document.writeln("			<div class=\"tub\">ゲスト購入する</div>");
document.writeln("			<a href=\"#\" class=\"qixt\">ショッピングを続ける</a>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("	<div class=\"email-frame frame\">");
document.writeln("		<div class=\"iconfont icon-X shut\"></div>");
document.writeln("		<div class=\"frame-top\">");
document.writeln("			<p>カートに入っているアイテム</p>");
document.writeln("		</div>");
document.writeln("		<div class=\"hr\"><hr></div>");
document.writeln("		<form action=\"\">");
document.writeln("			<div>");
document.writeln("				<i class=\"iconfont icon-denglumima\"></i>");
document.writeln("				<input type=\"password\" class=\"pass\" name=\"pass\" placeholder=\"ご希望のパスワード\"> ");
document.writeln("			</div>");
document.writeln("			<input type=\"submit\" value=\"パスワードの再発行メールを送信\" class=\"sub\">");
document.writeln("		</form>	");
document.writeln("	</div>");
document.writeln("	<div class=\"address-frame frame\">");
document.writeln("		<div class=\"iconfont icon-X shut\"></div>");
document.writeln("		<div class=\"address_tab\">");
document.writeln("			<span class=\"active\">日本</span>");
document.writeln("			<span>OVERSEAS</span>");
document.writeln("		</div>");
document.writeln("		<ul class=\"one\">");
document.writeln("			<% for(var i=0;i<10;i++){ %>");
document.writeln("				<li><p>北海道 <span>¥1,200</span></p></li>");
document.writeln("			<%}%>");
document.writeln("		</ul>");
document.writeln("		<div class=\"two\">");
document.writeln("			<img src=\"images/icon_no_shipping.svg\" alt=\"\">");
document.writeln("			<p>No International Shipping Service Available</p>");
document.writeln("		</div>");
document.writeln("	</div>");
document.writeln("</div>");