var canvas, backgroundImage;

var distance = 0;

var game;

var car1;

var track;

function preload(){
  track = loadImage("../images/track.jpg");
  ground = loadImage("../images/ground.png");
}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  car1 = createSprite(displayWidth / 2,200);
  game = new Game();
}


function draw(){
  game.play();
  
}
