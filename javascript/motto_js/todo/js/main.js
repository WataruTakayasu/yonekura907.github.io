
var Generator = (function(){

    // プライベート
    // todoリストを管理するオブジェクト
    var _todos = {
        active: 0,
        completed: 0,
        total: 0,
        todoArr: []
    };

    var _util = {
        load: function(){
            // localStorage "my-todo" を読み込む
            var ls = window.localStorage.getItem('my-todo');
            // localStorageのJSONをオブジェクトに変換
            var obj = JSON.parse(ls);

            return obj;
        }
    }


    return {
        init: function(){
            Generator._loadStorage();
        },

        // リロード時のlocaStorageの読み込み
        _loadStorage: function(){

            console.log('_loadStorage');

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

                $.each(obj.todoArr, function(index, value){

                    Generator.render(value.title,value.id,value.completed);
                });

                _todos = obj;

            }
            console.log(_todos);
        },


        // 新規タイトルの作成
        _createStorage: function(title){

            var ls = window.localStorage.getItem('my-todo');
            var obj = JSON.parse(ls);

            obj.total++;
            obj.active++;
            console.log(obj.total);

            // var active = obj.active;
            // active++;
            var newId =　Generator.createId();

            var newItem = {
                title: title,
                completed : 'false',
                id: newId
            };

            obj.todoArr.push(newItem);
            _todos = obj;

            console.log(_todos);

            Generator.render(title, newId, 'false');

            //ObjectをJSONに変換
            var newJson = JSON.stringify(obj);
            window.localStorage.setItem('my-todo', newJson);

        },

        completed: function(aTarget, aId){
            // localStorage "my-todo" を読み込む
            var ls = window.localStorage.getItem('my-todo');
            // localStorageのJSONをオブジェクトに変換
            var obj = JSON.parse(ls);

            $.each(obj.todoArr, function(index, value){
                if(value.id === aId && value.completed === 'false'){
                    value.completed = 'true';
                    $(aTarget).remove('completed');
                } else if (value.id === aId && value.completed ==='true'){
                    value.completed = 'false';
                    $(aTarget).removeClass('completed');
                }
            });

            //ObjectをJSONに変換
            var newJson = JSON.stringify(obj);
            window.localStorage.setItem('my-todo', newJson);
        },
        destroy: function(aTarget, aId){
            // localStorage "my-todo" を読み込む
            var ls = window.localStorage.getItem('my-todo');
            // localStorageのJSONをオブジェクトに変換
            var obj = JSON.parse(ls);
            var arrNum = null;
            $.each(obj.todoArr, function(index, value){

                if(value.id == aId){
                    console.log(index);

                    arrNum = index;
                }
            });

            $(aTarget).remove();
            obj.todoArr.splice(arrNum,1);

            //ObjectをJSONに変換
            var newJson = JSON.stringify(obj);
            window.localStorage.setItem('my-todo', newJson);
        },

        editing: function(aTarget, aId){
            // localStorage "my-todo" を読み込む
            var ls = window.localStorage.getItem('my-todo');
            // localStorageのJSONをオブジェクトに変換
            var obj = JSON.parse(ls);

            $(aTarget).addClass('editing');
            var $edit = $(aTarget).find('.edit')
            $edit.show();

            $edit.find('.save').on('click',function(){

                var newVal = $edit.find('input').val();
                console.log(newVal);

                $(aTarget).find('.title-label').text(newVal);
                $edit.hide();

                $.each(obj.todoArr, function(index, value){

                    if(value.id == aId){
                        value.title = newVal;
                    }
                });

                //ObjectをJSONに変換
                var newJson = JSON.stringify(obj);
                window.localStorage.setItem('my-todo', newJson);


            })


        },

        // 表示
        render: function(aTitle, aId, aCompleted){
            // ul タグ
            var $todoList = $('#todo-list');

            console.log('aCompleted' + aCompleted);
            if(aCompleted ==='true'){
                // liタグを生成
                var rowLi = '<li data-id="'+ aId +'" class="completed"><div class="view"><input class="toggle" type="checkbox" checked><label class="title-label">'+ aTitle + '</label><button class="destroy">clear</button></div><div class="edit"><input value="'+aTitle+'"><button class="save">save</button><div></li>';
            } else {
                // liタグを生成
                var rowLi = '<li data-id="'+ aId +'"><div class="view"><input class="toggle" type="checkbox"><label class="title-label">'+ aTitle + '</label><button class="destroy">clear</button></div><div class="edit"><input value="'+aTitle+'"><button class="save">save</button><div></li>';
            }

            // ulにappend
            $todoList.append(rowLi);
        },
        resetImages: function(){
            _containerEl.empty();
        },
        createId: function() {
          /*jshint bitwise:false */
          var random;
          var id = '';

          for (var cnt = 0; cnt < 32; cnt++) {
          	random = Math.random() * 16 | 0;
          	if (cnt === 8 || cnt === 12 || cnt === 16 || cnt === 20) {
          		id += '-';
          	}
          	id += (cnt === 12 ? 4 : (cnt === 16 ? (random & 3 | 8) : random)).toString(16);
          }

          return id;
          },
        }

})();





var Controller = (function(){
    var _btnHandler = function(evt){
        var $val = $('#new-todo').val().trim();
        Generator._createStorage($val)
    };

    var _toggleHandler = function(evt){

        console.log('_toggleHandler');
        var $parentLi = $(this).parent().parent();
        var $parentId = $parentLi.attr('data-id');

        Generator.completed($parentLi,$parentId);
    };

    var _destroyHandler = function(evt){
        console.log('_destroyHandler');
        var $parentLi = $(this).parent().parent();
        var $parentId = $parentLi.attr('data-id');
        Generator.destroy($parentLi,$parentId);
    };

    var _editHandler = function(evt){
        console.log('_editHandler');
        var $parentLi = $(this).parent().parent();
        var $parentId = $parentLi.attr('data-id');
        Generator.editing($parentLi,$parentId);
    }


    return {
        setEvent: function(evt){
            $('#btn').on('click', _btnHandler);
            $('.toggle').on('change', _toggleHandler);
            $('.destroy').on('click', _destroyHandler);
            $('.title-label').on('dblclick', _editHandler);
        }
    }
})();




;(function(){
    Generator.init();
    Controller.setEvent();
})();
