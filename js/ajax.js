// DOM ロード
$(function(){

  console.log('DOM読み込んだよ');

  // #btnをクリックしたら
  $('#btn').on('click',function(){


    // ajaxでロード
    $.ajax({
      url:'mydata.json',
      type:'GET',
      dataType:'json'
    }).done(function(data){
      // 成功
      console.log(data);

      // showContent(data);


    }).fail(function(){
      // 失敗
      console.log('ajax error');
    });

  });


  // 表示させる関数
  function showContent(data){

    $('#container').append(data);

  }





});
