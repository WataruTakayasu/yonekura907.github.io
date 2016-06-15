(function(){

  // ローカル変数とグローバル変数
  // ローカル変数：その関数の中のみ有効
  // グローバル変数：プログラム全体で有効

  // グローバル変数
  var global = 'グローバル変数';

  setTimeout(function(){
    console.log(global);

    // subのgetNameを実行
    window.getName();

  },1000);

  // ローカル変数
  var main = function(){
    var local = 'ローカル変数';
    console.log(local);
    console.log(global);
  }

  main();
  // console.log(local);
  console.log(global);

  console.log(window);

})();
