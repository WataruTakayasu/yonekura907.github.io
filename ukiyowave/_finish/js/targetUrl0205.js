
var targetUrl = [
	{
		imgData :[
			{
				src:"img/toppage/background.png",
				x :0,
				y :0
			},
			{
				src:"img/toppage/go.png",
				x :250,
				y :250
			},
			{
				src:"img/toppage/e.png",
				x :100,
				y :200
			},
			{
				src:"img/toppage/i.png",
				x :200,
				y :100
			}
		]
	},
	{
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
			endAnime:function(illTarget){
				createjs.Tween.get(illTarget).to({x:10},1000);
			}
		},
		{
			src:"img/alligator/p.png",
			x :250,
			y :250,
			endAnime:function(illTarget){
				createjs.Tween.get(illTarget).wait({x:10},1000);
			}
		},
		{
			src:"img/apple/pinput.png",
			x :200,
			y :100
		}

		]

	}

];














