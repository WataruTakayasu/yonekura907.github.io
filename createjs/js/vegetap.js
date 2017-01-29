// window を読み込んだら
window.addEventListener("load", init);


// 画像を保存する配列
var manifest = [
    'img/ground.png',
    'img/header.png',
    'img/logo.png',
    'img/vitaminC.png',
    'img/iron.png'
];



function init(){

	// ステージを作成
	var stage = new createjs.Stage("canvasEl");

    // loadQueueクラス
    var loadQueue = new createjs.LoadQueue();

    // 読み込み開始
    loadQueue.loadManifest(manifest);

    // 全部読み込み終わったら
    loadQueue.addEventListener("complete", function(){
        console.log('読み込み完了');
        addBitmap();
        addSprite();
    });


	// ビットマップ
	function addBitmap(){
		var ground = new createjs.Bitmap(manifest[0]);
		stage.addChild(ground);
		ground.y = 550;
		ground.scaleX = 0.5;
		ground.scaleY = 0.5;

		var header = new createjs.Bitmap(manifest[1]);
		stage.addChild(header);
		header.scaleX = 0.5;
		header.scaleY = 0.5;

		var logo = new createjs.Bitmap(manifest[2]);
		stage.addChild(logo);
		logo.x = 210;
		logo.y = 100;
		logo.scaleX = 0.5;
		logo.scaleY = 0.5;
		logo.alpha = 0;

		createjs.Tween.get(logo).to({alpha: 1}, 1000);
	}


    // スプライトシート
    function addSprite(){
        // ビタミンC
        var vcsprite = new createjs.SpriteSheet(vitaminCSprite);
        var vitaminC = new createjs.Sprite(vcsprite,'stand');
        // stage.addChildAt(2,vitaminC);
        vitaminC.x = 150;
        vitaminC.y = 480;
        vitaminC.alpha = 0;
        stage.addChild(vitaminC);

        createjs.Tween.get(vitaminC).to({alpha: 1}, 500).wait(1000).call(vitaminCWalk).to({x: 500}, 4000).call(vitaminCStop);

        vitaminC.addEventListener('click',function(evt){
        // console.log(evt.target);
            charaJump(evt.target);
        });


        function vitaminCWalk(){
            vitaminC.gotoAndPlay('walk');
        }

        function vitaminCStop(){
            vitaminC.gotoAndPlay('stop');
        }

        // 鉄分
        var irsprite = new createjs.SpriteSheet(ironSprite);
        var iron = new createjs.Sprite(irsprite,'stand');
        iron.x = 0;
        iron.y = 480;
        iron.alpha = 0;
        stage.addChild(iron);


        createjs.Tween.get(iron).to({alpha: 1}, 500).wait(1500).call(ironWalk).to({x: 650}, 4000).call(ironStop);

        function ironWalk(){
            iron.gotoAndPlay('walk');
        }

        function ironStop(){
            iron.gotoAndPlay('stop');
        }

        iron.addEventListener('click',function(evt){
            // console.log(evt.target);
            charaJump(evt.target);
        });

        function charaJump(target){
            console.log('jump' + target);
            createjs.Tween.get(target).to({y: 400},  500, createjs.Ease.quartOut).to({y: 480}, 300, createjs.Ease.quartOut);
        }

        //  レイヤー
        // stage.setChildIndex(vitaminC,1);

        // stage.update();
    }


	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
	createjs.Ticker.setFPS(30);

    createjs.Ticker.addEventListener('tick',function(){
        stage.update();
    });

};
