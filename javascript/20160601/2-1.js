console.log('読み込んだよ');

var ballObj = document.querySelector('#ball');
console.log(ballObj);
ballObj.style.backgroundColor = '#FF0000';

// #btnの取得
var btnEl = document.querySelector('#btn');

// クリックイベント
btnEl.addEventListener('click',getColor);

// 色の値を取得する関数
function getColor(){
  // インプットの値の取得
  var colorCode = document.querySelector('#color-input').value;
  console.log(colorCode);
  setColor(colorCode)
}
// 色を塗る関数
function setColor(aColorCode){
  ballObj.style.backgroundColor = aColorCode;
}





// 関数
function changeColor(){

  ballObj.style.backgroundColor = '#0000FF';
}
