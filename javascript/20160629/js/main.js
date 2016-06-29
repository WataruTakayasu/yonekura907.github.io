$(function(){

	var bitmapArr = [];
	var bitmapCount = 0;
	var spriteArr = [];
	var spriteSheetArr = [];
	var spriteCount = 0;

	// stage
	var stage = new createjs.Stage("canvasEl");

  // loadQueueクラス
  var loadQueue = new createjs.LoadQueue();


  // 同時に何ファイル読み込むか
  // loadQueue.setMaxConnections(6);

  // 読み込み開始
  loadQueue.loadManifest(vegeManifest);

  // 読み込み状況
  loadQueue.addEventListener('progress',function(evt){
    console.log(evt.progress);
  });

  // ひとつ読み込み終わったら
  loadQueue.addEventListener("fileload", function(evt){
    console.log(evt.result);
    // showStage(evt.result);
  });

  // 全部読み込み終わったら
  loadQueue.addEventListener("complete", function(evt){
    console.log('読み込み完了');
		// addBitmap();
    // addSprite();
		showImg();
  });

	function showImg(){
		for (var i = 0; i < vegeManifest.length; i++) {
			if(vegeManifest[i].spriteData == null){
				// ビットマップ
				bitmapArr[bitmapCount] = new createjs.Bitmap(vegeManifest[i].src);
				stage.addChild(bitmapArr[bitmapCount]);
				bitmapArr[bitmapCount].x = vegeManifest[i].x;
				bitmapArr[bitmapCount].y = vegeManifest[i].y;
				bitmapArr[bitmapCount].id = vegeManifest[i].id;
				bitmapArr[bitmapCount].scaleX = 0.5;
				bitmapArr[bitmapCount].scaleY = 0.5;

				bitmapCount++;

			} else {

			// スプライトシート
		    spriteSheetArr[spriteCount] = new createjs.SpriteSheet(vegeManifest[i].spriteData);
		    spriteArr[spriteCount] = new createjs.Sprite(spriteSheetArr[spriteCount],'stand');
		    stage.addChild(spriteArr[spriteCount]);
				// stage.addChildAt(2,vitaminC);
				spriteArr[spriteCount].x = vegeManifest[i].x;
				spriteArr[spriteCount].y = vegeManifest[i].y;
				spriteArr[spriteCount].alpha = vegeManifest[i].alpha;

				if(vegeManifest[i].startAnime !== null){
					vegeManifest[i].startAnime(spriteArr[spriteCount]);
				}

				spriteCount++;

			}
		}
	}

	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);

  createjs.Ticker.addEventListener('tick',function(){
    stage.update();
  });

});
