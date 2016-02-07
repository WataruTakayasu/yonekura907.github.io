$(function(){
    //GPS
    navigator.geolocation.getCurrentPosition(function(pos){
        var lat = pos.coords.latitude;
        var lon = pos.coords.longitude;

        console.log(lat,lon);

        // 定数
        const apikey = 'f3cdcde042f3a124d0f5c7474e9b0792';
        // openweathermapのお天気情報のURL
        var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+ lat +'&lon=' + lon +'&appid=' + apikey;


        $.ajax({
            url:url,
            dataType:'json'
        }).done(function(data){

            showWeather(data);

        }).fail(function(){
            console.log('ajax error!!!');
        });

        // htmlに表示する関数
        function showWeather(data){
            console.log(data);

            // 地域名
            var areaName = data.name;
            $('#areaName').text(areaName);


        }


    });
});
