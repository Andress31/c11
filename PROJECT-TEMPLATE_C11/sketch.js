var navioAnimacao
var navio
var navioImg
var marImg
var mar
function preload(){
  navioAnimacao = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
  marImg = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  mar = createSprite (200,200,10,10)
  mar.addImage(marImg)
  mar.velocityX = -5
  navio = createSprite (200,200,20,20);
  navio.addAnimation("movendo",navioAnimacao)
  navio.scale =0.5;
 
}

function draw() {
  background("blue");
    drawSprites();
if(mar.x < 0){
mar.x = width/2;
}
}
