// windowサイズ
var windowWidth = 800;

// #dinoを取得
var dinoEl = document.querySelector('#dino');

// 初期X座標
var posX = dinoEl.offsetLeft;
console.log(posX);

// インターバル関数を保存する変数
var timer;

// dinoEl.addEventListener('click',function(evt){
//   posX += 10;
//   console.log(evt);
//   dinoEl.style.left = posX + 'px';
// });
// 左右移動の関数 ----------------------
var moveLeft = function(){
  posX -= 10;
  console.log(posX);
  dinoEl.style.left = posX + 'px';

  if(posX < -200){
    posX = windowWidth;
  }
}

var moveRight = function(){
  posX += 10;
  console.log(posX);
  dinoEl.style.left = posX + 'px';
}


// ボタンイベント ----------------------
var leftBtn = document.querySelector('#left-btn');
leftBtn.addEventListener('click',moveLeft);

var rightBtn = document.querySelector('#right-btn');
rightBtn.addEventListener('click',moveRight);


var leftAnimeBtn = document.querySelector('#left-anime-btn');
leftAnimeBtn.addEventListener('click',function(){
  timer = setInterval(moveLeft,500);
});

var rightAnimeBtn = document.querySelector('#right-anime-btn');
rightAnimeBtn.addEventListener('click',function(){
  console.log('right Anime');
  timer = setInterval(moveRight,500);
});

var stopBtn = document.querySelector('#stop-btn');
document.querySelector('#stop-btn').addEventListener('click',function(){
  clearInterval(timer);
});
