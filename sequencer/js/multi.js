// 読み込むサウンド用配列
var sounds = [];

// 読み込むサウンド用データ
var soundData = [
  // 'audio/casio/sample.mp3',
	// 'audio/casio/Cs2.mp3',
	// 'audio/casio/E2.mp3',
	// 'audio/casio/Fs2.mp3'
  'audio/505/kick.mp3',
  'audio/505/snare.mp3',
  'audio/505/hh.mp3',
  'audio/505/agogoLow.mp3',
]

// ループカウント
var loopCount = 0;

// シーケンサー配列の数
var sqCount = 16;

// BPM 120
var bpm = 120;

// UIボタン
var bpmSlider; // BPMスライダ
var bpmText // BPM用テキスト
var startBtn; // スタートボタン
var stopBtn; // ストップ

// シーケンサー用インスタンスの変数
var a, csharp, e, fsharp;

// 音データのプリロード
function preload() {
  for (var i = 0; i < soundData.length; i++) {
    sounds[i] = loadSound(soundData[i]);
  }
}


// 初期設定
function setup() {

  createCanvas(900, 900); //Canvasの生成

  // 初期はループ停止
  // noLoop();

  // BPMをフレームレートに換算
  frameRate( (bpm * 4) / 60);

  // スタートボタンの生成
  startBtn = createButton('start');
  startBtn.position(50, 20);
  startBtn.mousePressed(startLoop);

  // 停止ボタンの生成
  stopBtn = createButton('stop');
  stopBtn.position(100, 20);
  stopBtn.mousePressed(stopLoop);

  a = new Sequencer(50, 50, sounds[0]);
  csharp = new Sequencer(50, 100, sounds[1]);
  e = new Sequencer(50, 150, sounds[2]);
  fsharp = new Sequencer(50, 200, sounds[3]);

}


// ループ関数
function draw(){
  // console.log(sqArr);
  background(255);

  a.set();
  csharp.set();
  e.set();
  fsharp.set();

  // ループカンターをインクリメント
  loopCount++;

  // ループカウンターの数がシーケンス用配列の最大になったら
  if(loopCount >= sqCount){
    loopCount = 0; //ループカンターを0に戻す
  }
}



// シーケンサー・クラス
function Sequencer(aX,aY,aSound){
  this.init(aX,aY,aSound);
}

Sequencer.prototype.init = function(aX,aY,aSound){
  this.x = aX;
  this.y = aY;
  this.sound = aSound;

  // A1サウンドのボリューム
  this.sound.setVolume(0.8);

  // シーケンス用配列
  this.sqArr = [];
  // 16個分、配列に0を並べる
  for (var i = 0; i < sqCount; i++) {
    this.sqArr[i] = 0;
  }

  // イベント内でthisを使うので配列を一旦変数に保存
  var thatSqArr = this.sqArr;

  this.btnArr = []; // 入力ボタン用配列
  // 入力ボタンの生成
  for (var i = 0; i < this.sqArr.length; i++) {
    this.btnArr[i] = createDiv(i); //<button>の生成
    this.btnArr[i].id(i); //<button>のvalueにi番を設定
    this.btnArr[i].class('btn'); //<button>のvalueにi番を設定
    this.btnArr[i].position(50 * i + this.x -20, this.y + 50); //<button>の位置

    //<button>を押した時のイベント
    this.btnArr[i].mousePressed(function(){
      console.log(this.elt.id);

        if( thatSqArr[this.elt.id] == 0 ){
          // トグル　現状の値が0なら1を設定
          thatSqArr[this.elt.id] = 1;
        } else {
          thatSqArr[this.elt.id] = 0;
          // トグル　現状の値が1なら0を設定
        }

      // this.changeInput(this.elt.id);
    });
  }
}


Sequencer.prototype.changeInput = function(aValue){

  console.log(aValue + 'click');

  // if( thatSqArr[aValue] == 0 ){
  //   // トグル　現状の値が0なら1を設定
  //   thatSqArr[aValue] = 1;
  // } else {
  //   thatSqArr[aValue] = 0;
  //   // トグル　現状の値が1なら0を設定
  // }
}


Sequencer.prototype.set = function(){

  // console.log(this,loopCount);
  // console.log(sqArr[loopCount]);

  // シーケンサー用の円の配置
  for (var i = 0; i < this.sqArr.length; i++) {
    noStroke(); //線なし

    // シーケンス用配列の値が0なら
    if(this.sqArr[i] == 0){
      fill(200); // 塗りはグレー
    } else {
      // シーケンス用配列の値が1なら
      fill(255, 150, 0); // 塗りはオレンジ
    }

    // ループカウンターと円のi番目が一致したら
    if(i == loopCount){
      fill(255, 0, 0);   // 赤く塗られる
    }
    // 円の配置
    ellipse(50*i + this.x, this.y+70, 40, 40);
  }

  // シーケンス用配列のループカンター番目の値が1なら
  if(this.sqArr[loopCount] !== 0){
    // console.log('play');
    this.sound.play();　// 再生
  }

}


// ストップボタンを押した時の停止
function stopLoop() {
  console.log('停止');
  noLoop(); // drawループ停止
}


// スタートボタンを押した時の再生
function startLoop(){
  console.log('再生');
  loop(); // drawループ開始
}
