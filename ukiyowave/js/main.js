//windを読み込んだら
$(function(){
	console.log(homeImg);

	//真ん中のタイトル
	var wrapper = $("#wrapper");

	//homeImg配列に音を追加
	homeImg.push("sound/eichanmaster.wav");

	//canvasタグにステージを作る
	var stage = new createjs.Stage("homeCanvas");

	//プリロード
	var preload = new createjs.LoadQueue(false);

	//音のボード機能を追加
	preload.installPlugin(createjs.Sound);

	var shuffleImg = homeImg.shuffle();


	

	//シャッフルした画像をロードし始めた
	preload.loadManifest(shuffleImg);

	//一個ずつ読み込んだときのロードイベント
	preload.on('fileload',function(e){
		console.log(e.item.type);
		
		//ロードしたファイルをtypeで分岐
		if(e.item.type =="image"){
		addImg(e);
		}else if(e.item.type == "sound"){
			playBGM(e);

		}


	});

	//全部が完了したときのロードイベント
	preload.on('complete',function(e){
		wrapper.fadeIn(1000);
		showImg();
	});


	var ill = [];//イラスト用の配列
	var count = 0;//配列用のカウンタ
	//読み込んだ画像を配置する関数
	function addImg(e){
		console.log(e.result);
	//配列illのカウント版に画像を登録
		ill[count] = new createjs.Bitmap(e.result);
		stage.addChild(ill[count]);

		//左上起点で００（中心座標を動かす）
		ill[count].regX = 75;
		ill[count].regY = 75;

		//座標を決める
		//ill[count].x = homeImgPos[count].x;
		//ill[count].y = homeImgPos[count].y;

		//座標ランダムのとき
		ill[count].x = Math.floor(Math.random()*stage.canvas.width);
		ill[count].y = Math.floor(Math.random()*stage.canvas.height);

		ill[count].alpha = 0;



		count++;//カウンタを加算
	}

	var shufflePos = [];
	//画像を表示する関数
	function showImg(){
		shufflePos = ill;
		shufflePos.shuffle();

		for (var i = 0; i < shufflePos.length; i++) {
			createjs.Tween.get(shufflePos[i],{loop:true}).wait(200*i).to({alpha:0.5},1000).wait(4000).to({alpha:0},1000).wait(4000);
		};
	}

	function playBGM(e){
		var bgm = createjs.Sound.play(e.item.src,0,0,2,0,0);//-1は無限ループ
		bgm.setVolume(0);

		createjs.Tween.get(bgm).wait(2000).to({volume:0.5},1000);

		stage.update();
	}


	createjs.Ticker.timingMode = createjs.Ticker.RAF;
	createjs.Ticker.setFPS(30);
	createjs.Ticker.on('tick',updateStage);
	function updateStage(){

		for (var i = 0; i < ill.length; i++) {
			ill[i].y -=1;

			if(ill[i].y< -200){
				ill[i].y = 1000;
			}
		};
		
		stage.update();
	}


});



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

