// get関数をつくる

(function(){

  var obj = window.obj;

  var objCnt;
  var objLength = 0;
  var outputStr = '';

  var getData = function(){

    for(objCnt = 0, objLength = obj.length; objCnt < objLength; objCnt++ ){
      var str = obj[objCnt].name + '(' + obj[objCnt].age+')があいさつ' + obj[objCnt].aisatsu + '<br>';
      outputStr += str;
      console.log(outputStr);
    }

    document.getElementById('chara').innerHTML = outputStr;
  }

  getData();

})();
