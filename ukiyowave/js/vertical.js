// $(function() {

// 	$(window).scroll(function() {

// 		// スクロール値
// 		var dy = $(this).scrollTop();　// Y座標

// 		// スクロール値の表示
// 		$('.positionY').text( dy );
// 		// console.log(dy);
// 	});


// 	// クリックイベント
// 	$('header li a').click(function() {

// 		// リンク先の取得
// 		var targetName = $(this).attr("href");
// 		console.log(targetName);

// 		// targetNameの座標
// 		var targetPosY = $(targetName).offset().top;

// 		// console.log(targetPos);
// 		$('html, body').animate({scrollTop: targetPosY-70}, 500);
// 		return false;
// 	});

// });

$(function() {
    var nav = $('.nav');
    //navの位置    
    var navTop = nav.offset().top;
    //スクロールするたびに実行
    $(window).scroll(function () {
        var winTop = $(this).scrollTop();
        //スクロール位置がnavの位置より下だったらクラスfixedを追加
        if (winTop >= navTop) {
            nav.addClass('fixed')
        } else if (winTop <= navTop) {
            nav.removeClass('fixed')
        }
    });
    // コンセプトにするする移動
    $("a[href='#box1']").click(function() {
        var movedPos = $('#box1').offset().top;
        $("body,html").animate({
            scrollTop:movedPos
        },'slow');
        return false;
    });
     // コンセプトにするする移動
    $("a[href='#box22']").click(function() {
        var movedPos = $('#box22').offset().top;
        $("body,html").animate({
            scrollTop:movedPos
        },'slow');
        return false;
    });
       // コンセプトにするする移動
    $("a[href='#asobi']").click(function() {
        var movedPos = $('#asobi').offset().top;
        $("body,html").animate({
            scrollTop:movedPos
        },'slow');
        return false;
    });
       // コンセプトにするする移動
    $("a[href='#fott']").click(function() {
        var movedPos = $('#fott').offset().top;
        $("body,html").animate({
            scrollTop:movedPos
        },'slow');
        return false;
    });

});








