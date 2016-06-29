
// stage
var stage = new createjs.Stage("canvasEl");
var stageWidth = $("#canvasEl").width();
var stageHeight = $("#canvasEl").height();

var circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
circle.y = 50;
stage.addChild(circle);


// 星の配置
var star = new createjs.Shape();
star.graphics.beginFill("cyan");
star.graphics.drawPolyStar(0, 0, 40, 5, 0.6, -90);
star.x = stageWidth/2;
star.y = stageHeight/2;
stage.addChild(star);


createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",function(evt){

	circle.x = circle.x + 5;

	if (circle.x > stage.canvas.width + 80 ){
		circle.x = 0;
	};

	star.rotation += 5*evt.delta*30/1000;

	stage.update();
});
