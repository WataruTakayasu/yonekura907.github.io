var model = [

    //音__________________________________________________________

    {//フィールド
        src:'sound/field.mp3',
        type:'sound',
        name:'field'
    },

    {//落ちる音
        src:'sound/drop.mp3',
        type:'sound',
        name:'apple',
    },

    {//はばたき
        src:'sound/fly.mp3',
        type:'sound',
        name:'fly',
    },

    {//笑い声
        src:'sound/laugh.mp3',
        type:'sound',
        name:'laugh',
    },

    {//クリスマス5
        src:'sound/bell.mp3',
        type:'sound',
        name:'bell',
    },

    {//実
        src:'sound/fruit.mp3',
        type:'sound',
        name:'fruit',
    },


    {//水1
        src:'sound/water1.mp3',
        type:'sound',
        name:'water1',
    },

    {//水2
        src:'sound/water2.mp3',
        type:'sound',
        name:'water2',
    },

    {//水3
        src:'sound/water3.mp3',
        type:'sound',
        name:'water3',
    },

    {//落ち葉10
        src:'sound/leaves.mp3',
        type:'sound',
        name:'leaves',
    },

    {//風の音
        src:'sound/wind.mp3',
        type:'sound',
        name:'wind',
    },

    {//ひまわりのびる
        src:'sound/boyoyon.mp3',
        type:'sound',
        name:'boyoyon',
    },

    {//ひまわりちぢむ
        src:'sound/boyon.mp3',
        type:'sound',
        name:'boyon',
    },

    {//きのこ走る
        src:'sound/walk.mp3',
        type:'sound',
        name:'walk',
    },

    {//きのこ走る2 15
        src:'sound/run.mp3',
        type:'sound',
        name:'run',
    },

    {//コスモス
        src:'sound/cosmos.mp3',
        type:'sound',
        name:'cosmos',
    },


    {//さくらちる
        src:'sound/shine.mp3',
        type:'sound',
        name:'shine',
    },

    {//うさぎまばたき
        src:'sound/usagi.mp3',
        type:'sound',
        name:'usagi',
    },

    {//スノードロップ
        src:'sound/snowdrop.mp3',
        type:'sound',
        name:'snowdrop',
    },

    {//蓮の花
        src:'sound/hasu.mp3',
        type:'sound',
        name:'hasu',
    },

    {//うさぎまばたき
        src:'sound/usagi.mp3',
        type:'sound',
        name:'usagi',
    },

    {//ド
        src:'sound/1.mp3',
        type:'sound',
        name:'1',
    },

    {//レ
        src:'sound/2.mp3',
        type:'sound',
        name:'2',
    },

    {//ミ
        src:'sound/3.mp3',
        type:'sound',
        name:'3',
    },

    {//ファ
        src:'sound/4.mp3',
        type:'sound',
        name:'4',
    },

    {//ソ
        src:'sound/5.mp3',
        type:'sound',
        name:'5',
    },

    {//ラ
        src:'sound/6.mp3',
        type:'sound',
        name:'6',
    },

    {//シ
        src:'sound/7.mp3',
        type:'sound',
        name:'7',
    },

    {//ド（高い）
        src:'sound/8.mp3',
        type:'sound',
        name:'8',
    },

    {//セミ
        src:'sound/semi.mp3',
        type:'sound',
        name:'semi',
    },

    {//かえる
        src:'sound/flog.mp3',
        type:'sound',
        name:'flog',
    },

    {//ゆきだるまわらう32
        src:'sound/snow.mp3',
        type:'sound',
        name:'snow',
    },



    //ビットマップ33____________________________________________
    {
        src:'img/field.png',
        x:0,
        y:0,
        regX:0,
        regY:0,
        alpha:1,
        type:'bitmap'
    },
    {
        src:'img/seed.png',
        x:0,
        y:0,
        regX:0,
        regY:0,
        alpha:0,
        type:'bitmap'
    },




    {
        //,りんご1 35
        src:'img/apple.png',
        x:1882,
        y:485,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:1882,
            y:485,
            radius:50
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).call(function(){
                sound.volume = 0;
            }).wait(1000).to({alpha:0},100).to({y:485},100).wait(1000).to({alpha:1},100).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },

    {
        //りんご2
        src:'img/apple.png',
        x:2047,
        y:485,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:2047,
            y:485,
            radius:50},
        hitAnime:function(target){
            createjs.Tween.get(target).to({y:975},1000).wait(1000).to({alpha:0},100).to({y:485},100).wait(1000).to({alpha:1},100).call(function(){
                target.flag = false;
            });
            createjs.Sound.registerSound(model[1].src,'apple');
            var sound = createjs.Sound.play('apple');

        }
    },


    {
        //りんご3
        src:'img/apple.png',
        x:1781,
        y:590,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:1781,
            y:590,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).call(function(){
                sound.volume = 0;
            }).wait(1000).to({alpha:0},100).to({y:590},100).wait(1000).to({alpha:1},100).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },


    {
        //りんご4
        src:'img/apple.png',
        x:1964,
        y:620,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:1964,
            y:620,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).call(function(){
                sound.volume = 0;
            }).wait(1000).to({alpha:0},100).to({y:620},100).wait(1000).to({alpha:1},100).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },


    {
        //りんご5
        src:'img/apple.png',
        x:2146,
        y:590,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:2146,
            y:590,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).call(function(){
                sound.volume = 0;
            }).wait(1000).to({alpha:0},100).to({y:590},100).wait(1000).to({alpha:1},100).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },


    {
        //りんご6
        src:'img/apple.png',
        x:1795,
        y:720,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:1795,
            y:720,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).call(function(){
                sound.volume = 0;
            }).wait(1000).to({alpha:0},100).to({y:720},100).wait(1000).to({alpha:1},100).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },


    {
        //りんご7
        src:'img/apple.png',
        x:1972,
        y:762,
        regX:62,
        regY:69,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:1972,
            y:762,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).call(function(){
                sound.volume = 0;
            }).wait(1000).to({alpha:0},100).to({y:762},100).wait(1000).to({alpha:1},100).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },

    {
        //Xmasstar
        src:'img/xmasstar.png',
        x:2711,
        y:186,
        regX:69,
        regY:79,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:2711,
            y:186,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('bell');
            }).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }

    },


    {
        //蓮の葉1 43
        src:'img/hasunoha.png',
        x:702,
        y:1209,
        regX:63,
        regY:44,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:702,
            y:1209,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('water1');
            }).to({x:800},7000,createjs.Ease.quartOut).call(function(){
                sound.volume = 0;
            }).wait(2000).to({x:702},7000,createjs.Ease.quartOut).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },

    {
        //蓮の葉2
        src:'img/hasunoha2.png',
        x:905,
        y:1313,
        regX:63,
        regY:44,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:905,
            y:1313,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('water2');
            }).to({x:850},5000,createjs.Ease.quartOut).call(function(){
                sound.volume = 0;
            }).wait(500).to({x:905},5000,createjs.Ease.quartOut).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },

    {
        //蓮の葉3
        src:'img/hasunoha3.png',
        x:993,
        y:1370,
        regX:50,
        regY:36,
        alpha:1,
        type:'bitmap',
        targetData:{
            x:993,
            y:1370,
            radius:50},
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('water3');
            }).to({x:1050},5000,createjs.Ease.quartOut).call(function(){
                sound.volume = 0;
            }).wait(800).to({x:993},5000,createjs.Ease.quartOut).call(function(){
                sound.volume = 1;
                target.flag = false;
            });
        }
    },


    {//のびない茎（ひまわり）45
        src:'img/kuki.png',
        x:860,
        y:650,
        alpha:1,
        type:'bitmap',

    },

    {//のびる茎（ひまわり）46
        src:'img/kuki2.png',
        x:899,
        y:600,
        scaleX:1,
        scaleY:1,
        alpha:1,
        targetData:{
            x:950,
            y:900,
            radius:100},
        type:'bitmap',
        hitAnime:function(target){
            var sound;
            sound = createjs.Sound.play('boyoyon');
            //illArr46(kuki2)のy3倍にのびて 位置が上がる
            createjs.Tween.get(illArr[46]).to({y:190,scaleY:3},1000);
            //irrArr47(hana)の位置があがる
            createjs.Tween.get(illArr[47]).to({y:100}, 1000)
            .wait(1000)
            .call(function(){
                var sound;
                sound = createjs.Sound.play('boyon');
                //irrArr46(kuki2)のy拡大とYがもとにもどる
                createjs.Tween.get(illArr[46]).to({y: 700, scaleY: 1}, 1500);
                //irrArr47(hana)のyがもどる
                createjs.Tween.get(illArr[47]).to({y: 520}, 1500);
            });
        }

    },


    {//花部分（ひまわり）47
        src:'img/hana.png',
        x:864,
        y:520,
        alpha:1,
        type:'bitmap',
    },






