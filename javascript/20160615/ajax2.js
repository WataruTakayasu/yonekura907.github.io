$(function() {

	// GPSから緯度経度
	navigator.geolocation.getCurrentPosition(function(pos){

		var lat = pos.coords.latitude;
		var lon = pos.coords.longitude;

		// 小数点２桁を切り捨て
    // lat = calLocation(lat);
    // lon = calLocation(lon);
    // lat = Math.ceil(lat);
    // lon = Math.ceil(lon);

		console.log(lat,lon);

		const apikey = 'f3cdcde042f3a124d0f5c7474e9b0792';
		// city name
		// var url = 'http://api.openweathermap.org/data/2.5/weather?q=Tokyo&appid=' + apikey ;
		// lat + lon 35 139
		var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+lon+'&appid=' + apikey;


		// 通信を実行
    $.ajax({
        url:url,
        dataType:"json",
    }).done(function(data){

			showJSON(data);
		}).fail(function(){
			console.log('ajax error ---------------');
		})


	},function(err){
			console.log("geo err ---------------");
	});


	// 小数点２桁切り捨て関数
  function calLocation(num){
    var num1 = num*100;
    num1 = Math.floor(num1)/100;
    return num1;
  }


	// JSONの解析
	function showJSON(data){
		console.log(data);

		// 地域名
		var areaName = data.name;
		$('#areaName').text(areaName);

		//気温
		var areaTemp = data.main.temp;
    areaTemp = areaTemp - 273.15;
		$('#areaTemp').text(Math.round(areaTemp)+"度");

		//湿度
    var areaHumidity = data.main.humidity;
    $('#areaHumidity').text(areaHumidity+'%');

		//天気
    var areaWeather = data.weather[0].description;
    $('#areaWeather').text(areaWeather);

		//天気アイコン
    var weatherIcon = 'http://openweathermap.org/img/w/'+data.weather[0].icon+'.png';
    $("#weatherIcon").append('<img src="'+weatherIcon+'">');

	}

});
