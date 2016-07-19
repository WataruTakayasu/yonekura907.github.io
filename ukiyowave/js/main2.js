$(function(){


	var container = $("#container");
	var svg = $("#svg");
	var ttl = $("#ttl");

	//プリロード音
	var preload = new createjs.LoadQueue(false);
	//音のロードを追加
	preload.installPlugin(createjs.Sound);

	// var soundArr = [];

	// for (var i in helvetica) {
	// 	if(helvetica.hasOwnProperty(i)){
	// 		soundArr[i] = helvetica[i].sound;
	// 	}
	// }
	console.log(helveticaSound);
	preload.loadManifest(helveticaSound);

	preload.on('complete',function(){
		console.log("読み込み完了");

		// var bgm = createjs.Sound.play(helveticaSound[27],0,0,26,0,0);//-1は無限ループ
		// bgm.setVolume(0);

		// createjs.Tween.get(bgm).wait(2000).to({volume:0.1},1000);

	});

	//windowの幅と高さ
	var winW;
	var winH;


	// keydown
	var key = true;
	
	document.onkeydown = handleKeyDown;
	function handleKeyDown(event) {
		if(key == true){
		    switch(event.keyCode) {
		        case 65:
		        	// a
		            typeAnime(helvetica.a);
		            createjs.Sound.play(helveticaSound[0]);
		            console.log("click a");
		            break;
		        case 66:
		        	// b
		            typeAnime(helvetica.b);
		            createjs.Sound.play(helveticaSound[1]);
		            console.log("click b");
		            break;
		        case 67:
		        	// c
		            typeAnime(helvetica.c);
		            createjs.Sound.play(helveticaSound[2]);
		            console.log("click c");
		            break;
		        case 68:
		        	// d
		           	typeAnime(helvetica.d);
		           	createjs.Sound.play(helveticaSound[3]);
		            console.log("click d");
		            break;
		        case 69:
		        	// e
		           	typeAnime(helvetica.e);
		           	createjs.Sound.play(helveticaSound[4]);
		            console.log("click e");
		            break;  
		        case 70:
		        	// f
		           	typeAnime(helvetica.f);
		           	createjs.Sound.play(helveticaSound[5]);
		            console.log("click f");
		            break;    
		        case 71:
		        	// g
		           	typeAnime(helvetica.g);
		           	createjs.Sound.play(helveticaSound[6]);
		            console.log("click g");
		            break;  
		        case 72:
		        	// h
		           	typeAnime(helvetica.h);
		           	createjs.Sound.play(helveticaSound[7]);
		            console.log("click h");
		            break; 
		        case 73:
		        	// i
		           	typeAnime(helvetica.i);
		           	createjs.Sound.play(helveticaSound[8]);
		            console.log("click i");
		            break; 
		        case 74:
		        	// j
		           	typeAnime(helvetica.j);
		           	createjs.Sound.play(helveticaSound[9]);
		            console.log("click j");
		            break;   
		         case 75:
		        	// k
		           	typeAnime(helvetica.k);
		           	createjs.Sound.play(helveticaSound[10]);
		            console.log("click k");
		            break;  
		        case 76:
		        	// l
		           	typeAnime(helvetica.l);
		           	createjs.Sound.play(helveticaSound[11]);
		            console.log("click l");
		            break; 
		        case 77:
		        	// m
		           	typeAnime(helvetica.m);
		           	createjs.Sound.play(helveticaSound[12]);
		            console.log("click m");
		            break; 
		        case 78:
		        	// n
		           	typeAnime(helvetica.n);
		           	createjs.Sound.play(helveticaSound[13]);
		            console.log("click n");
		            break;  
		        case 79:
		        	// o
		           	typeAnime(helvetica.o);
		           	createjs.Sound.play(helveticaSound[14]);
		            console.log("click o");
		            break;  
		        case 80:
		        	// p
		           	typeAnime(helvetica.p);
		           	createjs.Sound.play(helveticaSound[15]);
		            console.log("click p");
		            break; 
		        case 81:
		        	// q
		           	typeAnime(helvetica.q);
		           	createjs.Sound.play(helveticaSound[16]);
		            console.log("click q");
		            break; 
		        case 82:
		        	// r
		           	typeAnime(helvetica.r);
		           	createjs.Sound.play(helveticaSound[17]);
		            console.log("click r");
		            break;    
		        case 83:
		        	// s
		           	typeAnime(helvetica.s);
		           	createjs.Sound.play(helveticaSound[18]);
		            console.log("click s");
		            break;  
		        case 84:
		        	// t
		           	typeAnime(helvetica.t);
		           	createjs.Sound.play(helveticaSound[19]);
		            console.log("click t");
		            break; 
		        case 85:
		        	// u
		           	typeAnime(helvetica.u);
		           	createjs.Sound.play(helveticaSound[20]);
		            console.log("click u");
		            break; 
		        case 86:
		        	// v
		           	typeAnime(helvetica.v);
		           	createjs.Sound.play(helveticaSound[21]);
		            console.log("click v");
		            break; 
		        case 87:
		        	// w
		           	typeAnime(helvetica.w);
		           	createjs.Sound.play(helveticaSound[22]);
		            console.log("click w");
		            break;  
		        case 88:
		        	// x
		           	typeAnime(helvetica.x);
		           	createjs.Sound.play(helveticaSound[23]);
		            console.log("click x");
		            break; 
		        case 89:
		        	// y
		           	typeAnime(helvetica.y);
		           	createjs.Sound.play(helveticaSound[24]);
		            console.log("click y");
		            break; 
		        case 90:
		        	// z
		           	typeAnime(helvetica.z);
		           	createjs.Sound.play(helveticaSound[25]);
		            console.log("click z");
		            break;                               
    
		    }
	    }
	    
	}

	//キーボードを押したら最初に呼ばれるところ
	function typeAnime(type){





		//containerを隠す
		container.css({"opacity":0.5});
		//文字を消す
		ttl.text(type.name).hide();
		//コンテナの背景画像
		container.css({"background-image":"none"});

		svgAnime(type);

		//新しい背景色
		container.css({"background-color":type.bgColor});
		//新しい背景SVG画像
		container.css({"background-image":"url("+type.bg+")"});

		//アニメーションでコンテナを表示
		container.animate({"opacity":1},100);

	}
	var s = Snap("#svg");
	//svgアニメーション
	function svgAnime(type){
		console.log(type);
		//元のpathタグを削除
		// $(svg).find("path").remove();
		//文字情報をsvgのパスに与える
		var path = s.path(type.type);
		//パスの属性
		path.attr({
			fill:"none",
			stroke:"#fff",
			strokeWidth:1,
			opacity:0
		}).transform(type.transform);
		//パスのアニメーション
		path.animate({opacity:1},100,function(){
			setTimeout(function(){
				path.animate({ d:type.ill},250,mina.backout,function(){
					//タイトルが消える
					ttl.fadeIn(100,function(){
						$(this).fadeOut(2000);
					});

					//和モンが消えていく
					this.animate({opacity:0},2000,function(){

					});

				});
		

			},150);
		});

	}


	setWin();

	//背景拡大縮小
	function setWin(){
		//windowの幅と高さの取得
		winW = $(window).width();
		winH = $(window).height();
		container.css({
			"width":winW,
			"height":winH
		});
		svg.css({
			"width":winW,
			"height":winH,
			"margin-left":-winW/2,
			"margin-top":-winH/2,

		});
	}

	//ウインドウリサイズ
	$(window).on('resize',function(){
		setWin();
	})

});