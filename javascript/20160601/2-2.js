// 1.画像の名前を入力して表示させる
// 2.恐竜がいっきに4体出る

// 変数で#containerを取得
var containerEl = document.querySelector('#container');

// イベント　クリック
var btnEl = document.querySelector('#btn');
btnEl.addEventListener('click',getName);


function getName(){
  var imgName = document.querySelector('#input-name').value;
  addImg(imgName);
}

// 画像を配置する関数
function addImg(aName){
  console.log('addImgが呼ばれたよ');
  // imgタグを生成
  var imgEl = document.createElement('img');
  // src属性に画像を追加
  imgEl.setAttribute('src','img/'+aName+'.png');
  // #containerの中に追加
  containerEl.appendChild(imgEl);
}
