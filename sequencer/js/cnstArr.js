// スマホから受け取る文字列
var msgArr = ['a','h'];


var typeCount = 0;
var typePosArr = new Array();
typePosArr[0] = 0;
console.log(typePosArr);

// var count = 0;
// _.each(alphabet,function(v){
//   typePosArr[count] = v.width;
//   count++;
// });

// console.log(typePosArr);


var typeArr = [];


// BPM 120
var bpm = 120;



// 読み込むサウンド用配列
var soundArr = [];




// 音データのプリロード
function preload() {
  soundData = _(soundData).shuffle();
  console.log(soundData);
  for (var i = 0; i < soundData.length; i++) {
    soundArr[i] = loadSound(soundData[i]);
  }
}


// 初期設定
function setup() {

  createCanvas(1800, 800); //Canvasの生成

  // BPMをフレームレートに換算
  frameRate( (bpm * 4) / 60);


  // スタートボタンの生成
  var startBtn = createButton('start');
  startBtn.position(50, 10);
  startBtn.mousePressed(startLoop);

  // 停止ボタンの生成
  var stopBtn = createButton('stop');
  stopBtn.position(100, 10);
  stopBtn.mousePressed(stopLoop);

  // aボタンの生成
  var aBtn = createButton('a');
  aBtn.position(150, 10);
  aBtn.mousePressed(function(){
    typeArr[typeCount] = new Sequencer(alphabet.a,typeCount);
    typeCount++;
  });

  // hボタンの生成
  var hBtn = createButton('h');
  hBtn.position(200, 10);
  hBtn.mousePressed(function(){
    typeArr[typeCount] = new Sequencer(alphabet.h,typeCount);
    typeCount++;

  });

}


// ループ関数
function draw(){

  // console.log(sqArr);
  background(255);

  for (var i = 0; i < typeArr.length; i++) {
    if(typeArr[i]){
      typeArr[i].set();
    }
  }
}


function Sequencer(aAlphabet, aTypeCount){
  this.init(aAlphabet, aTypeCount);
}


Sequencer.prototype.init = function(aAlphabet, aTypeCount){

  this.pos = aAlphabet.pos;
  // this.width = aWidth;
  this.alphabetLength = aAlphabet.pos.length;
  this.sqArr = aAlphabet.sqArr;
  this.typeCount = aTypeCount;

  typePosArr.push(aAlphabet.width);

  console.log(typePosArr);
  // console.log(this.typeCount);
  // ループカウント
  this.loopCount = 0;

  // シーケンス用配列
  // this.alphabet.sqArr = [];
  // 16個分、配列に0を並べる
  for (var i = 0; i < this.alphabetLength; i++) {
    this.sqArr[i] = 0;
  }
  // console.log(this.sqArr);

  // イベント内でthisを使うので配列を一旦変数に保存
  var thatSqArr = this.sqArr;

  this.btnArr = []; // 入力ボタン用配列
  // 入力ボタンの生成
  for (var i = 0; i < this.alphabetLength; i++) {
    this.btnArr[i] = createDiv(i); //<div>の生成
    this.btnArr[i].id(i); //<div>のidにi番を設定
    this.btnArr[i].class('btn'); //<div>のclassにbtnを設定
    this.btnArr[i].position(this.pos[i].x-40 + typePosArr[this.typeCount], this.pos[i].y-40);
    // this.btnArr[i].position(50 * i + 50, 100 + this.typeCount*50);


    //<button>を押した時のイベント
    this.btnArr[i].mousePressed(function(){
      console.log(this.elt.id);
      console.log(thatSqArr);

        if( thatSqArr[this.elt.id] == 0 ){
          // トグル　現状の値が0なら1を設定
          thatSqArr[this.elt.id] = 1;
        } else {
          thatSqArr[this.elt.id] = 0;
          // トグル　現状の値が1なら0を設定
        }
    });
  }
}



Sequencer.prototype.set = function(){

  // console.log(this.alphabet.sound);
  // console.log(this.thatSqArr);
  // console.log(sqArr[loopCount]);

  // シーケンサー用の円の配置
  for (var i = 0; i < this.alphabetLength; i++) {
    noStroke(); //線なし

    // シーケンス用配列の値が0なら
    if(this.sqArr[i] == 0){
      fill(200); // 塗りはグレー
    } else {
      // シーケンス用配列の値が1なら
      fill(255, 150, 0); // 塗りはオレンジ
    }
    // ループカウンターと円のi番目が一致したら
    if(i == this.loopCount){
      fill(255, 0, 0);   // 赤く塗られる
    }
    // 円の配置
    ellipse(this.pos[i].x + typePosArr[this.typeCount], this.pos[i].y, 80, 80);
    // ellipse(50*i + 50, 100 + this.typeCount*50, 40, 40);
  }


  // ループカンターをインクリメント
  this.loopCount++;
  // ループカウンターの数がシーケンス用配列の最大になったら
  if(this.loopCount >= this.alphabetLength){
    this.loopCount = 0; //ループカンターを0に戻す
  }

  console.log(this.typeCount);

  // シーケンス用配列のループカンター番目の値が1なら
  if(this.sqArr[this.loopCount] == 1){
    console.log('play');
    soundArr[this.typeCount].play();　// 再生
  }
}

//
// // シーケンサーの設置
// function setSq(){
//   // console.log(loopCount);
//   // console.log(sqArr[loopCount]);
//
//   // シーケンサー用の円の配置
//   for (var i = 0; i < sqCount; i++) {
//     noStroke(); //線なし
//     // シーケンス用配列の値が0なら
//     if(sqArr[i] == 1){
//       fill(255, 150, 0); // 塗りはオレンジ
//     } else {
//       fill(200); // 塗りはグレー
//     }
//     // ループカウンターと円のi番目が一致したら
//     if(i == loopCount) {
//       // 赤く塗られる
//       fill(255, 0, 0);
//     }
//     console.log('this.leng: ' + this.leng);
//     // 円の配置
//     ellipse((this.leng*this.width) + alphabet.h[i].x, alphabet.h[i].y, 40, 40);
//     // ellipse(50*i + 50, 100, 40, 40);
//   }
// }
//
//
// // インプット入力の値をシーケンス用配列に設定する
// function changeInput(value) {
//   console.log(value+'click');
//   if( sqArr[value] == 0 ){
//     // トグル　現状の値が0なら1を設定
//     sqArr[value] = 1;
//   } else {
//     sqArr[value] = 0;
//     // トグル　現状の値が1なら0を設定
//   }
//   setSq(); // シーケンサーの設置
// }


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
