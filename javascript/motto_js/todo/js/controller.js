var Controller = (function(){
    // private

    // locaStorageの読み込み
    var _loadStorage = function(){
        // locaStorageの読み込み
        Model.loadStorage();
        // localStorage "my-todo" を読み込む
        // var ls = window.localStorage.getItem('my-todo');
        // // localStorageのJSONをオブジェクトに変換
        // var obj = JSON.parse(ls);
        // //
        // if(obj == null){
        //     // _todos.active = 0; // todo が空なら配列番号が0
        //
        // } else {
        //     // 既に配列に入っていればlistCountに配列番号を登録
        //     _todos = obj;
        //
        //     $.each(obj.todoArr, function(index, value){
        //         // _todos.todoArr[index] = {'title':value.title};
        //
        //         Controller.createTitle(value.title, index);
        //     });
        // }
        // console.log(_todos);
    };
    //
    // var _createStorage = function(title){
    //     console.log(title);
    //
    //     var ls = window.localStorage.getItem('my-todo');
    //     var obj = JSON.parse(ls);
    //
    //     // 既に配列に入っていればlistCountに配列番号を登録
    //     // listCount = obj.todoArr.length;
    //
    //
    //     var newItem = {
    //         title: title,
    //         completed : 'false'
    //     }
    //
    //     obj.todoArr.push(newItem);
    //     obj.total++;
    //     obj.active++;
    //
    //     _todos = obj;
    //
    //     console.log(_todos);
    //
    //     //ObjectをJSONに変換
    //     var newJson = JSON.stringify(obj);
    //     window.localStorage.setItem('my-todo', newJson);
    //
    //
    // };



    // inputの値を取得する
    var _getTitle = function(){
        var $val = $('#new-todo').val();
        _setData($val)
    }

    // valの値をViewとModelに送る
    var _setData = function(val){
        if(val){
            View.createTitle(val);
            Model.createStorage(val);
            $('#new-todo').val(''); //inputを空にする
        }
    }

    var _createTitle = function(title, index){
        View.createTitle(title, index);
    };

    var _completed = function(target){
        Model.remove(id);
        $(target).remove();
    }

    var _setStorage = function(){

        $.each(obj.todoArr, function(index, value){
            // _todos.todoArr[index] = {'title':value.title};

            Controller.createTitle(value.title, index);
        });
    }

    return {
        // public
        // locaStorageの読み込み
        loadStorage: function(){
            _loadStorage();
        },

        getTitle: function(){
            _getTitle();
        },

        getStorage: function(){
            _getStorage();
        },

        setStorage: function(){
            _setStorage();
        },


        createTitle:function(id,title){
            _createTitle(title,index);
        },


        completed:function(target){
            _completed(target);
        }
    };
})();