//スプライト___________________________________




    {//りんご虫入り
        src: 'img/bugapple.png',
        x:2125,
        y:720,
        regX:83,
        regY:92,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2125,
                y:720,
                radius:50
        },
        spriteData:{
            images: ['img/bugapple.png'],
            frames:{width:167,height:184},
            animations:{
                stand:0,
                bug:[1,54]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('apple');
            }).to({y:975},1000).wait(1500).call(function(){
                sound.volume = 0;
                target.gotoAndPlay('bug');
            }).wait(1650).to({alpha:0},400).to({y:720},100).wait(1000).call(function(){
                target.gotoAndStop(0);
                sound.volume = 1;
                target.flag = false;
            }).to({alpha:1},100);
        }
    },


    {//うさぎちゃん
        src: 'img/usagi.png',
        x:2570,
        y:1310,
        regX:150,
        regY:98,
        alpha:1,
        type:'sprite',
        spriteData:{
            images: ['img/usagi.png'],
            frames:{width:299,height:195},
            animations:{
                stand:[0,23],
                wakeup:[24,41]
            }
        },
        targetData:{
                x:2570,
                y:1310,
                radius:75
        },
        startAnime:function(target){
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('stand');
            });
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('usagi',{loop:2});
                target.gotoAndPlay('wakeup')
            }).wait(2000).call(function(){
                sound.volume = 0;
                target.gotoAndPlay('stand')
                target.flag = false;
            });
        }
    },


    {//骨
        src:'img/bone.png',
        x:2425,
        y:1460,
        regX:75,
        regY:75,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2425,
                y:1460,
                radius:50
        },
        spriteData:{
            images: ['img/bone.png'],
            frames:{width:149,height:146},
            animations:{
                stand:0,
                turn:[1,21]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('walk');
                target.gotoAndPlay('turn');
            }).wait(2500).call(function(){
                target.gotoAndPlay('stand')
                sound.volume = 0;
                target.flag = false;
            });
        }
    },


    {//きのこさん
        src:'img/kinoko.png',
        x:2315,
        y:1130,
        regX:122,
        regY:126,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2315,
                y:1130,
                radius:125
        },
        spriteData:{
            images: ['img/kinoko.png'],
            frames:{width:244,height:252},
            animations:{
                stand:0,
                metamo:[1,24],
                walk:[26,36]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).wait(1000).call(function(){
                target.gotoAndPlay('metamo')
            }).wait(500).call(function(){
                sound = createjs.Sound.play('run');
                target.gotoAndPlay('walk');
            }).to({x:1250},3000).to({alpha:0},1000).to({x:2315}).call(function(){
                target.gotoAndStop('stand');
                sound.volume = 0;
                target.flag = false;
            }).to({alpha:1},500)
        }
    },


    {//ゆきだるま
        src:'img/snowman.png',
        x:2400,
        y:736,
        regX:203,
        regY:318,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2400,
                y:736,
                radius:150
        },
        spriteData:{
            images: ['img/snowman.png'],
            frames:{width:406,height:636},
            animations:{
                stand:0,
                snow:[1,38],
                smile:39
            }
        },
        hitAnime:function(target){
            createjs.Tween.get(target).call(function(){
                var sound;
                target.gotoAndPlay('snow');
            }).wait(1000).call(function(){
                sound = createjs.Sound.play('snow',{loop:1});
                target.gotoAndStop('smile')
                target.flag = false;
            }).wait(700).call(function(){
                target.gotoAndStop('smile')
            }).wait(3000).call(function(){
                target.gotoAndStop('stand')
                sound.volume = 0;
                target.flag = false;
            })
        }
    },


