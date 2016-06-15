// DOMを読み込んだよ
$(function(){
  // アニメーションの関数

  $('#btn').on('click',function(){
    loadAjax();
  });

  function loadAjax(){
    $.ajax({
      url: 'data.json',
      type: 'GET',
      dataType: 'json'
    }).done(function(data){
      console.log('成功');
      // console.log(data);
      showData(data)
    }).fail(function(){
      console.log('失敗');
    });
  }


  function showData(aData){
    console.log(aData);

    for (var i = 0; i < aData.length; i++) {
      $('#container').find('ul').append('<li>'+aData[i].name +'</li>');
    }

    // var list = $.map(aData.mySchool,function(value,index){
    //   console.log('value: ' + value);
    //   console.log('index: ' + index);
    // });

    // var list = $.each(aData.mySchool,function(index,value){
    //   console.log('value: ' + value);
    //   console.log('index: ' + index);
    // });
  }




});
