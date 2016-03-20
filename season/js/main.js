//アジェンダ

//01 init()初期化 全体をくるんでいる
//02-- addStage containerを作ってbitmapとspriteを分離している
//03-- addBitmap bitmapの配置をしている
//04-- addSprite spriteの配置をしている
//05-- addSeed seedくんのspriteを配置している
//05-01-- -- mousedownのイベント
//05-02-- -- pressmoveのイベント
//05-03-- -- pressupのイベント
//06-- Ticker 描画の更新



// シードスプライトシート用のオブジェクト
var seedSprite = {
    images:['img/seed.png'],
    frames:{width:314,height:466},
    animations:{
        stand:20,
        leftwalk:[0,9],
        rightwalk:[10,19]
    }
}



//グローバル変数-------------------------------------------------------
var stage;
// 大地を配置するコンテナー
var container;
// 背景の大きさ
var fieldWidth = 3072;
var fieldHeight = 1536;

var canvasWidth = 1024;
var canvasHeight = 768;

// 中心の座標を入れた変数
var centerX = canvasWidth/2;
var centerY = canvasHeight/2;
//イラストを保存する配列
var illArr = [];


var angle;
var speed;
var floatHeight;
var radius;
var middlePos;
var p;
var seedVector = true;


var seedVector = 'nutral';
var isPlay = 0;

// ウィンドウのロード
window.addEventListener('load',init);



// 01 ステージの設定----------------------------------------------
function init(){
    // ステージ
    stage = new createjs.Stage('canvas');

    // タッチ対応
    if(createjs.Touch.isSupported() == true){
        createjs.Touch.enable(stage);
    }


    // ローダー設定
    var loadQueue = new createjs.LoadQueue();

    //音のロード機能を追加
    loadQueue.installPlugin(createjs.Sound);

    // ローディングスタート
    loadQueue.loadManifest(model);
    // 全部読み込み終わったら
    loadQueue.addEventListener('complete',function(){
        console.log('読み込み完了しました');
        addStage();
    });
};


    // 02 ステージ----------------------------------------------
function addStage(){
    //console.log('addStageよばれたよ');
    // 大地のグループ
    container =new createjs.Container();
    stage.addChild(container);

    container.regX = fieldWidth/2;
    container.regY = fieldHeight/2;
    container.x = centerX;
    container.y = centerY;

    for(var i = 0; i < model.length; i++){

        if(model[i].targetData){
            addhitArea(model[i].targetData,i)
        }

        if(model[i].type == 'sound'){
                createjs.Sound.registerSound(model[i].src,model[i].name);
        }

        if(model[i].type == 'bitmap'){
        //ビットマップ
        //console.log('bitmapを配置する');
        addBitmap(model[i],i);
    }else if(model[i].type == 'sprite'){
        //console.log('spriteを配置する');
        addSprite(model[i],i);
        }
    }

    //シードくんを配置
    addSeed();


    // createjs.Sound.registerSound(model[0].src,'field');
    //fieldに流れる音楽
    var fieldSound = createjs.Sound.play('field',{loop:-1});
    fieldSound.volume = 0;
    createjs.Tween.get(fieldSound).to({volume:0.3},1000);
}

    // 03 ビットマップの配置----------------------------------------------
function addBitmap(data,i){
    // console.log('bitmap: ' + data);
    illArr[i] = new createjs.Bitmap(data.src);
    container.addChild(illArr[i]);
    illArr[i].x = data.x;
    illArr[i].y = data.y;
    illArr[i].regX = data.regX;
    illArr[i].regY = data.regY;
    illArr[i].scaleX = illArr[i].scaleY = 0.5;
    illArr[i].alpha = data.alpha;
    // startAnimeを持っているのだけが呼ばれる
    if(data.startAnime){
        data.startAnime(illArr[i]);
    }






}

// 04 スプライトの配置----------------------------------------------
// spriteの受け取り用配列
var spriteSheetArr =[];
var spriteCount = 0;
//spriteの配置
function addSprite(data,i){
    // console.log('sprite:' + data);
    spriteSheetArr[spriteCount] = new createjs.SpriteSheet(data.spriteData);
    illArr[i] = new createjs.Sprite(spriteSheetArr[spriteCount],'stand');
    container.addChild(illArr[i]);
    illArr[i].x = data.x;
    illArr[i].y = data.y;
    illArr[i].regX = data.regX;
    illArr[i].regY = data.regY;
    illArr[i].scaleX = illArr[i].scaleY = 0.5;
    illArr[i].alpha = data.alpha;
    // startAnimeを持っていたら呼ばれる
    if(data.startAnime){
        data.startAnime(illArr[i]);
    }
    spriteCount++;
}



//05 ヒットエリア_赤丸______________________________________
var hitPoint = []; //赤丸を保存している配列
var hitCount = 0; //赤丸の数

