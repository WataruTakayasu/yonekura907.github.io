
// stage
var stage = new createjs.Stage("canvasEl");
var stageWidth = $("#canvasEl").width();
var stageHeight = $("#canvasEl").height();

var circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
circle.x = 150;
circle.y = 50;
circle.alpha = 0;
stage.addChild(circle);

circle.addEventListener('click',function(evt){
	circle.scaleX = circle.scaleY = 2;
});

createjs.Tween.get(circle).to({alpha: 1}, 500).wait(1000).to({x: 500}, 1000).call(function(){
	console.log('animatin end');
	createjs.Tween.get(rect).to({x:400},1000,createjs.Ease.bounceOut);
});

var rect = new createjs.Shape();
rect.graphics.beginFill("#00FFFF").drawRect(0,0,30,10);
rect.x = 100;
rect.y = 300;
stage.addChild(rect);

createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",function(evt){

	stage.update();
});
