// グローバル関数
var pageCount = 0;


$(function(){
	init();
});


function init(){

	changeContent(targetUrl[pageCount]);
}


// ajax用の関数
function changeContent(target){

	$.ajax({
		type:"GET",
		url:target.url,
		dataType:"html",
		success:function(data){
			// targetUrlからcanvasのid名を取ってきた
			var canvasId = target.canvasId;
			// data(html)の中からid名がcanvasId(#homeCanvas)を取る
			var loadCanvas = $(data).find("[id="+canvasId+"]");
			console.log(loadCanvas);
			// .containerに追加
			$(".container").append(loadCanvas);

			// イラスト配置の関数に受け継ぐ
			showCanvas(target);

		},
		err: function(){
			console.log("ajax error !!!!!");
		}
	});

}


function showCanvas(target){

		// ステージ
	var stage = new createjs.Stage(target.canvasId);
	// touch
	createjs.Touch.enable(stage);


	// プリロード
	var preload = new createjs.LoadQueue(false);
	preload.loadManifest(target.imgData);
	// ロード中
	preload.on("fileload",loadImg);

	// 画像用の配列
	var ill = [];
	var illCount = 0;

	function loadImg(e){

		console.log(e.item);
		ill[illCount] = new createjs.Bitmap(e.item.src);
		stage.addChild(ill[illCount]);
		ill[illCount].scaleX = ill[illCount].scaleY = 0.5;
		ill[illCount].x = e.item.x;
		ill[illCount].y = e.item.y;

		// 1ずつ足す
		illCount++;

		stage.update();
	}
	// ロード完了
	preload.on("complete",compImg);
	function compImg(){
		$("#homeCanvas").fadeIn();
		$("#startBtn").fadeIn();
	}

}

























