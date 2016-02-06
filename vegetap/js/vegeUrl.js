const WID01 = 1024;
const HEI01 = 768;
var m;
var vegeUrl = [
	// 野菜１
	{
		canvasId:"pimentCanvas",
		canvasUrl:"piment.html",
		pictureBook:"img/picturebook/vitaminCBtn_on.png",	
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:"footer02",
				src:"img/common/ground01.png",
				x:0,
				y:575,
				alpha:1
			},
			{
				id:"piment",
				src:"img/vegetable/piment/piment.png",
				x:WID01*1/2-124,
				y:750,
				alpha:1,
				startAnime:function(target) {
  					createjs.Tween.get(target).wait(3500).to({y:150},700,createjs.Ease.backInOut);
  				},
  				endAnime:function(target) {
  					// createjs.Tween.get(target).wait(3500).to({y:150},700,createjs.Ease.backInOut);
  				}

			},
			// {
			// 	id:"piment_mini",
			// 	src:"img/vegetable/piment/piment_mini.png",
			// 	x:WID01*2/14,
			// 	y:590,
			// 	alpha:0,
			// 	startAnime:function(target) {
  	// 				createjs.Tween.get(target).wait(4500).to({alpha:1,scaleX:0.7,scaleY:0.7,regX:50,regY:50},50)
  	// 				.to({alpha:1,scaleX:0.5,scaleY:0.5,regX:50,regY:50},100);
  	// 			}
			// },
			{
				id:"VitaminCsigndot",
				src:"",
				x:700,
				y:500,
				alpha:1,
				startAnime:function(target) {
  					createjs.Tween.get(target).wait(1000).call(function(){
						dotCircle(200,400,"#ff9000");
					}).wait(1000).call(function(){
						dotCircle(780,300,"#ff9000");
					});;
  				},
				endAnime:function(target) {
  			// 		createjs.Tween.get(target).wait(1000).call(function(){
					// 	dotCircle(200,400,"#ff9000");
					// }).wait(1000).call(function(){
					// 	dotCircle(780,300,"#ff9000");
					// });;
  				},
			},
			{
				id:"VitaminCJump",
				src:'img/common/vitaminCJump.png',
				x:700,
				y:0,
				alpha:1,
				spriteData:{
					images: ["img/common/vitaminCJump.png"],
					frames: [[0,0,106,153,0,52.5,65.35],[106,0,106,133,0,52.5,58.349999999999994],[212,0,106,144,0,52.5,72.35],[318,0,106,155,0,52.5,76.35],[0,155,106,152,0,52.5,76.35],[106,155,106,145,0,45.5,70.35],[212,155,107,151,0,51.5,75.35],[319,155,106,153,0,52.5,76.35],[212,155,107,151,0,51.5,75.35],[106,155,106,145,0,45.5,70.35],[212,155,107,151,0,51.5,75.35],[319,155,106,153,0,52.5,76.35]],
					animations:{
						VitaminCjump:{
							frames:[0,1,2,3,4],
							speed:0.3
						},
						VitaminCwalk01:{
							frames:[5,6,7,8,9,10,11],
							speed:0.4
						}
					}
				},
				startAnime:function(target) {
					target.gotoAndPlay('VitaminCjump');
					createjs.Tween.get(target).to({y:540},1000).call(function(){
						target.gotoAndPlay("VitaminCwalk01");
						createjs.Tween.get(target).to({x:1100},6000);
					});
				},
				endAnime:function(target) {
					// target.gotoAndPlay('VitaminCjump');
					// createjs.Tween.get(target).to({y:540},1000).call(function(){
					// 	target.gotoAndPlay("VitaminCwalk01");
					// 	createjs.Tween.get(target).to({x:1100},6000);
					// });
				}
			},
			{
				id:"VitaminCJump02",
				src:'img/common/vitaminCJump.png',
				x:300,
				y:0,
				alpha:1,
				spriteData:{
					images: ["img/common/vitaminCJump.png"],
					frames: [[0,0,106,153,0,52.5,65.35],[106,0,106,133,0,52.5,58.349999999999994],[212,0,106,144,0,52.5,72.35],[318,0,106,155,0,52.5,76.35],[0,155,106,152,0,52.5,76.35],[106,155,106,145,0,45.5,70.35],[212,155,107,151,0,51.5,75.35],[319,155,106,153,0,52.5,76.35],[212,155,107,151,0,51.5,75.35],[106,155,106,145,0,45.5,70.35],[212,155,107,151,0,51.5,75.35],[319,155,106,153,0,52.5,76.35]],
					animations:{
						VitaminCjump:{
							frames:[0,1,2,3,4],
							speed:0.3
						},
						VitaminCwalk01:{
							frames:[5,6,7,8,9,10,11],
							speed:0.4
						}
					}
				},
				startAnime:function(target) {
					target.gotoAndPlay('VitaminCjump');
					createjs.Tween.get(target).to({y:540},1000).call(function(){
						target.gotoAndPlay("VitaminCwalk01");
						createjs.Tween.get(target).to({x:1100},6000);
					});
				},
				endAnime:function(target) {
					// target.gotoAndPlay('VitaminCjump');
					// createjs.Tween.get(target).to({y:540},1000).call(function(){
					// 	target.gotoAndPlay("VitaminCwalk01");
					// 	createjs.Tween.get(target).to({x:1100},6000);
					// });
				}
			},
			{
				id:"txt01",
				src:"img/vegetable/piment/txt01.png",
				x:WID01*3/12,
				y:595,
				alpha:1
			},
			{
				id:"txt02",
				src:"img/vegetable/piment/txt02.png",
				x:WID01*4.5/12,
				y:595,
				alpha:1
			},
			{
				id:"txt03",
				src:"img/vegetable/piment/txt03.png",
				x:WID01*6/12,
				y:595,
				alpha:1
			},
			{
				id:"txt04",
				src:"img/vegetable/piment/txt04.png",
				x:WID01*7.5/12,
				y:595,
				alpha:1
			},			
			{
				id:'vitaminCBg',
				src:"img/explanation/vitaminC/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				},
				endAnime:function(target) {
				}
			},
			{
				id:'vitaminCGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				},
				endAnime:function(target) {
				}
			},
			{
				id:'vitaminCTtl',
				src:"img/explanation/vitaminC/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				},
				endAnime:function(target) {
				}
			},
			{
				id:'vitaminCContainer',
				src:"img/explanation/vitaminC/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				},
				endAnime:function(target) {
				}
			},
			{
				id:"VitaminCWink",
				src:'img/explanation/vitaminC/vitaminCWink.png',
				x:WID01+300,
				y:275,
				alpha:1,
				spriteData:{
					images: ["img/explanation/vitaminC/vitaminCWink.png"],
					frames: [	[0,0,186,274,0,92.9,135.2],[0,0,186,274,0,92.9,135.2],[0,0,186,274,0,92.9,135.2],[0,0,186,274,0,92.9,135.2],
								[186,0,187,269,0,83.9,130.2],[186,0,187,269,0,83.9,130.2],[186,0,187,269,0,83.9,130.2],
								[186,0,187,269,0,83.9,130.2],[186,0,187,269,0,83.9,130.2],[373,0,187,271,0,87.9,133.2],
								[373,0,187,271,0,87.9,133.2],[373,0,187,271,0,87.9,133.2],[373,0,187,271,0,87.9,133.2],
								[373,0,187,271,0,87.9,133.2],[560,0,186,271,0,92.9,135.2],[560,0,186,271,0,92.9,135.2],
								[560,0,186,271,0,92.9,135.2],[560,0,186,271,0,92.9,135.2],[560,0,186,271,0,92.9,135.2],
								[0,0,186,274,0,92.9,135.2],[0,0,186,274,0,92.9,135.2],[0,0,186,274,0,92.9,135.2],[0,0,186,274,0,92.9,135.2],
								[0,0,186,274,0,92.9,135.2],[746,0,187,269,0,83.9,130.2],[746,0,187,269,0,83.9,130.2],
								[746,0,187,269,0,83.9,130.2],[746,0,187,269,0,83.9,130.2],[746,0,187,269,0,83.9,130.2],
								[0,274,187,272,0,87.9,133.2],[0,274,187,272,0,87.9,133.2],[0,274,187,272,0,87.9,133.2],
								[0,274,187,272,0,87.9,133.2],[560,0,186,271,0,92.9,135.2],[187,274,186,271,0,92.9,135.2],

								[373,274,186,272,0,92.85,135.2],[373,274,186,272,0,92.85,135.2],[559,274,186,272,0,92.85,135.2],
								[745,274,186,272,0,92.85,135.2],[0,546,186,272,0,92.85,135.2],[186,546,186,272,0,92.85,135.2],
								[186,546,186,272,0,92.85,135.2],[186,546,186,272,0,92.85,135.2],[186,546,186,272,0,92.85,135.2],
								[186,546,186,272,0,92.85,135.2]
							],
						animations:{
							stand:[34],
							VitaminCwalk:{
								frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33],
								speed:0.5
							},
							VitaminCwink:{
								frames:[35,36,37,38,39,40,41,42,43,44,44,44,44,44,44],
								speed:0.5
							}
						}

				},
				startAnime:function(target) {
					target.gotoAndPlay('VitaminCwalk'),
					createjs.Tween.get(target).to({scaleX:1,scaleY:1}).to({x:1024+(WID01/2)},3000).call(function(){
					target.gotoAndPlay("stand"),
					createjs.Tween.get(target).to({scaleX:1,scaleY:1}).wait(300).call(function(){
					target.gotoAndPlay("VitaminCwink"),
					createjs.Tween.get(target).wait(8000).call(function(){
					target.gotoAndPlay("VitaminCwalk"),
					createjs.Tween.get(target).to({scaleX:1,scaleY:1}).to({x:1024+(WID01/2)+300},3000);
					})
					})
					});
					var maskShape = new createjs.Shape();
					maskShape.set({
					    x : WID01+294,
					    y : 71,
					    graphics : new createjs.Graphics().beginFill("#CCC").drawEllipse(0,0,393,393)
					});

					target.set({
					    mask : maskShape
					});

				},
				// endAnime:function(target) {
				// 	target.gotoAndPlay('VitaminCwalk'),
				// 	createjs.Tween.get(target).to({scaleX:1,scaleY:1}).to({x:1024+(WID01/2)},3000).call(function(){
				// 	target.gotoAndPlay("stand"),
				// 	createjs.Tween.get(target).to({scaleX:1,scaleY:1}).wait(300).call(function(){
				// 	target.gotoAndPlay("VitaminCwink"),
				// 	createjs.Tween.get(target).wait(8000).call(function(){
				// 	target.gotoAndPlay("VitaminCwalk"),
				// 	createjs.Tween.get(target).to({scaleX:1,scaleY:1}).to({x:1024+(WID01/2)+300},3000);
				// 	})
				// 	})
				// 	});
				// }
			},
			// {
			// 	id:"VitaminCWink",
			// 	src:'img/explanation/vitaminC/vitaminCWink.png',
			// 	x:1024+(WID01/2),
			// 	y:-500,
			// 	alpha:1,
			// 	spriteData:{
			// 		images: ["img/explanation/vitaminC/vitaminCWink.png"],
			// 		frames: [[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[0,0,370,539,0,184.95,269.3],[370,0,370,539,0,184.95,269.3],[0,539,370,539,0,184.95,269.3],[370,539,370,539,0,184.95,269.3],[0,1078,370,539,0,184.95,269.3],[0,1078,370,539,0,184.95,269.3],[0,1078,370,539,0,184.95,269.3],[0,1078,370,539,0,184.95,269.3],[0,1078,370,539,0,184.95,269.3]],
			// 		animations:{
			// 			VitaminCwink:{
			// 				frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,19,19,19,19,19,19],
			// 				speed:0.5
			// 			}
			// 		}
			// 	},
			// 	startAnime:function(target) {
			// 		target.gotoAndPlay('VitaminCwink'),
			// 		createjs.Tween.get(target).wait(4000).to({y:275},800,createjs.Ease.backInOut);
			// 	}
			// },
			{
				id:'vitaminCeffectA',
				src:"img/explanation/vitaminC/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				},
				endAnime:function(target) {
				}
			},
			{
				id:'vitaminCeffectB',
				src:"img/explanation/vitaminC/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				},
				endAnime:function(target) {
				}
			},
			{
				id:"vitaminCeffectAgra",
				src:'img/explanation/vitaminC/hand.png',
				x:1024+(WID01*2/12-35),
				y:HEI01*8/16+10,
				alpha:1,
				spriteData:{
					images: ["img/explanation/vitaminC/hand.png"],
					frames: [[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237]],
					animations:{
						animeHand:{
							frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
							speed:0.5
						}
					}
				},
				startAnime:function(target) {
					target.gotoAndPlay('animeHand');
				},
				endAnime:function(target) {
					// target.gotoAndPlay('animeHand');
				}
			},
			{
				id:'vitaminCeffectBgra',
				src:"img/explanation/vitaminC/baikin.png",
				x:1024+(WID01*10/12-20),
				y:HEI01*6/16+100,
				alpha:1,
				spriteData:{
					images: ["img/explanation/vitaminC/baikin.png"],
					frames: [[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,0,387,435,0,193.5,217.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5],[0,435,388,400,0,193.5,192.5]],
					animations:{
						animeBaikin:{
							frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
							speed:0.5
						}
					}
				},
				startAnime:function(target) {
					target.gotoAndPlay('animeBaikin');
				},
				endAnime:function(target) {
					target.gotoAndPlay('animeBaikin');
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					target.on('click',vegeContainerMove);
					// createjs.Tween.get(target).wait(10000).call(vegeContainerMove);
				},
				endAnime:function(target) {
				}
			},
		]
	},
	// 野菜2
	{
		canvasId:"cornCanvas",
		canvasUrl:"corn.html",
		pictureBook:"img/picturebook/vitaminB1Btn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'edamameContainer',
				src:"img/vegetable/corn.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'vitaminB1Bg',
				src:"img/explanation/vitaminB1/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1Ground',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1Ttl',
				src:"img/explanation/vitaminB1/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1Container',
				src:"img/explanation/vitaminB1/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1effectA',
				src:"img/explanation/vitaminB1/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1effectB',
				src:"img/explanation/vitaminB1/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1effectAgra',
				src:"img/explanation/vitaminB1/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB1effectBgra',
				src:"img/explanation/vitaminB1/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜3
	{
		canvasId:"broccoliCanvas",
		canvasUrl:"broccoli.html",
		pictureBook:"img/picturebook/vitaminB2Btn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'edamameContainer',
				src:"img/vegetable/broccoli.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'vitaminB2Bg',
				src:"img/explanation/vitaminB2/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2Ground',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2Ttl',
				src:"img/explanation/vitaminB2/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2Container',
				src:"img/explanation/vitaminB2/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2effectA',
				src:"img/explanation/vitaminB2/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2effectB',
				src:"img/explanation/vitaminB2/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2effectAgra',
				src:"img/explanation/vitaminB2/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminB2effectBgra',
				src:"img/explanation/vitaminB2/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜4
	{
		canvasId:"beanCanvas",
		canvasUrl:"bean.html",
		pictureBook:"img/picturebook/zincBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'beanContainer',
				src:"img/vegetable/bean.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'ironBg',
				src:"img/explanation/iron/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironTtl',
				src:"img/explanation/iron/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironContainer',
				src:"img/explanation/iron/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironeffectA',
				src:"img/explanation/iron/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironeffectB',
				src:"img/explanation/iron/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironeffectAgra',
				src:"img/explanation/iron/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'ironeffectBgra',
				src:"img/explanation/iron/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜5
	{
		canvasId:"spinachCanvas",
		canvasUrl:"spinach.html",
		pictureBook:"img/picturebook/ironBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'spinachContainer',
				src:"img/vegetable/spinach.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'calciumBg',
				src:"img/explanation/calcium/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumTtl',
				src:"img/explanation/calcium/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumContainer',
				src:"img/explanation/calcium/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumeffectA',
				src:"img/explanation/calcium/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumeffectB',
				src:"img/explanation/calcium/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumeffectAgra',
				src:"img/explanation/calcium/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'calciumeffectBgra',
				src:"img/explanation/calcium/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜6
	{
		canvasId:"radishCanvas",
		canvasUrl:"radish.html",
		pictureBook:"img/picturebook/kaliumBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'radishContainer',
				src:"img/vegetable/radish.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'kaliumBg',
				src:"img/explanation/kalium/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumTtl',
				src:"img/explanation/kalium/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumContainer',
				src:"img/explanation/kalium/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumeffectA',
				src:"img/explanation/kalium/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumeffectB',
				src:"img/explanation/kalium/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumeffectAgra',
				src:"img/explanation/kalium/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'kaliumeffectBgra',
				src:"img/explanation/kalium/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜7
	{
		canvasId:"pumpkinCanvas",
		canvasUrl:"pumpkin.html",
		pictureBook:"img/picturebook/calciumBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'pumpkinContainer',
				src:"img/vegetable/pumpkin.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'vitaminABg',
				src:"img/explanation/vitaminA/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminATtl',
				src:"img/explanation/vitaminA/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAContainer',
				src:"img/explanation/vitaminA/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAeffectA',
				src:"img/explanation/vitaminA/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAeffectB',
				src:"img/explanation/vitaminA/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"vitaminAeffectAgra",
				src:'img/explanation/vitaminC/hand.png',
				x:1024+(WID01*2/12-35),
				y:HEI01*8/16+10,
				alpha:1,
				spriteData:{
					images: ["img/explanation/vitaminC/hand.png"],
					frames: [[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237]],
					animations:{
						animeHand:{
							frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
							speed:0.03
						}
					}
				},
				startAnime:function(target) {
					target.gotoAndPlay('animeHand');
				}
			},
			{
				id:'vitaminAeffectBgra',
				src:"img/explanation/vitaminA/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜8
	{
		canvasId:"burdockCanvas",
		canvasUrl:"burdock.html",
		pictureBook:"img/picturebook/dietaryfiberBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'burdockContainer',
				src:"img/vegetable/burdock.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'dietaryfiberBg',
				src:"img/explanation/dietaryfiber/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfiberGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfiberTtl',
				src:"img/explanation/dietaryfiber/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfiberContainer',
				src:"img/explanation/dietaryfiber/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfibereffectA',
				src:"img/explanation/dietaryfiber/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfibereffectB',
				src:"img/explanation/dietaryfiber/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfibereffectAgra',
				src:"img/explanation/dietaryfiber/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'dietaryfibereffectBgra',
				src:"img/explanation/dietaryfiber/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜9
	{
		canvasId:"tomatoCanvas",
		canvasUrl:"tomato.html",
		pictureBook:"img/picturebook/vitaminKBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'tomatoContainer',
				src:"img/vegetable/tomato.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'lycopeneBg',
				src:"img/explanation/lycopene/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneTtl',
				src:"img/explanation/lycopene/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneContainer',
				src:"img/explanation/lycopene/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectA',
				src:"img/explanation/lycopene/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectB',
				src:"img/explanation/lycopene/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectAgra',
				src:"img/explanation/lycopene/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectBgra',
				src:"img/explanation/lycopene/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜10
	{
		canvasId:"pumpkinCanvas",
		canvasUrl:"pumpkin.html",
		pictureBook:"img/picturebook/lycopeneBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'pumpkinContainer',
				src:"img/vegetable/pumpkin.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'vitaminABg',
				src:"img/explanation/vitaminA/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminATtl',
				src:"img/explanation/vitaminA/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAContainer',
				src:"img/explanation/vitaminA/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAeffectA',
				src:"img/explanation/vitaminA/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'vitaminAeffectB',
				src:"img/explanation/vitaminA/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"vitaminAeffectAgra",
				src:'img/explanation/vitaminC/hand.png',
				x:1024+(WID01*2/12-35),
				y:HEI01*8/16+10,
				alpha:1,
				spriteData:{
					images: ["img/explanation/vitaminC/hand.png"],
					frames: [[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,0,479,356,0,248.5,178],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237],[0,356,430,415,0,199.5,237]],
					animations:{
						animeHand:{
							frames:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
							speed:0.03
						}
					}
				},
				startAnime:function(target) {
					target.gotoAndPlay('animeHand');
				}
			},
			{
				id:'vitaminAeffectBgra',
				src:"img/explanation/vitaminA/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	},
	// 野菜12
	{
		canvasId:"tomatoCanvas",
		canvasUrl:"tomato.html",
		pictureBook:"img/picturebook/caroteneBtn_on.png",
		imgData:[
			{
				id:"header",
				src:"img/common/header01.png",
				x:0,
				y:0,
				alpha:1
			},
			{
				id:'tomatoContainer',
				src:"img/vegetable/tomato.png",
				x:0,
				y:0,
				alpha:0,
				startAnime:function(target) {
					createjs.Tween.get(target).to({alpha:1},1000);
				}
			},
			{
				id:'lycopeneBg',
				src:"img/explanation/lycopene/bg.jpg",
				x:1024,
				y:0,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneGround',
				src:"img/common/ground04.png",
				x:1024,
				y:HEI01-333,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneTtl',
				src:"img/explanation/lycopene/mainTtl.png",
				x:1024+(WID01/2-274),
				y:555,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneContainer',
				src:"img/explanation/lycopene/CharaBg.png",
				x:1024+(WID01/2-216),
				y:77,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectA',
				src:"img/explanation/lycopene/effectA.png",
				x:1024+(WID01*0/12+25),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectB',
				src:"img/explanation/lycopene/effectB.png",
				x:1024+(WID01*8/12+65),
				y:HEI01*2/16+20,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectAgra',
				src:"img/explanation/lycopene/effectAgra.png",
				x:1024+(WID01*0/12+5),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:'lycopeneeffectBgra',
				src:"img/explanation/lycopene/effectBgra.png",
				x:1024+(WID01*9/12+15),
				y:HEI01*6/16,
				alpha:1,
				startAnime:function(target) {
				}
			},
			{
				id:"btn",
				src:"img/common/next.png",
				x:900,
				y:300,
				alpha:1,
				startAnime:function(target) {
					// 完成後のアニメーション
					target.on('click',vegeContainerMove);
				}
			},
		]
	}
];



