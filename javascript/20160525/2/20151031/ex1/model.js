;(function(){
    var arr = [ {name: 'みそだ',       age: 55,  greeting: 'よろしくお願いします'},
                {name: 'ことり',       age: 12,  greeting: 'よろしくお願いしまっす'},
                {name: 'スノビッケ',   age: 150, greeting: 'よろしくお願い申し上げる'},
                {name: 'ブットパッド', age: 30,  greeting: 'よろしくお願いしますー'},
                {name: 'ゼン',         age: 5,   greeting: 'よろしくお願いしっす'},
                {name: 'たけだ',       age: 34,  greeting: 'よろしくお願いしまする'}
            ];
    
    var getData = function(){
        return arr;
    };
    
    // Windowオブジェクトのプロパティを追加
    window.getData = getData;
})();



