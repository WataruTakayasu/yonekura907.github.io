// DOMContentLoaded
$(function(){

  $('#btn').on('click',function(evt){

    console.log('クリックしたよ');
    loadJson();
  });

  // jsonの読み込み関数
  function loadJson(){
    // ajaxの記述
    $.ajax({
      url:'data.json',
      type:'GET',
      dataType:'json'
    }).done(function(aData){
      console.log('成功');
      mapData(aData);
    }).fail(function(){
      console.log('失敗');
    });
  }

  function mapData(aData){
    var result = $.map(aData, function(value, index){
      if(value.age === 44){
        return value;
      }
    });
    console.log(result);
    showData(result);
  }

  // jsonを表示する関数
  function showData(aData){
    // var list = $.each(aData,function(key,value){
    //   console.log(key);
    //   console.log(value);
    // });
    for (var i = 0; i < aData.length; i++) {
      $('#container').find('ul').append('<li>名前は'+aData[i].name+'で'+aData[i].age+'歳です。'+aData[i].address+'在住です</li>');
    }
  }
});
