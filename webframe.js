function head(){
var html = "";
html +='<title>びりっとがんばるオタク</title>';
document.write(html);
}





function header(){
var html = "";
html += '<header>';
html += '<h2><a href="webpage.html"><img src="ico.jpg">びりっとがんばるオタク</a></h2>';
html +='<nav>';
html +='<ul>';
html +='<li><a href = "webtop.html">トップ</a></li>';
html +='<li><a href = "webpage.html">information/一覧</a></li>';
html +='</ul>';
html +='</nav>';
html +='</header>';
document.write(html);
}


function footer(){
var html = "";
html += '<footer>';
html += '<small>';
html +='Copyright &copy;twitter @sdxfw56,All rights reserved.';
html +='</small>';
html +='</footer>';
document.write(html);
}




function menu(){
var html = "";

html +='<aside>'
html += '<h1>更新情報</h1>';
html += '<ul>';
html +='<li><a href ="プリンセスプリンシパル.html">プリンセスプリンシパル(2019/04/14)</a></li>';
html +='<li><a href = "蒼の彼方のフォーリズム.html">蒼の彼方のフォーリズム(2019/04/04)</a></li>'
html +='<li><a href ="erg_category.html">エロゲまとめ(2019/04/01)</a></li>';
html +='</ul>';
html +='</aside>';
	

html +='<aside>';
html +='<h1>CATEGORIES</h1>';
html +='<ul>';
html +='<li><a href ="erg_category.html">エロゲ</a></li>';
html +='<li><a href ="anime_category.html">アニメ</a></li>';
html +='<li><a href ="extra.html">その他</a></li>';
html +='</ul>';
html +='</aside>';
	

html +='<aside>';
html +='<h1>ARCHIVES</h1>';
html +='<li><a href ="2019_03.html">2019/03</a></li>';
html +='<li><a href ="2019_04.html">2019/04</a></li>';
html +='</aside>';
document.write(html);
}





