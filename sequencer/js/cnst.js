// スマホから受け取る文字列
var smtStr = ['a','h'];


// ループカウント
var loopCount = 0;
var loopCountMax = alphabet.h.pos.length;



// UIボタン
var bpmSlider; // BPMスライダ
var startBtn; // スタートボタン
var stopBtn; // ストップ
// var btnArr = []; // 入力ボタン用配列

// 読み込むサウンド用配列
var sounds = [];

// 音データのプリロード
function preload() {
  for (var i = 0; i < soundData.length; i++) {
    sounds[i] = loadSound(soundData[i]);
  }
}


// 初期設定
function setup() {

  createCanvas(800, 800); //Canvasの生成
  // background(255); //初期の背景色

  // 初期はループ停止
  // noLoop();

  // BPM 初期値120
  // bpmSlider = createSlider(40, 200, 120); // スライダの作成
  // bpmSlider.position(90, 18); // スライダの位置


  // A1サウンドのボリューム
  // A1.setVolume(0.8);


  // 16個分、配列に0を並べる
  for (var i = 0; i < sqCount; i++) {
    sqArr[i] = 0;
  }

  // 入力ボタンの生成
  for (var i = 0; i < sqCount; i++) {
    btnArr[i] = createDiv(i); //<div>の生成
    btnArr[i].id(i); //<div>のidにi番を設定
    btnArr[i].class('btn'); //<div>のclassにbtn番を設定
    btnArr[i].position(alphabet.h[i].x -20, alphabet.h[i].y -20); //<button>の位置
    btnArr[i].mousePressed(function(e){
       //<button>を押した時のイベント
      console.log(this.elt.id);
      changeInput(this.elt.id);
    });
  }

  // シーケンサーの設置
  setSq();


  // スタートボタンの生成
  startBtn = createButton('start');
  startBtn.position(50, 600);
  startBtn.mousePressed(startLoop);

  // 停止ボタンの生成
  stopBtn = createButton('stop');
  stopBtn.position(100, 600);
  stopBtn.mousePressed(stopLoop);

}


// ループ関数
function draw(){

  // console.log(sqArr);
  background(255);

  // BPMスライダー値の取り出し
  // bpmValue = bpmSlider.value();
  // console.log(bpmValue);
  frameRate( (120 * 4) / 60);　// BMPをフレームレートに変換

  // シーケンサーの設置
  setSq();

  // シーケンス用配列のループカンター番目の値が1なら
  if(sqArr[loopCount] !== 0){
    console.log('play');
     A1.play();　// 再生
  }
  // ループカンターをインクリメント
  loopCount++;
  // ループカウンターの数がシーケンス用配列の最大になったら
  if(loopCount >= sqArr.length){
    loopCount = 0; //ループカンターを0に戻す
  }
}


function Sequencer(aAlphabet, aX, aY){
  this.init(aAlphabet, aX, aY);
}

Sequencer.prototype.init = function(aAlphabet, aX, aY){
  this.x = aX;
  this.y = aY;
  this.alphabet = aAlphabet;

  // シーケンス用配列
  this.sqArr = [];
  // 16個分、配列に0を並べる
  for (var i = 0; i < aAlphabet.pos.length; i++) {
    this.sqArr[i] = 0;
  }

  // イベント内でthisを使うので配列を一旦変数に保存
  var thatSqArr = this.sqArr;


}




// シーケンサーの設置
function setSq(){
  // console.log(loopCount);
  // console.log(sqArr[loopCount]);

  // シーケンサー用の円の配置
  for (var i = 0; i < sqCount; i++) {
    noStroke(); //線なし
    // シーケンス用配列の値が0なら
    if(sqArr[i] == 1){
      fill(255, 150, 0); // 塗りはオレンジ
    } else {
      fill(200); // 塗りはグレー
    }
    // ループカウンターと円のi番目が一致したら
    if(i == loopCount) {
      // 赤く塗られる
      fill(255, 0, 0);
    }
    // 円の配置
    ellipse(alphabet.h[i].x, alphabet.h[i].y, 40, 40);
    // ellipse(50*i + 50, 100, 40, 40);
  }
}


// インプット入力の値をシーケンス用配列に設定する
function changeInput(value) {
  console.log(value+'click');
  if( sqArr[value] == 0 ){
    // トグル　現状の値が0なら1を設定
    sqArr[value] = 1;
  } else {
    sqArr[value] = 0;
    // トグル　現状の値が1なら0を設定
  }
  setSq(); // シーケンサーの設置
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
