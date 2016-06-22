// DOMContentLoaded
$(function(){

  // 定数　openweathermap apikey
  const apikey = 'f3cdcde042f3a124d0f5c7474e9b0792';


  $('#btn').on('click',function(evt){
    // GPSから緯度経度を取得
    navigator.geolocation.getCurrentPosition(function(aPos){

      console.log(aPos);
      var lat = aPos.coords.latitude; // 緯度
      var lon = aPos.coords.longitude;　// 軽度
      // console.log(lat,lon);
      loadJson(lat,lon);
    });
  });

  // jsonの読み込み関数
  function loadJson(aLat,aLon){

    console.log(aLat,aLon);
    var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+aLat+'&lon='+aLon+'&appid=' +apikey;


    // ajaxの記述
    $.ajax({
      url:url,
      type:'GET',
      dataType:'json'
    }).done(function(aData){
      console.log('成功');
      showData(aData);
    }).fail(function(){
      console.log('失敗');
    });
  }

  // jsonを表示する関数
  function showData(aData){
    // 地域名
		var areaName = aData.name;
		$('#areaName').text(areaName);

		//気温
		var areaTemp = aData.main.temp;
    areaTemp = areaTemp - 273.15;
		$('#areaTemp').text(Math.round(areaTemp)+"度");

		//湿度
    var areaHumidity = aData.main.humidity;
    $('#areaHumidity').text(areaHumidity+'%');

		//天気
    var areaWeather = aData.weather[0].description;
    $('#areaWeather').text(areaWeather);

		//天気アイコン
    var weatherIcon = 'http://openweathermap.org/img/w/'+aData.weather[0].icon+'.png';
    $("#weatherIcon").append('<img src="'+weatherIcon+'">');
  }
});
