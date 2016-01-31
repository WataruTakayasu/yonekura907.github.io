// DOMロード
$(function(){

  // タッチイベント
  $('#ball').on('touchstart',function(){
    $('#touchResult li').eq(0).text('touchstart したよ');
  });

  $('#ball').on('touchmove',function(){
    $('#touchResult li').eq(1).text('touchmove したよ');
  });

  $('#ball').on('touchend',function(){
    $('#touchResult li').eq(2).text('touchend したよ');
  });

});
