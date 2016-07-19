jQuery(function() {
    var nav = jQuery('#global-nav');

    // メニューのtop座標を取得する
    var offsetTop = nav.offset().top;

    var floatMenu = function() {
        // スクロール位置がメニューのtop座標を超えたら固定にする
        if (jQuery(window).scrollTop() > offsetTop) {
            nav.addClass('fixed');
        } else {
            nav.removeClass('fixed');
        }
    }
    jQuery(window).scroll(floatMenu);
    jQuery('body').bind('touchmove', floatMenu);
});