//____もみの木________________________________________________


    {//ball-blue1-ド
        src:'img/ballblue.png',
        x:2682,
        y:300,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2682,
                y:300,
                radius:31
        },
        spriteData:{
            images: ['img/ballblue.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                blue:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('blue');
                sound = createjs.Sound.play('1');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },


    {//ball-yellow1-レ
        src:'img/ballyellow.png',
        x:2757,
        y:342,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2757,
                y:342,
                radius:31
        },
        spriteData:{
            images: ['img/ballyellow.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                yellow:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('yellow');
                sound = createjs.Sound.play('2');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },


    {//ball-pink1-ミ
        src:'img/ballpink.png',
        x:2620,
        y:460,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2620,
                y:460,
                radius:31
        },
        spriteData:{
            images: ['img/ballpink.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                pink:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('pink');
                sound = createjs.Sound.play('3');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },

    {//ball-green1-ファ
        src:'img/ballgreen.png',
        x:2724,
        y:480,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2724,
                y:480,
                radius:31
        },
        spriteData:{
            images: ['img/ballgreen.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                green:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('green');
                sound = createjs.Sound.play('4');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },

    {//ball-blue2-ソ
        src:'img/ballblue.png',
        x:2809,
        y:457,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2809,
                y:457,
                radius:31
        },
        spriteData:{
            images: ['img/ballblue.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                blue:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('blue');
                sound = createjs.Sound.play('5');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },


    {//ball-yellow2-ラ
        src:'img/ballyellow.png',
        x:2591,
        y:638,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2591,
                y:638,
                radius:31
        },
        spriteData:{
            images: ['img/ballyellow.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                yellow:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('yellow');
                sound = createjs.Sound.play('6');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },


    {//ball-blue3-シ
        src:'img/ballblue.png',
        x:2704,
        y:608,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2704,
                y:608,
                radius:31
        },
        spriteData:{
            images: ['img/ballblue.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                blue:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('blue');
                sound = createjs.Sound.play('7');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },


    {//ball-pink2-ド
        src:'img/ballpink.png',
        x:2822,
        y:623,
        regX:31.5,
        regY:31.5,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2822,
                y:627,
                radius:31
        },
        spriteData:{
            images: ['img/ballpink.png'],
            frames:{width:63,height:63},
            animations:{
                stand:0,
                pink:1,
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('pink');
                sound = createjs.Sound.play('8');
            }).wait(5000).call(function(){
                target.gotoAndPlay('stand');
                target.flag = false;
                sound.volume = 1;
            });
        }
    },

//もみの木おわり_____________________________________________




    {//コスモス
        src:'img/cosmos.png',
        x:2057,
        y:1300,
        regX:180,
        regY:244,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2057,
                y:1300,
                radius:75
        },
        spriteData:{
            images: ['img/cosmos.png'],
            frames:{width:359,height:487},
            animations:{
                stand:0,
                turn:[1,8]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                target.gotoAndPlay('turn');
                sound = createjs.Sound.play('cosmos');
            }).wait(4000).call(function(){
                target.gotoAndPlay('stand')
            });
        }
    },

    {//落ち葉
        src:'img/ochiba.png',
        x:1795,
        y:1450,
        regX:279,
        regY:154,
        alpha:1,
        type:'sprite',
        targetData:{
                x:1795,
                y:1450,
                radius:150
        },
        spriteData:{
            images: ['img/ochiba.png'],
            frames:{width:557,height:307},
            animations:{
                stand:0,
                turn:[1,17]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('leaves');
                target.gotoAndPlay('turn');
            }).wait(2500).call(function(){
                sound.volume = 0;
                target.gotoAndPlay('stand')
            });
        }
    },

    {//スノードロップ
        src:'img/snowdrop.png',
        x:2580,
        y:990,
        regX:189,
        regY:206,
        alpha:1,
        type:'sprite',
        targetData:{
                x:2580,
                y:990,
                radius:150
        },
        spriteData:{
            images: ['img/snowdrop.png'],
            frames:{width:377,height:412},
            animations:{
                stand:0,
                glow:[1,31]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('snowdrop');
                target.gotoAndPlay('glow');
            }).wait(3500).call(function(){
                sound.volume = 0;
                target.gotoAndPlay('stand')
            });
        }
    },

    {//木
        src:'img/woodface.png',
        x:1280,
        y:820,
        regX:51,
        regY:27,
        alpha:1,
        type:'sprite',
        targetData:{
                x:1280,
                y:820,
                radius:75
        },
        spriteData:{
            images: ['img/woodface.png'],
            frames:{width:103,height:54},
            animations:{
                stand:0,
                laugh:[1,13]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('laugh');
                target.gotoAndPlay('laugh')
            }).wait(1000).call(function(){
                sound.volume = 0;
                target.gotoAndPlay('stand')
                target.flag = false;
            });
        }
    },

    {//とりさん
        src:'img/bird.png',
        x:1275,
        y:680,
        regX:127,
        regY:106,
        alpha:0,
        type:'sprite',
        targetData:{
                x:1275,
                y:680,
                radius:75
        },
        spriteData:{
            images: ['img/bird.png'],
            frames:{width:253,height:211},
            animations:{
                stand:0,
                fly:[1,20]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).wait(500).to({alpha:1},1000).call(function(){
                sound = createjs.Sound.play('fly',{loop:3});
                target.gotoAndPlay('fly')
            }).to({x:3100},5000,createjs.Ease.cubicIn).to({alpha:0},300).to({x:1275},100).call(function(){
                sound.volume = 0;
                target.flag = false;
            });
        }
    },

    {//ハスの花
        src:'img/hasunohana.png',
        x:994,
        y:1310,
        regX:83,
        regY:67,
        alpha:1,
        type:'sprite',
        targetData:{
                x:994,
                y:1310,
                radius:37
        },
        spriteData:{
            images: ['img/hasunohana.png'],
            frames:{width:165,height:133},
            animations:{
                stand:0,
                grow:[1,20],
                flower:21
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('hasu');
                target.gotoAndPlay('grow');
            }).wait(700).call(function(){
                target.gotoAndStop('flower')
            }).wait(3000).call(function(){
                sound.volume = 1;
                target.flag = false;
                target.gotoAndStop('stand')
            });
        }
    },


    {//さくら淡い色左側
        src:'img/longsakura.png',
        x:390,
        y:435,
        regX:195,
        regY:50,
        alpha:0,
        type:'sprite',
        targetData:{
                x:475,
                y:550,
                radius:200
        },
        spriteData:{
            images: ['img/longsakura.png'],
            frames:{width:390,height:99},
            animations:{
                stand:0,
                fall:[1,31],
            }
        },
        hitAnime:function(target){
            createjs.Tween.get(target).to({alpha:1},1000).call(function(){
                target.gotoAndPlay('fall');
            }).to({y:950},3000).to({alpha:0},100).to({y:435},100).call(function(){
                target.gotoAndStop('stand');
                target.flag = false;
            })
        }
    },


    {//さくら濃い色右側
        src:'img/sakura.png',
        x:655,
        y:470,
        regX:16,
        regY:50,
        alpha:0,
        type:'sprite',
        targetData:{
                x:475,
                y:550,
                radius:200
        },
        spriteData:{
            images: ['img/sakura.png'],
            frames:{width:91,height:99},
            animations:{
                stand:0,
                fall:[1,23],
            }
        },
        hitAnime:function(target){
            createjs.Tween.get(target).to({alpha:1},1000).call(function(){
                target.gotoAndPlay('fall');
            }).to({y:950},3000).to({alpha:0},200).to({y:470},100).call(function(){
                target.gotoAndStop('stand');
                target.flag = false;
            })
        }
    },

    {//さくら濃い色中央
        src:'img/sakura.png',
        x:445,
        y:550,
        regX:16,
        regY:50,
        alpha:0,
        type:'sprite',
        targetData:{
                x:475,
                y:550,
                radius:200
        },
        spriteData:{
            images: ['img/sakura.png'],
            frames:{width:91,height:99},
            animations:{
                stand:0,
                fall:[1,23],
            }
        },
        hitAnime:function(target){
            createjs.Tween.get(target).to({alpha:1},1000).call(function(){
                target.gotoAndPlay('fall');
            }).to({y:950},4000).to({alpha:0},200).to({y:550},100).call(function(){
                target.gotoAndStop('stand');
                target.flag = false;
            })
        }
    },


    {//さくら淡い色右側
        src:'img/rightsakura.png',
        x:525,
        y:675,
        regX:195,
        regY:50,
        alpha:0,
        type:'sprite',
        targetData:{
                x:475,
                y:550,
                radius:200
        },
        spriteData:{
            images: ['img/rightsakura.png'],
            frames:{width:390,height:99},
            animations:{
                stand:0,
                fall:[1,31],
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).to({alpha:1},1000).call(function(){
                target.gotoAndPlay('fall');
                sound = createjs.Sound.play('shine');
            }).to({y:950},5500).to({alpha:0},200).to({y:675},100).call(function(){
                target.gotoAndStop('stand');
                sound.volume = 0;
                target.flag = false;
            })
        }
    },

    {//さくら濃い色左
        src:'img/sakura.png',
        x:240,
        y:600,
        regX:16,
        regY:50,
        alpha:0,
        type:'sprite',
        targetData:{
                x:475,
                y:550,
                radius:200
        },
        spriteData:{
            images: ['img/sakura.png'],
            frames:{width:91,height:99},
            animations:{
                stand:0,
                fall:[1,23],
            }
        },
        hitAnime:function(target){
            createjs.Tween.get(target).to({alpha:1},1000).call(function(){
                target.gotoAndPlay('fall');
            }).to({y:950},4000).to({alpha:0},200).to({y:600},100).call(function(){
                target.gotoAndStop('stand');
                target.flag = false;
            })
        }
    },



    {//たんぽぽ
        src:'img/tanpopo.png',
        x:576,
        y:1065,
        regX:348,
        regY:255,
        alpha:1,
        type:'sprite',
        targetData:{
                x:500,
                y:1065,
                radius:150
        },
        spriteData:{
            images: ['img/tanpopo.png'],
            frames:{width:695,height:510},
            animations:{
                stand:0,
                fly:[1,28]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).call(function(){
                sound = createjs.Sound.play('wind');
                target.gotoAndPlay('fly')
            }).wait(3000).call(function(){
                target.gotoAndPlay('stand')
                sound.volume = 0;
                target.flag = false;
            });
        }
    },

    {//せみ
        src:'img/semi.png',
        x:1275,
        y:1000,
        regX:127,
        regY:106,
        alpha:0,
        type:'sprite',
        targetData:{
                x:1275,
                y:1000,
                radius:75
        },
        spriteData:{
            images: ['img/semi.png'],
            frames:{width:94,height:106},
            animations:{
                stand:0,
                sing:[1,14]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).wait(500).to({alpha:1},1000).call(function(){
                sound = createjs.Sound.play('semi',{loop:3});
                target.gotoAndPlay('sing')
            }).wait(5000).to({alpha:0},500).call(function(){
                sound.volume = 0;
                target.flag = false;
            });
        }
    },

    {//かえる
        src:'img/flog.png',
        x:900,
        y:1210,
        regX:104,
        regY:129,
        alpha:0,
        type:'sprite',
        targetData:{
                x:900,
                y:1210,
                radius:75
        },
        spriteData:{
            images: ['img/flog.png'],
            frames:{width:208,height:257},
            animations:{
                water:0,
                up:[1,17],
                sing:[18,28],
                down:[29,34]
            }
        },
        hitAnime:function(target){
            var sound;
            createjs.Tween.get(target).wait(400).to({alpha:1},200).call(function(){
                sound = createjs.Sound.play('water2',{loop:1});
                target.gotoAndPlay('up')
            }).wait(200).call(function(){
                sound = createjs.Sound.play('flog',{loop:2});
                target.gotoAndPlay('sing')
            }).wait(5000).call(function(){
                sound = createjs.Sound.play('water3',{loop:1});
                target.gotoAndPlay('down')
            }).to({alpha:0},200).call(function(){
                target.gotoAndPlay('stand')
                sound.volume = 0;
                target.flag = false;
            });
        }
    },



    //一番上にかぶせる画像__________________________________________
    {//白紙[75]
        src:'img/white.png',
        x:1537,
        y:768,
        regX:1025,
        regY:768,
        alpha:1,
        type:'bitmap',
        startAnime:function(target){
            createjs.Tween.get(target).wait(3000).to({alpha:0},100);
        }
    },

    {//フィールド画面[76]
        src:'img/first.png',
        x:1537,
        y:768,
        regX:1025,
        regY:768,
        alpha:1,
        type:'bitmap',
        // startAnime:function(target){
        //     createjs.Tween.get(target).wait(2000).to({alpha:0},1000);
        // }
    },

    {//ボタン押す画面[77]
        src:'img/opning.png',
        x:1537,
        y:768,
        regX:1025,
        regY:768,
        alpha:1,
        type:'bitmap',
    },

    {//ボタン[78]
        src:'img/button.png',
        x:1537,
        y:900,
        regX:160,
        regY:161,
        alpha:1,
        type:'bitmap'
    },

];
