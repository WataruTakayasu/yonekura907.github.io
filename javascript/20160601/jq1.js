// DOMを読み込んだよ
$(function(){
  // アニメーションの関数
  var dinoAnime = function(){
    var dinoEl = $('#dino');
    dinoEl.animate({left:'500px'},1000)
          .animate({top:'400px'},2000)
          .animate({top:'100px',left:'100px'},1000,function(){
            console.log('全部おわったよ');
            setEvent();
          });
  };

  // イベントの関数
  var setEvent = function(){
    $('#right-anime-btn').on('click',function(){
      dinoAnime();
      $(this).off('click');
    });
  };

  setEvent();

});
