// get関数をつくる

(function(){

  var dataArray = window.getData();

  console.log(dataArray);

  var outputStr = '';
  for(var cnt=0; cnt < dataArray.length; cnt++){
    var str = dataArray[cnt].name + '(' + dataArray[cnt].age + ')があいさつ'　+ dataArray[cnt].aisatsu + '<br>';
    outputStr += str;
  }

  console.log(outputStr);

  // HTMLの出力
  document.getElementById('output-area').innerHTML = outputStr;

})();