function addhitArea(aTargetData,num){
    hitPoint[hitCount] = new createjs.Shape();
    hitPoint[hitCount].graphics.beginFill('#FF0000').drawCircle(0,0,aTargetData.radius);
    container.addChild(hitPoint[hitCount]);
    hitPoint[hitCount].x = aTargetData.x;
    hitPoint[hitCount].y = aTargetData.y;
    hitPoint[hitCount].alpha = 0; //赤丸の透明度
    hitPoint[hitCount].targetNum = num;
    hitPoint[hitCount].flag = false;
    hitCount++;
}

    // 05 seedくんの配置----------------------------------------------
// ステージにseedくんのイラストを配置する
function addSeed(){
    // シードをステージに配置
    var seedSp = new createjs.SpriteSheet(seedSprite);
    var seed = new createjs.Sprite(seedSp,'stand');
    stage.addChild(seed);
    // 中心座標をずらす
    seed.regX = 157;
    seed.regY = 233;
    seed.scaleX = seed.scaleY = 0.5;
    seed.x = centerX;
    seed.y = centerY;
    seed.alpha = 0;

    startPos = seed.y;
    floatHeight = 0;
    p = Math.PI / 180;
    // 初期角(ラジアン)
    angle = -90 * p;
    speed = 4;
    radius = 40;
    middlePos = startPos - radius;


    console.log(illArr[78]);

    illArr[78].addEventListener('click',function(evt){

        createjs.Tween.get(illArr[77]).to({alpha:0},1000);
        createjs.Tween.get(evt.target).to({alpha:0},1500).call(function(){
            createjs.Tween.get(illArr[76]).wait(2000).to({alpha:0},1000).call(function(){
                createjs.Tween.get(illArr[75]).wait(3500).to({alpha:0},100);
            }).call(function(){
                createjs.Tween.get(seed).wait(200).to({alpha:1},200);
            });

        });
    });



    // またぐようの変数
    var transX = centerX;
    var transY = centerY;


    // 05-01 mousedown----------------------------------------------
    // マウスを押したら左右に歩く
    seed.addEventListener('mousedown',function(evt){
        isPlay = false;
    });

    var flg = false;


    function chgVector(vector){
        console.log('seedVector' + vector);

        if(vector === 'left'){
            if(isPlay !== 1){
                seed.gotoAndPlay('leftwalk');
                isPlay = 1;
            }
        }
        if(vector == 'right'){
            if(isPlay !== 2){
                seed.gotoAndPlay('rightwalk');
                isPlay = 2;
            }
        }
    }

    // 05-02 ドラッグしているとき(ここに動作を入れる)----------------------------------------------
    var temp = {x:0,y:0};

    seed.addEventListener('pressmove',function(evt){

        // シードくんの現在地・指の現在地
        evt.currentTarget.x = evt.stageX;
        evt.currentTarget.y = evt.stageY;
        // ヒント
        container.x = container.x + (centerX - evt.currentTarget.x)/80;
        container.y = container.y + (centerY - evt.currentTarget.y)/80;

        // 中心点からシードくんの現在地を引いた距離tranceX,tranceYを出す
        transX = evt.currentTarget.x - centerX;
        transY = evt.currentTarget.y - centerY;


        var diffx = temp.x - evt.currentTarget.x;
        if(0 < diffx){
            seedVector = 'left';
        }
        else{
            seedVector = 'right'
        }

        chgVector(seedVector);

        //1つ前の位置を保持する
        temp.x = evt.stageX;
        temp.y = evt.stageY;


        // console.log(tranceX);

        //seedくんとターゲットの距離を保存する配列
        var pointArr = [];

        // seedくんとターゲットの判定を保存する配列
        var isHitArr =[];

        for (var i = 0; i < hitPoint.length; i++) {
            // seedくんとターゲットの距離を保存する変数
            pointArr[i] = evt.target.localToLocal(157,232,hitPoint[i]);
            // // seedくんとターゲットが当たったか判定
            isHitArr[i] = hitPoint[i].hitTest(pointArr[i].x,pointArr[i].y);

            if(isHitArr[i] == true && hitPoint[i].flag == false){
                console.log('当たったよ');
                hitPoint[i].flag = true;
                model[hitPoint[i].targetNum].hitAnime(illArr[hitPoint[i].targetNum]);
            }
            if(isHitArr[i] == false && hitPoint[i].flag == true){
                console.log('はずれたよ')
                hitPoint[i].flag = false;
            }
        }
    }); //ドラッグしているとき



    // 05-03 離した時----------------------------------------------
    seed.addEventListener('pressup',function(evt){
        // 手を離した時のシードくん
        createjs.Tween.get(evt.target).to({x:centerX,y:centerY},1000);
        // 手を離した時の背景
        createjs.Tween.get(container).to({x:container.x - transX,y:container.y - transY},1000);
        seed.gotoAndPlay('stand');
    });

    window.seed = seed;

};


// 06 描画の更新----------------------------------------------
createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;
createjs.Ticker.setFPS(30);
createjs.Ticker.addEventListener('tick',function(){

    if(window.seed){
        angle += p * speed;
        floatHeight = radius * Math.sin(angle) - middlePos;
        seed.y = -floatHeight;
    }

    stage.update();
});
