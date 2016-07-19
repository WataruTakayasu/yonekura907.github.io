//グローバル関数
var stage;
var homeContainer;
var illContainer;
var pageCount = 0;

$(function(){
	init();
});

// 初期設定
function init(){
	//ステージ作成
	stage = new createjs.Stage("homeCanvas");
	//タッチ対応           //変数
	createjs.Touch.enable(stage);
	// トップページを実行
	homeShow();
}


// トップページ
function homeShow(){
	// homeContainerというグループをつくる。
	homeContainer = new createjs.Container();
	stage.addChild(homeContainer);
	homeContainer.alpha = 0;

	// プリロード
	var preload = new createjs.LoadQueue(false);
	preload.loadManifest(targetUrl[0].imgData);

	// １個ずつの読み込みイベント
	preload.on('fileload',function(e){
		// console.log(e);
		showCanvas(e);
	});
	// 全部の読み込み完了
	preload.on('complete',function(e){
		console.log('complete!!!!');
		createjs.Tween.get(homeContainer).to({alpha:1},1000);
	});

	// ページカウントを１ふやす
	pageCount++;

}

//ajax用の関数
// function changeContent(target){

// 	$.ajax({
// 		type:"GET",
// 		url:target.url,
// 		dataType:"html",
// 		success:function(data){
// 			console.log(data);

// 			//targetUrlからcanvasのid名をとってきた
// 			var canvasId = target.canvasId;
// 			//data(html)の中からid名がcanvasId(#homeCanvas)を取る
// 			var loadCanvas = $(data).find("[id = "+canvasId+"]");
// 										//htmlのid  //変数のid
// 				console.log("loadCanvas");
// 				//containerに追加
// 				$(".container").append(loadCanvas);

// 				//イラスト配置の関数に引き継ぐ
// 				showCanvas(target);

// 		},
// 		err:function(){
// 		 console.log("ajax error !!!!");
// 		}
// 	});

// }


var ill = [];//画像用の配列の受け皿
var illCount = 0;

function showCanvas(e){
	
	console.log(e.item.src);
	console.log(illCount);

	ill[illCount] = new createjs.Bitmap(e.item.src);

	homeContainer.addChild(ill[illCount]);
	ill[illCount].scaleX = 0.5;
	ill[illCount].scaleY = 0.5;		
	ill[illCount].x = e.item.x;
	ill[illCount].y = e.item.y;

	illCount ++; //1ずつ足す	
	
	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.on('tick',updateStage);
	function updateStage(){
		stage.update();
	}
}





