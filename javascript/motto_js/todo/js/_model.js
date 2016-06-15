var Model = (function(){
    // private
    // var _listCount;　// 配列番号

    // todoリストを管理するオブジェクト
    var _todos = {
        active: 0,
        completed: 0,
        total: 0,
        todoArr: []
    };
    // var todoArr = []; // todo の配列
    var idCount = 0;

    // locaStorageの読み込み
    var _loadStorage = function(){

        // localStorage "my-todo" を読み込む
        var ls = window.localStorage.getItem('my-todo');
        // localStorageのJSONをオブジェクトに変換
        var obj = JSON.parse(ls);


        if(obj == null){
            //オブジェクトがnullなら
            obj = _todos;
            var newJson = JSON.stringify(obj);
            window.localStorage.setItem('my-todo', newJson);

        } else {


            // 既に配列に入っていればlistCountに配列番号を登録
            // _todos = obj;

            // Controller.setStorage(obj.);

        }
        console.log(_todos);
    }

    // to do の作成
    var _createStorage = function(title){
        console.log(title);

        var ls = window.localStorage.getItem('my-todo');
        var obj = JSON.parse(ls);

        // 既に配列に入っていればlistCountに配列番号を登録
        // listCount = obj.todoArr.length;


        var newItem = {
            title: title,
            completed : 'false',
            id:idCount
        };

        obj.todoArr.push(newItem);
        obj.total++;
        obj.active++;
        idCount++;



        _todos = obj;

        console.log(_todos);


        Controller.createTitle(title,idCount);

        //ObjectをJSONに変換
        var newJson = JSON.stringify(obj);
        window.localStorage.setItem('my-todo', newJson);


    }



    var _remove = function(id){

    }

    return {
        // public

        // locaStorageの読み込み
        loadStorage: function(){
            _loadStorage();
        },

        createStorage: function(val){
            _createStorage(val);
        },

        remove: function(id){
            _remove(id);
        }
    }



})();
