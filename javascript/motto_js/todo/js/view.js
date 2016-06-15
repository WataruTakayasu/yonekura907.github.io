
var View = (function(){
    // private
    // ボタンのイベント
    var _btnHandler = function(evt){
        Controller.getTitle();
    };

    var _destroyHandler = function(evt){
        var targetBtn = event.target;
        targetParent = $(targetBtn).parent().parent();
        console.log(targetParent);

        Controller.completed(targetParent);
    }

    // titleの生成
    var _createTitle = function(title,index){
        var $todoList = $('#todo-list');
        var rowLi = '<li data-id="'+ index +'"><div class="toto-list"><input class="toggle" type="checkbox">'+ title + '<button class="destroy"></button></div></li>';
        $todoList.append(rowLi);
    };

    // localStorageのロード
    var _loadStorage = function(){
        Controller.getStorage();
    };

    var _setList = function(){
        Controller.createTitle();
    }


    return {
        // public
        // イベントの登録
        setEvent: function(){
            // タイトルの入力
            $('#btn').on('click',_btnHandler);
            // 完了
            $('.destroy').on('click', _destroyHandler);
        },

        // liにタイトルを表示する
        createTitle: function(title,index){
            _createTitle(title,index)
        },

        // 2回目以降。ロードする
        loadStorage: function(){
            _loadStorage();
        },



    };
})();
