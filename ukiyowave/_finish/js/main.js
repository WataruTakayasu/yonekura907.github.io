//グローバル関数
var stage;
var homeContainer;

$(function(){
	init();
});

// 初期設定
function init(){
	//ステージ作成
	stage = new createjs.Stage("homeCanvas");
	// トップページを表示
	homeShow();
}

// トップページ
function homeShow(){

	// homeContainerというグループをつくる。
	homeContainer = new createjs.Container();
	stage.addChild(homeContainer);
	homeContainer.setBounds(0,0,800,1600);
	homeContainer.y = 500;

	// var ball1 = new createjs.Shape();
	// ball1.graphics.beginFill("#00FF00").drawRect(0,0,800,1600);
	// homeContainer.addChild(ball1);

	// プリロード
	var preload = new createjs.LoadQueue(false);
	preload.loadManifest(homeImg);


	// 全部の読み込み完了
	preload.on('complete',function(e){
		console.log('complete!!!!');
		addImg();
		createjs.Tween.get(homeContainer,{loop:true}).to({y:-1600},20000).call(function(){

			for (var i = 0; i < homeContainer.children.length; i++) {
				createjs.Tween.get(homeContainer.children[i]).to({alpha:0},1);
			}
		}).wait(1000).call(fadeInHomeImg);
		// 
	});
}
//スタート画像用の配列の受け皿
var ill = [];
function addImg(e){

	var loadImg = homeImg.shuffle();

	for (var i = 0; i < loadImg.length; i++) {
		ill[i] = new createjs.Bitmap(loadImg[i]);
		homeContainer.addChild(ill[i]);
		ill[i].x = homeImgPos[i].x;
		ill[i].y = homeImgPos[i].y;
		ill[i].alpha = 0;
	};
	fadeInHomeImg();
}

function fadeInHomeImg(){
	var imgs = homeContainer.children;
	console.log(imgs);
	imgs.shuffle();
	console.log(imgs);
	for (var i = 0; i < imgs.length; i++) {
		createjs.Tween.get(imgs[i]).wait(200*i).to({alpha:1},1000);
	};
	stage.update();
}


// Arrayにシャッフルを拡張
Array.prototype.shuffle = function() {
	var i = this.length;
	while(i){
		var j = Math.floor(Math.random()*i);
		var t = this[--i];
		this[i] = this[j];
		this[j] = t;
	}
	return this;
}

createjs.Ticker.timingMode = createjs.Ticker.RAF;
createjs.Ticker.setFPS(30);
createjs.Ticker.on('tick',updateStage);
function updateStage(){
	// console.log(addContainer.getBounds());
	
	stage.update();
}

