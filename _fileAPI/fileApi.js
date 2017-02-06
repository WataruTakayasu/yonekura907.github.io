
function init(){

    var canvas = document.querySelector('#myCanvas');
    var fileImg = document.querySelector('#file-image');
    var pallete = document.querySelector('#palette');

    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;


    // ファイルの読み込み
    fileImg.addEventListener('change',function(evt){
        // 読み込み画像
        var file = evt.target.files;
        // console.log(file[0]);

        var reader = new FileReader();

        //dataURL形式でファイルを読み込む
        reader.readAsDataURL(file[0]);

        reader.onload = function(){
            readDrawImg(reader, canvas, 0, 0);
        }
    });

    // 読み込んだ
    function readDrawImg(reader,canvas,x,y){
        var img = readImg(reader);
        img.onload = function(){
            var w = img.width;
            var h = img.height;

            var resize = resizePhoto(w,h);
            console.log(w,h);
            drawImgCanvas(canvas,img, x, y, resize.w, resize.h );
        }
    }


    function readImg(reader){
        var result_dataURL = reader.result;
        var img = new Image();
        img.src = result_dataURL;
        return img;
    }

    function resizePhoto(aWidth, aHeight){

        var length = Math.max(aWidth, aHeight);


        if(length <= winWidth){
            return {
                flag: false,
                w: aWidth,
                h: aHeight
            };
        }



        var ratio = aWidth / winWidth;
        var reWidth = winWidth;
        var reHeight = aHeight/ratio;



        // if(aWidth > aHeight){
        //     // 画角
        //     var ratio = aWidth / aHeight;
        //     console.log('ratio'+ratio);
        //     reWidth = winWidth;
        //     reHeight = aHeight / ratio;
        //
        // } else {
        //     // 画角
        //     var ratio = aWidth / winWidth;
        //
        //     console.log('ratio'+ratio);
        //     reWidth = winWidth;
        //     reHeight = aHeight / ratio;
        // }

        return {

            flag: true,
            w: parseInt(reWidth),
            h: parseInt(reHeight)
        }
    }


    function drawImgCanvas(canvas, img, x, y, w, h){
        var ctx = canvas.getContext('2d');
        canvas.width = w;
        canvas.height = h;
        ctx.drawImage(img, x, y, w, h);


        // img.onload = function(){
        var vibrant = new Vibrant(img);
        var swatches = vibrant.swatches();
        for (var swatch in swatches) {
            if (swatches.hasOwnProperty(swatch) && swatches[swatch]){
                // console.log(swatch, swatches[swatch].getHex());
                console.log(swatches[swatch].getHex());
                createPallete(swatches[swatch].getHex());
            }
        }
    }


    function createPallete(aColor){
        var liObj = document.createElement('li');
        liObj.setAttribute('style','background-color:' + aColor);
        pallete.appendChild(liObj);
    }

};

window.onload = init;
