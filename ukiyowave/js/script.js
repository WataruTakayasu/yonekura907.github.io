$(function(){
	// グローバル変数
	var container;
	var winW; //ウインドウの幅
	var winH; //ウインドウの高さ
	var svg;
	var ttl;

	container = $("#container");
	svg = $("#svg");
	ttl = $("#ttl");


	


	// keydown
	var key = true;
	
	document.onkeydown = handleKeyDown;
	function handleKeyDown(event) {
		if(key == true){
		    switch(event.keyCode) {
		        case 65:
		        	// a
		            typeAnime(helvetica.a);
		            console.log("click a");
		            break;
		        case 66:
		        	// b
		            typeAnime(helvetica.b);
		            console.log("click b");
		            break;
		        case 67:
		        	// c
		            typeAnime(helvetica.c);
		            console.log("click c");
		            break;
		        case 68:
		        	// d
		           	typeAnime(helvetica.d);
		            console.log("click d");
		            break;
		        case 69:
		        	// e
		           	typeAnime(helvetica.e);
		            console.log("click e");
		            break;  
		        case 70:
		        	// f
		           	typeAnime(helvetica.f);
		            console.log("click f");
		            break;    
		        case 71:
		        	// g
		           	typeAnime(helvetica.g);
		            console.log("click g");
		            break;  
		        case 72:
		        	// h
		           	typeAnime(helvetica.h);
		            console.log("click h");
		            break; 
		        case 73:
		        	// i
		           	typeAnime(helvetica.i);
		            console.log("click i");
		            break; 
		        case 74:
		        	// j
		           	typeAnime(helvetica.j);
		            console.log("click j");
		            break;   
		         case 75:
		        	// k
		           	typeAnime(helvetica.k);
		            console.log("click k");
		            break;  
		        case 76:
		        	// l
		           	typeAnime(helvetica.l);
		            console.log("click l");
		            break; 
		        case 77:
		        	// m
		           	typeAnime(helvetica.m);
		            console.log("click m");
		            break; 
		        case 78:
		        	// n
		           	typeAnime(helvetica.n);
		            console.log("click n");
		            break;  
		        case 79:
		        	// o
		           	typeAnime(helvetica.o);
		            console.log("click o");
		            break;  
		        case 80:
		        	// p
		           	typeAnime(helvetica.p);
		            console.log("click p");
		            break; 
		        case 81:
		        	// q
		           	typeAnime(helvetica.q);
		            console.log("click q");
		            break; 
		        case 82:
		        	// r
		           	typeAnime(helvetica.r);
		            console.log("click r");
		            break;    
		        case 83:
		        	// s
		           	typeAnime(helvetica.s);
		            console.log("click s");
		            break;  
		        case 84:
		        	// t
		           	typeAnime(helvetica.t);
		            console.log("click t");
		            break; 
		        case 85:
		        	// u
		           	typeAnime(helvetica.u);
		            console.log("click u");
		            break; 
		        case 86:
		        	// v
		           	typeAnime(helvetica.v);
		            console.log("click v");
		            break; 
		        case 87:
		        	// w
		           	typeAnime(helvetica.w);
		            console.log("click w");
		            break;  
		        case 88:
		        	// x
		           	typeAnime(helvetica.x);
		            console.log("click x");
		            break; 
		        case 89:
		        	// y
		           	typeAnime(helvetica.y);
		            console.log("click y");
		            break; 
		        case 90:
		        	// z
		           	typeAnime(helvetica.z);
		            console.log("click z");
		            break;                               




		    }
	    }
	    
	}

	function typeAnime(type){
		console.log("typeAnime");
		$(container).css({"opacity":"0"});
		ttl.text(type.name).hide();
		$(container).css({"background-image":"none"});
		// key = false;
		svg_animation(type);
		// container.css({"background-image":key3});
		$(container).css({"background-color":type.bgColor});
		$(container).css({"background-image":"url("+type.bg+")"});
		$(container).animate({"opacity":"1"},500);
	}



	// snap svg
	var s = Snap("#svg");

	function svg_animation(type){

		$(svg).find("path").remove();
		var path = s.path(type.type);
		path.attr({
			fill:"none",
			// "fill-opacity": 0.5,
			stroke: "#FFF",
			strokeWidth: 1,
			opacity:0
		 }).transform(type.transform);

		path.animate({opacity:1},1000,function(){
			setTimeout(function(){
				path.animate({ d:type.ill}, 1000, mina.bounce,function(){
					ttl.fadeIn(500);
				});
			},1000);
		});
	}
	

	setStageSize();
		
	function setStageSize(){
		// ウインドウの高さを広げる
		winW = $(window).width();
		winH = $(window).height();
		container.css({"width":winW});
		container.css({"height":winH});
	}

	// ウインドウをリサイズしたら実行
	$(window).on('resize',function(ev) {
			setStageSize();
	});
});
	
