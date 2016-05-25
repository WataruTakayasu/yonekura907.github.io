//
//
// グローバル変数
//
(function(){
  var global = 'ローカル変数';
  console.log(global);

  var getName = function(){
    console.log('takeda');
  };

  // ウインドウオブジェクトにプロパティを追加することでグローバル変数として使える
  window.getName = getName;

})();
