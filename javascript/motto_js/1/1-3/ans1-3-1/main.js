;(function(){

  // モデルからデータを取得
  var dataArray = window.getData();

  console.log(dataArray);

  var outputStr = '';
  for(var cnt = 0; cnt < dataArray.length; cnt++ ){
    var str = dataArray[cnt].name + '(' + dataArray[cnt].age+')があいさつ' + dataArray[cnt].aisatsu + '<br>';
    outputStr += str;
    // console.log(outputStr);
  }

  document.getElementById('output-area').innerHTML = outputStr;


})();
