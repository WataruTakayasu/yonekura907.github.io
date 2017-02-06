var canvasNum = 0;

var titleX = 100;
var titleY = 150;

var junifesX = new Array(5);
var junifesY = new Array(5);
var junifesW = new Array(5);

var musica = new Array(10);
var musicaCol = new Array(10);
var musicaVel = new Array(10);

var radian = 0;
var ellX = 0;
var ellY = 0;

function setup() {
 	createCanvas(windowWidth, windowHeight);
 	frameRate(60);
 	smooth();
 	noStroke();

 	junifesW[0] = windowWidth/2;
 	junifesX[0] = 0;
 	junifesY[0] = 0;

 	for(var i = 1; i < 5; i++) {
 		junifesW[i] = junifesW[i - 1] / 1.9;
 		junifesX[i] = 1 + junifesX[i -1] + junifesW[i - 1];
 	}
 	junifesY[1] = windowHeight/4;
 	junifesY[2] = windowHeight/2;
 	junifesY[3] = windowHeight/5;
 	junifesY[4] = 0;

 	for(var i = 0; i < musica.length; i++) {
 		musicaCol[i] = color(random(255),random(255), random(255));
 		musica[i] = createVector(random(windowWidth), random(windowHeight));
 		musicaVel[i] = random(10,15);
 	}
}

function draw(){

	if(canvasNum == 0) {
		background(255);

		textSize(100);

		fill(46,217,43);
		text('JOSEF', titleX, titleY);

		fill(238, 189, 9);
		text('MULLER', titleX, titleY+200);

		fill(240, 45, 23);
		text('BROCKMAN' , titleX, titleY+400);
	}

	else if (canvasNum == 1) {
		background(200);
	}

	else if (canvasNum == 2) {
		background(255);

		fill(246,162,30);

		for(var i = 0; i < 6; i++) {
			rect(junifesX[i],junifesY[i], junifesW[i], windowHeight/2);

			junifesY[i] += 5 + i * 2;

			if(junifesY [i]> windowHeight) {
				junifesY[i] = 0;
			}
		}
	}

	else if (canvasNum == 3) {
		background(250);

		fill(0);

		radian += 0.05;

		ellX = 250 * sin(radian);
		ellY = 250 * cos(radian);

		ellipse(ellX + windowWidth, ellY , 600, 600);
		ellipse(ellX + windowWidth/2, ellY + windowHeight/2 , 300, 300);
		ellipse(ellX + windowWidth/2 + 210, ellY + windowHeight/2 + 150 , 200, 200);
		ellipse(ellX + windowWidth/2 + 300, ellY + windowHeight/2 + 20 , 100, 100);
	}

	else if (canvasNum == 4) {
		background(255);

		for(var i = 0; i < musica.length; i++) {
			fill(musicaCol[i]);
			rect(musica[i].x, musica[i].y, 10 , 10);

			musica[i].x -= musicaVel[i];
			musica[i].y += musicaVel[i];

			if(musica[i].x < 10) {
				musica[i].x = windowWidth;
			}

			if(musica[i].y > windowHeight - 10) {
				musica[i].y = random(windowHeight);
			}
		}
	}
}

function windowResized(){
	resizeCanvas(windowWidth,windowHeight);
}

document.querySelector('#year1955').addEventListener('click', function(e){
	document.getElementById("box").classList.add('fadein');
	document.getElementById("box").classList.remove('fadeout');

	if(document.getElementById("box2").classList.contains('fadein')) {
		document.getElementById("box2").classList.add('fadeout');
	}

	if(document.getElementById("box3").classList.contains('fadein')) {
		document.getElementById("box3").classList.add('fadeout');
	}

	if(document.getElementById("box4").classList.contains('fadein')) {
		document.getElementById("box4").classList.add('fadeout');
	}

	document.getElementById("box2").classList.remove('fadein');
	document.getElementById("box3").classList.remove('fadein');
	document.getElementById("box4").classList.remove('fadein');

	canvasNum = 1;

});

document.querySelector('#year1957').addEventListener('click', function(e){
	document.getElementById("box2").classList.add('fadein');
	document.getElementById("box2").classList.remove('fadeout');

	if(document.getElementById("box").classList.contains('fadein')) {
		document.getElementById("box").classList.add('fadeout');
	}

	if(document.getElementById("box3").classList.contains('fadein')) {
		document.getElementById("box3").classList.add('fadeout');
	}

	if(document.getElementById("box4").classList.contains('fadein')) {
		document.getElementById("box4").classList.add('fadeout');
	}

	document.getElementById("box").classList.remove('fadein');
	document.getElementById("box3").classList.remove('fadein');
	document.getElementById("box4").classList.remove('fadein');

	canvasNum = 2;
});

document.querySelector('#year1958').addEventListener('click', function(e){
	document.getElementById("box3").classList.add('fadein');
	document.getElementById("box3").classList.remove('fadeout');

	if(document.getElementById("box").classList.contains('fadein')) {
		document.getElementById("box").classList.add('fadeout');
	}

	if(document.getElementById("box2").classList.contains('fadein')) {
		document.getElementById("box2").classList.add('fadeout');
	}

	if(document.getElementById("box4").classList.contains('fadein')) {
		document.getElementById("box4").classList.add('fadeout');
	}

	document.getElementById("box").classList.remove('fadein');
	document.getElementById("box2").classList.remove('fadein');
	document.getElementById("box4").classList.remove('fadein');

	canvasNum = 3;
});

document.querySelector('#year1959').addEventListener('click', function(e){
	document.getElementById("box4").classList.add('fadein');
	document.getElementById("box4").classList.remove('fadeout');

	if(document.getElementById("box").classList.contains('fadein')) {
		document.getElementById("box").classList.add('fadeout');
	}

	if(document.getElementById("box2").classList.contains('fadein')) {
		document.getElementById("box2").classList.add('fadeout');
	}

	if(document.getElementById("box3").classList.contains('fadein')) {
		document.getElementById("box3").classList.add('fadeout');
	}

	document.getElementById("box").classList.remove('fadein');
	document.getElementById("box2").classList.remove('fadein');
	document.getElementById("box3").classList.remove('fadein');

	canvasNum = 4;

});

document.querySelector('.buttun').addEventListener('click', function(e){
	if(document.getElementById("box").classList.contains('fadein')) {
		document.getElementById("box").classList.add('fadeout');
	}

	if(document.getElementById("box2").classList.contains('fadein')) {
		document.getElementById("box2").classList.add('fadeout');
	}

	if(document.getElementById("box3").classList.contains('fadein')) {
		document.getElementById("box3").classList.add('fadeout');
	}

	if(document.getElementById("box4").classList.contains('fadein')) {
		document.getElementById("box4").classList.add('fadeout');
	}

	document.getElementById("box").classList.remove('fadein');
	document.getElementById("box2").classList.remove('fadein');
	document.getElementById("box3").classList.remove('fadein');
	document.getElementById("box4").classList.remove('fadein');

	canvasNum = 0;
});