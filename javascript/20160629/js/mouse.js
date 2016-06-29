
// stage
var stage = new createjs.Stage("canvasEl");
var stageWidth = $("#canvasEl").width();
var stageHeight = $("#canvasEl").height();

// ドラッグした場所を保存する変数
var dragPointX;
var dragPointY;

var circle = new createjs.Shape();
circle.graphics.beginFill("red").drawCircle(0, 0, 40);
circle.x = 150;
circle.y = 50;
circle.alpha = 1;
stage.addChild(circle);

// インタラクティブの設定
circle.addEventListener("mousedown", handleDown);
circle.addEventListener("pressmove", handleMove);
circle.addEventListener("pressup", handleUp);

// ボールを押したときの処理です
function handleDown(event) {
  // ドラッグを開始した座標を覚えておく
  dragPointX = stage.mouseX - circle.x;
  dragPointY = stage.mouseY - circle.y;
  // ボールを半透明にする
  circle.alpha = 0.5;
}
// ボールを押した状態で動かしたときの処理です
function handleMove(event) {
  // ボールはマウス座標に追随する
  // ただしドラッグ開始地点との補正をいれておく
  circle.x = stage.mouseX - dragPointX;
  circle.y = stage.mouseY - dragPointY;
}
// ボールからマウスを離したときの処理です
function handleUp(event) {
  // ボールを元の透明度に戻す
  circle.alpha = 1.0;
}



var rect = new createjs.Shape();
rect.graphics.beginFill("#00FFFF").drawRect(0,0,30,10);
rect.x = 100;
rect.y = 300;
stage.addChild(rect);
rect.addEventListener('click',function(evt){
	rect.scaleX = rect.scaleY = 2;
});


createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener("tick",function(evt){

	stage.update();
});
