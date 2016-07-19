var targetUrl = [

	//alligator--------------------------------------------//
		{
		canvasId:"alligatorCanvas",
		url:"alligator.html",
		imgData :[
		{
			src:"img/alligator/background.png",
			x :0,
			y :0
		},
		{
			src:"img/alligator/alligatorchild.png",
			x :400,
			y :300,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/alligator/alligatormain.png",
			x :40,
			y :310
		},
		{
			id:"drag",
			src:"img/alligator/a.png",
			x :600,
			y :250,
			startAnime:function(target){
				// 引数はアルファベット画像の幅と高さ
				// 目的地のX座標とY座標
				alphabetDrag(target,298,325,35,75);
			}
		},
		{	
			src:"img/alligator/ainput.png",
			x :35,
			y :75
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			alpha:0,
			startAnime:function(target){
				createjs.Tween.get(target).wait(1000).to({alpha:1},500);
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					// illShow(1);
					nextBtn();
					createjs.Tween.get(target).to({alpha:0},100);
				});
			}
		}
	]
	},
	//bus--------------------------------------------//
		{
		canvasId:"busCanvas",
		url:"bus.html",
		imgData :[
		{
			src:"img/bus/background.png",
			x :0,
			y :0
		},
		{
			src:"img/bus/bussub.png",
			x :300,
			y :250,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/bus/busmain.png",
			x :100,
			y :400
		},
		{
			src:"img/bus/b.png",
			x :0,
			y :0
		},
		{
			src:"img/bus/binput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			alpha:0,
			startAnime:function(target){
				createjs.Tween.get(target).wait(1000).to({alpha:1},500);
				target.on('click',function(){
					// console.log("skipがクリックされたよ");
					// illShow(2);
					nextBtn();
					createjs.Tween.get(target).to({alpha:0},100);
				});
			}
		}
	]
	},	
	//cat--------------------------------------------//
		{
		canvasId:"catCanvas",
		url:"cat.html",
		imgData :[
		{
			src:"img/cat/background.png",
			x :0,
			y :0
		},
		{
			src:"img/cat/nekomain.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/cat/sleepcat.png",
			x :0,
			y :0
		},
		{
			src:"img/cat/c.png",
			x :0,
			y :0
		},
		{
			src:"img/cat/cinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					nextBtn();
					// console.log("skipがクリックされたよ");
					// illShow(3);
					// Element.remove("illContainer");
				});
			}
		}
	]
	},
	//dolphin--------------------------------------------//
		{
		canvasId:"dolphinCanvas",
		url:"dolphin.html",
		imgData :[
		{
			src:"img/dolphin/background.png",
			x :0,
			y :0
		},
		{
			src:"img/dolphin/irukamain.png",
			x :0,
			y :0		},
		{
			src:"img/dolphin/irukasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/dolphin/irukasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/dolphin/irukasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/dolphin/wave.png",
			x :0,
			y :0
		},
		{
			src:"img/dolphin/d.png",
			x :0,
			y :0
		},
		{
			src:"img/dolphin/dinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					// console.log("skipがクリックされたよ");
					// illShow(4);
					nextBtn();
				});
			}
		}
	]
	},
	//sheep--------------------------------------------//
		{
		canvasId:"sheepCanvas",
		url:"sheep.html",
		imgData :[
		{
			src:"img/sheep/background.png",
			x :0,
			y :0
		},
		{
			src:"img/sheep/hituzisub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/sheep/hituzisub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/sheep/e.png",
			x :0,
			y :0
		},
		{
			src:"img/sheep/einput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(5);
				});
			}
		}
	]
	},
	//gifaffe--------------------------------------------//
		{
		canvasId:"gifaffeCanvas",
		url:"gifaffe.html",
		imgData :[
		{
			src:"img/gifaffe/background.png",
			x :0,
			y :0
		},
		{
			src:"img/gifaffe/kirinmain.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/gifaffe/kirinchild.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/gifaffe/leaf.png",
			x :0,
			y :0
		},
		{
			src:"img/gifaffe/f.png",
			x :0,
			y :0
		},
		{
			src:"img/gifaffe/finput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(6);
				});
			}
		}
	]
	},
	//egg--------------------------------------------//
		{
		canvasId:"eggCanvas",
		url:"egg.html",
		imgData :[
		{
			src:"img/egg/background.png",
			x :0,
			y :0
		},
		{
			src:"img/egg/bikkuri.png",
			x :0,
			y :0
		},
		{
			src:"img/egg/niwatori.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/egg/g.png",
			x :0,
			y :0
		},
		{
			src:"img/egg/ginput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(7);
				});
			}
		}
	]
	},
	//house--------------------------------------------//
		{
		canvasId:"houseCanvas",
		url:"house.html",
		imgData :[
		{
			src:"img/house/background.png",
			x :0,
			y :0
		},
		{
			src:"img/house/morning.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/house/yuugata.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/house/night.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/house/h.png",
			x :0,
			y :0
		},
		{
			src:"img/house/hinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(8);
				});
			}
		}
	]
	},
	//birthday--------------------------------------------//
		{
		canvasId:"birthdayCanvas",
		url:"birthday.html",
		imgData :[
		{
			src:"img/birthday/background.png",
			x :0,
			y :0
		},
		{
			src:"img/birthday/kurakaright.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/birthday/kurakaleft.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/birthday/fire.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/birthday/i.png",
			x :0,
			y :0
		},
		{
			src:"img/birthday/iinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(9);
				});
			}
		}
	]
	},
	//juce--------------------------------------------//
		{
		canvasId:"juceCanvas",
		url:"juce.html",
		imgData :[
		{
			src:"img/juce/background.png",
			x :0,
			y :0
		},
		{
			src:"img/juce/koori.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/juce/orenge.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/juce/sutorou.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/juce/j.png",
			x :0,
			y :0
		},
		{
			src:"img/juce/jinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(10);
				});
			}
		}
	]
	},
	//key--------------------------------------------//
		{
		canvasId:"keyCanvas",
		url:"key.html",
		imgData :[
		{
			src:"img/key/background.png",
			x :0,
			y :0
		},
		{
			src:"img/key/huta.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/key/kagimove.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/key/k.png",
			x :0,
			y :0
		},
		{
			src:"img/key/kinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(11);
				});
			}
		}
	]
	},
	//clock--------------------------------------------//
		{
		canvasId:"clockCanvas",
		url:"clock.html",
		imgData :[
		{
			src:"img/clock/background.png",
			x :0,
			y :0
		},
		{
			src:"img/clock/tokei.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/clock/sound1.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/clock/sound2.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/clock/sound3.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/clock/sound4.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/clock/l.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/clock/linput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(12);
				});
			}
		}
	]
	},
	//mouse--------------------------------------------//
		{
		canvasId:"mouseCanvas",
		url:"mouse.html",
		imgData :[
		{
			src:"img/mouse/background.png",
			x :0,
			y :0
		},
		{
			src:"img/mouse/mousesmall.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/mouse/heart.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/mouse/m.png",
			x :0,
			y :0
		},
		{
			src:"img/mouse/minput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(13);
				});
			}
		}
	]
	},
	//raccoon--------------------------------------------//
		{
		canvasId:"raccoonCanvas",
		url:"raccoon.html",
		imgData :[
		{
			src:"img/raccoon/background.png",
			x :0,
			y :0
		},
		{
			src:"img/raccoon/ringo.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/raccoon/awa1.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
			{
			src:"img/raccoon/awa2.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/raccoon/n.png",
			x :0,
			y :0
		},
		{
			src:"img/raccoon/ninput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(14);
				});
			}
		}
	]
	},
	//ostrich--------------------------------------------//
		{
		canvasId:"ostrichCanvas",
		url:"ostrich.html",
		imgData :[
		{
			src:"img/ostrich/background.png",
			x :0,
			y :0
		},
		{
			src:"img/ostrich/tamago.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/ostrich/ostrich01.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/ostrich/ostrich02.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/ostrich/o.png",
			x :0,
			y :0
		},
		{
			src:"img/ostrich/oinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(15);
				});
			}
		}
	]
	},
	//apple--------------------------------------------//
		{
		canvasId:"appleCanvas",
		url:"apple.html",
		imgData :[
		{
			src:"img/apple/background.png",
			x :0,
			y :0
		},
		{
			src:"img/apple/ringo.png",
			x :250,
			y :250,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/apple/p.png",
			x :250,
			y :250,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/apple/pinput.png",
			x :200,
			y :100
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(16);
				});
			}
		}
	]
	},
	//squid--------------------------------------------//
		{
		canvasId:"squidCanvas",
		url:"squid.html",
		imgData :[
		{
			src:"img/squid/background.png",
			x :0,
			y :0
		},
		{
			src:"img/squid/ikasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/squid/ikasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/squid/ikasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/squid/q.png",
			x :0,
			y :0
		},
		{
			src:"img/squid/qinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(17);
				});
			}
		}
	]
	},
	//rain--------------------------------------------//
		{
		canvasId:"rainCanvas",
		url:"rain.html",
		imgData :[
		{
			src:"img/rain/background.png",
			x :0,
			y :0
		},
		{
			src:"img/rain/katatumuri.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/rain/ame.png",
			x :0,
			y :0
		},
		{
			src:"img/rain/r.png",
			x :0,
			y :0
		},
		{
			src:"img/rain/rinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(18);
				});
			}
		}
	]
	},
	//snow--------------------------------------------//
		{
		canvasId:"snowCanvas",
		url:"snow.html",
		imgData :[
		{
			src:"img/snow/background.png",
			x :0,
			y :0
		},
		{
			src:"img/snow/prezent.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/snow/kutibig.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/snow/kurismall.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/snow/s.png",
			x :0,
			y :0
		},
		{
			src:"img/snow/sinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(19);
				});
			}
		}
	]
	},
	//tiger--------------------------------------------//
		{
		canvasId:"tigerCanvas",
		url:"tiger.html",
		imgData :[
		{
			src:"img/tiger/background.png",
			x :0,
			y :0
		},
		{
			src:"img/tiger/toramain.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/tiger/torabig.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/tiger/t.png",
			x :0,
			y :0
		},
		{
			src:"img/tiger/tinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(20);
				});
			}
		}
	]
	},
	//hippopotamus--------------------------------------------//
		{
		canvasId:"hippopotamusCanvas",
		url:"hippopotamus.html",
		imgData :[
		{
			src:"img/hippopotamus/background.png",
			x :0,
			y :0
		},
		{
			src:"img/hippopotamus/kabasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/hippopotamus/kabasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/hippopotamus/kabasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/hippopotamus/kabasub.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/hippopotamus/u.png",
			x :0,
			y :0
		},
		{
			src:"img/hippopotamus/uinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(21);
				});
			}
		}
	]
	},
	//violin--------------------------------------------//
		{
		canvasId:"violinCanvas",
		url:"violin.html",
		imgData :[
		{
			src:"img/violin/background.png",
			x :0,
			y :0
		},
		{
			src:"img/violin/marakasu.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/violin/onpu1.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/violin/onpu2.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/violin/rappa.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/violin/violinstick.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/violin/v.png",
			x :0,
			y :0
		},
		{
			src:"img/violin/vinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(22);
				});
			}
		}
	]
	},
	//bagworm--------------------------------------------//
		{
		canvasId:"bagwormCanvas",
		url:"bagworm.html",
		imgData :[
		{
			src:"img/bagworm/background.png",
			x :0,
			y :0
		},
		{
			src:"img/bagworm/bagwormcenter.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/bagworm/bagwormleft.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/bagworm/bagwormright.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/bagworm/w.png",
			x :0,
			y :0
		},
		{
			src:"img/bagworm/winput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(23);
				});
			}
		}
	]
	},
	//fox--------------------------------------------//
		{
		canvasId:"foxCanvas",
		url:"fox.html",
		imgData :[
		{
			src:"img/fox/background.png",
			x :0,
			y :0
		},
		{
			src:"img/fox/afterbig.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/fox/aftersmall.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/fox/kitunebig.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
			{
			src:"img/fox/kitunesmall.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/fox/x.png",
			x :0,
			y :0
		},
		{
			src:"img/fox/xinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(24);
				});
			}
		}
	]
	},
	//monkey--------------------------------------------//
		{
		canvasId:"monkeyCanvas",
		url:"monkey.html",
		imgData :[
		{
			src:"img/monkey/background.png",
			x :0,
			y :0
		},
		{
			src:"img/monkey/banana.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/monkey/hoppe.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/monkey/y.png",
			x :0,
			y :0
		},
		{
			src:"img/monkey/yinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(25);
				});
			}
		}
	]
	},
	//pizza--------------------------------------------//
		{
		canvasId:"pizzaCanvas",
		url:"pizza.html",
		imgData :[
		{
			src:"img/pizza/background.png",
			x :0,
			y :0
		},
		{
			src:"img/pizza/mouses.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/pizza/heart.png",
			x :0,
			y :0,
			startAnime:function(target){
				
			},
			endAnime:function(target){
				createjs.Tween.get(target).to({x:100,y:200},1000);
			}
		},
		{
			src:"img/pizza/z.png",
			x :0,
			y :0
		},
		{
			src:"img/pizza/zinput.png",
			x :0,
			y :0
		},
		{
			src:"img/toppage/sukippu.png",
			x:770,
			y:500,
			startAnime:function(target){
				target.on('click',function(){
					console.log("skipがクリックされたよ");
					illShow(26);
				});
			}
		}
	]
	},
];












