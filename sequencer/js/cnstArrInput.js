// BPM 120
var bpm = 120;

// 文字インスタンス用の配列
var typeArr = [];

// 文字の座標を管理する配列
var typePosArr = [0];


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
  createCanvas(3800, 800); //Canvasの生成
  frameRate( (bpm * 4) / 60); // BPMをフレームレートに換算

  // input タグの生成
  var inp = createInput('');
  inp.position(10, 10);

  // スタートボタンの生成
  var startBtn = createButton('start');
  startBtn.position(390, 10);
  startBtn.mousePressed(function(){
    loop(); // drawループ開始
  });

  // 停止ボタンの生成
  var stopBtn = createButton('stop');
  stopBtn.position(460, 10);
  stopBtn.mousePressed(function(){
    noLoop(); // drawループ停止
  });

  // msgBtnボタンの生成
  var msgBtn = createButton('message');
  msgBtn.position(260, 10);
  msgBtn.mousePressed(function(){
    // フォームの値を関数setSeqに渡す
    var msg = inp.value();
    setSeq(msg);
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


function setSeq(aMsg) {
  // 受け取った文字列を分割して配列に保存
  var strArr = aMsg.split('');

  for (var cnt = 0; cnt < strArr.length; cnt++) {
    for (var key in alphabet) {
      if(key == strArr[cnt]) {
        typeArr[cnt] = new Sequencer(alphabet[key],cnt);
      }
    }
  }
  console.log(typeArr);
  console.log(typePosArr);
}


// シーケンサー文字用コンストラクタ関数
function Sequencer(aAlphabet, aTypeCount){
  this.init(aAlphabet, aTypeCount);
}


Sequencer.prototype.init = function(aAlphabet, aTypeCount){
  // dotの座標をオブジェクトから持ってくる
  this.pos = aAlphabet.pos
  // dotのlength;
  this.alphabetLength = aAlphabet.pos.length;
  // シーケンス用配列
  this.sqArr = [];
  // ループカウント
  this.loopCount = 0;
  //何文字目か
  this.typeCount = aTypeCount;


  //インスタンスのX座標を配列typePosArrに登録
  if(this.typeCount !== 0){
    this.Xpos = typePosArr[this.typeCount] + aAlphabet.width;
  } else {
    this.Xpos = aAlphabet.width;
  }
  typePosArr.push(this.Xpos);


  // 16個分、配列に0を並べる
  for (var i = 0; i < this.alphabetLength; i++) {
    this.sqArr[i] = 0;
  }
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
    this.btnArr[i].touchEnded(function(){
      // console.log(this.elt.id);
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

  // シーケンス用配列のループカンター番目の値が1なら
  if(this.sqArr[this.loopCount] == 1){
    console.log('play');
    soundArr[this.typeCount].play();　// 再生
  }
}
