

var vegeManifest = [
	{
		src: 'img/ground.png',
		x: 0,
		y: 550,
		id: 'ground',
		group:'bg'
	},
	{
		src: 'img/header.png',
		x: 0,
		y: 0,
		id: 'header',
		group:'bg'
	},
	{
		src: 'img/logo.png',
		x: 210,
		y: 100,
		id: 'logo',
		group:'bg'
	},
	{
		src: 'img/vitaminC.png',
		x: 150,
		y: 480,
		id: 'vitaminC',
		group:'chara',
		alpha: 0,
		spriteData: {
			images:['img/vitaminC.png'],
			frames:{width:160, height:160},
			animations:{
				stand:34,
				walk:[0,33],
				stop:34
			}
		},
		startAnime:function(aTarget){
			console.log('call aTarget:' + aTarget);
			createjs.Tween.get(aTarget).to({alpha: 1}, 500) .wait(1000).call(function(){
				aTarget.gotoAndPlay('walk');
			}).to({x: 500}, 4000).call(function(){
				aTarget.gotoAndPlay('stop');
			});
		}
	},
	{
		src: 'img/iron.png',
		x: 0,
		y: 480,
		id: 'iron',
		group:'chara',
		alpha: 0,
		spriteData: {
			images:['img/iron.png'],
			frames:{width:160, height:160},
			animations:{
				stand:34,
				walk:[0,33],
				stop:34
			}
		},
		startAnime:function(aTarget){
			createjs.Tween.get(aTarget).to({alpha: 1}, 500) .wait(2000).call(function(){
				aTarget.gotoAndPlay('walk');
			}).to({x: 350}, 4000).call(function(){
				aTarget.gotoAndPlay('stop');
			});
		}
	}
];
