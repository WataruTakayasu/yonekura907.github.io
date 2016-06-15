;(function(){
    // モデルからデータを取得
    console.log(window.getData);
    var dataArray = window.getData();
    
    
    var outputStr = '';
    for(var cnt = 0, len = dataArray.length; cnt < len; cnt++) {
        var str = dataArray[cnt].name
                  + '('
                  + dataArray[cnt].age 
                  + ')があいさつ「'
                  + dataArray[cnt].greeting
                  + '」<br>';
        outputStr += str;
    }
    document.getElementById("output-area").innerHTML = outputStr;
})();


