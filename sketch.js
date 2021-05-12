var backgroundImg,platform;

function preload() {
  backgroundImg = loadImage("snow3.jpg");
}

function setup() {
  createCanvas(1500,750);

  createSprite(400, 200, 50, 50);
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);

  ground.display();


  drawSprites();
}