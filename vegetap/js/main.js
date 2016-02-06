
// グローバル変数
var stage;


$(function() {
  init();
});

// DOM要素をグローバル変数にしておく
var homeBtn;
var bookBtn;
var helpBtn;
var picturebook;
var picturebookLi;

// ローカルストレージの設定
var ls = localStorage;
var vegeName = [];
for (var i = 0; i < vegeUrl.length; i++) {
  vegeName[i] = vegeUrl[i].canvasId;
};


// キーをおした時
function setPBStorage(num){
  ls.setItem(vegeName[num],"checked");
  console.log(picturebookLi[0]);
  // if(ls.getItem(ls.key(num))=="checked"){
  $(picturebookLi[num]).find("img").attr("src",vegeUrl[num].pictureBook);
  // }
}

// for (var i = 0; i < picturebookLi.length; i++) {
//   if(ls.getItem(ls.key(i))=="checked"){
//     $(picturebookLi[i]).find("img").attr("src",vegeUrl[i].pictureBook);
//   }
// };

// }

function init(){

  // canvasのステージを設置
  stage = new createjs.Stage("indexCanvas");
  //タッチ対応
  createjs.Touch.enable(stage);

  // jQueryでDOM要素を変数に保存
  homeBtn = $("#homeBtn");
  bookBtn = $("#bookBtn");
  helpBtn = $("#helpBtn");
  help=$("#help");
  picturebook = $("#picturebook");
  picturebookLi = $("#picturebookmain ul li");

  // ホームボタンをクリックしたら、ホームが表示、ベジコンテナを非表示にして削除
  homeBtn.click(function(){
    createjs.Tween.get(homeContainer).to({alpha:1},500);
    createjs.Tween.get(vegeContainer).to({alpha:0},500).call(function(){
      stage.removeChild(this);
    });
    picturebook.fadeOut();
    showHomeBtn(false);
  });

  // ホームボタンをクリックしたら、ホームが表示、ヘルプを非表示
  homeBtn.click(function(){
    createjs.Tween.get(homeContainer).to({alpha:1},500);
    createjs.Tween.get(vegeContainer).to({alpha:0},500);
    help.fadeOut();
    showHomeBtn(false);
  });

  // ヘルプボタンをクリックしたら、ヘルプが表示、ホームを非表示
  helpBtn.click(function(){
    help.fadeIn();
    createjs.Tween.get(homeContainer).to({alpha:0},500);
    createjs.Tween.get(vegeContainer).to({alpha:0},500);
    showhelpBtn(true);
  }); 

  // 図鑑ボタンをクリックしたら、図鑑が表示、ホームを非表示
  bookBtn.click(function(){
    picturebook.fadeIn();
    createjs.Tween.get(homeContainer).to({alpha:0},500);
    createjs.Tween.get(vegeContainer).to({alpha:0},500);
    showHomeBtn(true);
  }); 

  //スタート画面表示
  loadDom();


   console.log(picturebookLi[0]);

  for (var i = 0; i < picturebookLi.length; i++) {
    if(ls.getItem(ls.key(i))=="checked"){
      $(picturebookLi[i]).find("img").attr("src",vegeUrl[i].pictureBook);
    }
  };

}


// 1.DOM要素をロード ----------------------------
function loadDom(){
  //変数がloaderの機能追加
  var preload = new createjs.LoadQueue(false);
  //機能はっきしたい画像指定
  preload.loadManifest(domUrl);
  //ロードイベント//addchildは1回ずつ読み込んでくれる方をしよう
  preload.on("fileload",function(e){
  // console.log(e);
  });

  preload.on("complete",function(e){
    // addHome(imgData,container,visible);
    console.log("loadDom complete!!!!");
    $("header,#indexCanvas").fadeIn();
    loadHome();
  });
}

function showHomeBtn(flag) {
  if(flag == true){
    homeBtn.fadeIn(500,function(){
      flag = false;
    });
  } else if( flag == false){
    homeBtn.fadeOut(500,function(){
      flag = true;
    });
  }
}

// 2.ホーム要素をロード ----------------------------
function loadHome(){
  //変数がloaderの機能追加
  var preload = new createjs.LoadQueue(false);
  //機能はっきしたい画像指定
  preload.loadManifest(homeUrl.imgData);

  //ロードイベント//addchildは1回ずつ読み込んでくれる方をしよう
  preload.on("fileload",function(e){
    // console.log(e);
  });

  preload.on("complete",function(e){
    console.log("loadHome complete!!!!");
    addHome(homeUrl.imgData);
   
  });
}

// 3.ホーム用コンテナを作成して画像を配置 ----------------------------
var homeContainer;
var spriteHome = [];
var illHome = [];

function addHome(data){
  homeContainer =  new createjs.Container();
  stage.addChild(homeContainer);

  for (var i = 0; i < data.length; i++) {
    if(data[i].spriteData == null){
      //スプライトがない時
      illHome[i] = new createjs.Bitmap(data[i].src);
      homeContainer.addChild(illHome[i]);
      illHome[i].scaleX = illHome[i].scaleY = 0.5;
      illHome[i].x = data[i].x;
      illHome[i].y = data[i].y;
      illHome[i].alpha = data[i].alpha;
      if(data[i].startAnime){
        data[i].startAnime(illHome[i]);
      }
    }else{
      spriteHome[i] = new createjs.SpriteSheet(data[i].spriteData);
      illHome[i] = new createjs.Sprite(spriteHome[i]);
      homeContainer.addChild(illHome[i]);
      illHome[i].scaleX = illHome[i].scaleY = 0.5;
      illHome[i].x = data[i].x;
      illHome[i].y = data[i].y;
      illHome[i].alpha = data[i].alpha;
      if(data[i].startAnime){
        data[i].startAnime(illHome[i]);
      }
    }
  };

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addEventListener('tick',updateStage);

  function updateStage(e){
    stage.update();
  }
};


