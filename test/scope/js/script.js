// DOMを読み込んだら
$(function(){

    // console.log('DOMを読み込んだよ');
    $(window).scroll(function(){
        // スクロールの座標を取得
        var dy = $(this).scrollTop();
        // console.log(dy);

        // もしdyが200以上になったら
        if(dy > 200){
            // .fadeに.fadeinを加える
            $('.fade').addClass('fadein');
        } else {
            $('.fade').removeClass('fadein');
        }
    });
});
