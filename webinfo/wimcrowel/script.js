var x,y;
var spx,spy;

function setup(){
 createCanvas(windowWidth,windowHeight);
 console.log(windowWidth,windowHeight);
 background(200);

 x = width/2;
 y = height/2;

 spx = random(-10,10);
 spy = random(-7,7);
}

function draw(){
  background(200);
  fill(255,0,0);
  noStroke();
  ellipse(x,y,100,100);

  x+= spx;
  y+= spy;

  if(x-50 > width){
      spx = spx*-1;
  }
  if(x-50 < 0 ){
      spx = spx*-1;

  }
  if(y-50 > height){
      spy = spy*-1;
  }
  if(y-50 < 0 ){
      spy = spy*-1;

  }


}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);




}