// 4.ベジ要素をロード ----------------------------
function loadVegeData(num){
  // ローカルストレージにセット
  setPBStorage(num);

  //変数がloaderの機能追加
  var preload = new createjs.LoadQueue(false);

  var target = vegeUrl[num].imgData;

  //機能はっきしたい画像指定
  preload.loadManifest(target);
  
  //ロードイベント//addchildは1回ずつ読み込んでくれる方をしよう
  preload.on("fileload",function(e){
    // console.log(e);
  });

  preload.on("complete",function(e){
    console.log("loadVegeData complete!!!!");
    addContainer(target);
  });
}


// 5.ベジ用コンテナを作成して画像を配置 ----------------------------
var vegeContainer;
var spriteVege = [];
var illVege = [];

function addContainer(target){

  vegeContainer = new createjs.Container();
  stage.addChild(vegeContainer);
  vegeContainer.alpha = 0;

  for (var i = 0; i < target.length; i++) {
    if(target[i].spriteData == null){
      //スプライトがない時
      illVege[i] = new createjs.Bitmap(target[i].src);
      vegeContainer.addChild(illVege[i]);
      illVege[i].scaleX = illVege[i].scaleY = 0.5;
      illVege[i].x = target[i].x;
      illVege[i].y = target[i].y;
      illVege[i].alpha = target[i].alpha;
      if(target[i].startAnime){
        target[i].startAnime(illVege[i]);
      }
    }else{
      spriteVege[i] = new createjs.SpriteSheet(target[i].spriteData);
      illVege[i] = new createjs.Sprite(spriteVege[i]);
      vegeContainer.addChild(illVege[i]);
      illVege[i].scaleX = illVege[i].scaleY = 0.5;
      illVege[i].x = target[i].x;
      illVege[i].y = target[i].y;
      illVege[i].alpha = target[i].alpha;
      if(target[i].startAnime){
        target[i].startAnime(illVege[i]);
      }
    }
  };

  createjs.Tween.get(vegeContainer).to({alpha:1},500);
  createjs.Tween.get(homeContainer).to({alpha:0},500);

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addEventListener('tick',updateStage);
  function updateStage(e){
    stage.update();
  }
   
  showHomeBtn(true);
}

console.log();

// function addIll(e,container){

//   if(e.item.spriteData == null){
//   //スプライトがない時
//     ill[count] = new createjs.Bitmap(e.item.src);
//     container.addChild(ill[count]);
//     ill[count].scaleX = ill[count].scaleY = 0.5;
//     ill[count].x = e.item.x;
//     ill[count].y = e.item.y;
//     ill[count].alpha = e.item.alpha;
//     if(e.item.startAnime){
//       e.item.startAnime(ill[count]);
//     }

//   }else{
//     spriteSheet[count] = new createjs.SpriteSheet(e.item.spriteData);
//     ill[count] = new createjs.Sprite(spriteSheet[count]);
//     container.addChild(ill[count]);
//     ill[count].scaleX = ill[count].scaleY = 0.5;
//     ill[count].x = e.item.x;
//     ill[count].y = e.item.y;
//     ill[count].alpha = e.item.alpha;
//     if(e.item.startAnime){
//       e.item.startAnime(ill[count]);
//     }
//   }

//   count++;

//   createjs.Ticker.setFPS(30);
//   createjs.Ticker.addEventListener('tick',updateStage);

//   function updateStage(e){
//     stage.update();
//   }
// };
// function addContainer(vegeTarget){

// vegeContainer = new createjs.Container();
// stage.addChild(vegeContainer);

// vegeContainer.alpha = 0;
//   //変数がloaderの機能追加
//   var preload = new createjs.LoadQueue(false);
//   //機能はっきしたい画像指定
//   preload.loadManifest(vegeTarget.imgData);
//   //ロードイベント//addchildは1回ずつ読み込んでくれる方を使用
//    preload.on("fileload",function(e){
//    //console.log(e);
//    addIll(e,vegeContainer);
//    });

//    preload.on("complete",function(e){
//     console.log("complete!!!!");
//     createjs.Tween.get(vegeContainer).to({alpha:1},500);
//     createjs.Tween.get(homeContainer).to({alpha:0},500);

//    });
  
// }

// 5.栄養素を右からスライド ----------------------------
function vegeContainerMove(){
  createjs.Tween.get(vegeContainer).to({x:-1024},1000,createjs.Ease.getPowInOut(4));
}

function dotCircle(centerX,centerY,color){
  drawCircle(100,8)
  var timer = setTimeout(function(){
    drawCircle(30,3);
  },600);

  function drawCircle(radius,dotSize){
    for (var i = 0; i < 360; i+=15) {
      angle = i;
      var dot = new createjs.Shape();
      dot.graphics.beginFill(color);
      dot.graphics.drawCircle(0,0,dotSize);
      vegeContainer.addChild(dot);
      dot.x = centerX + radius * Math.cos(angle * Math.PI/180);
      dot.y = centerY + radius * Math.sin(angle * Math.PI/180);
      dot.alpha = 0;
      createjs.Tween.get(dot).wait(1.5*i).to({alpha:1},1);
    }
  }
}

// 6.startAnimeからendAnimeに切り替えスライド ----------------------------









