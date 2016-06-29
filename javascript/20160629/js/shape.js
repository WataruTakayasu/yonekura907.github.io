
// stage
var stage = new createjs.Stage("canvasEl");

var circle = new createjs.Shape();
circle.graphics.beginFill("#FF0000").beginStroke("#00FF00").setStrokeStyle(5).drawCircle(0, 0, 40);

circle.x = 200;
circle.y = 250;

stage.addChild(circle);

var rect = new createjs.Shape();
rect.graphics.beginFill("#00FFFF").drawRect(0,0,30,10);
rect.x = 100;
rect.y = 300;
rect.aplha = 0.5;
rect.rotation = 45;
rect.scaleX = 2;
rect.scaleY = 2;
stage.addChild(rect);

createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.setFPS(30);

createjs.Ticker.addEventListener('tick',function(){
  stage.update();
});
