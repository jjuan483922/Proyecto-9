var hola
function setup() {
  createCanvas(700,700);
  hola=createSprite(400,400,50,50)
}

function draw() 


{
  background("green");
  drawSprites();
 if (keyDown(RIGHT_ARROW)){
  hola.x+=10

 }
if (keyDown(LEFT_ARROW)){
  hola.x-=10
}
if (keyDown(UP_ARROW)){
  hola.y-=10
}
if (keyDown(DOWN_ARROW)){
  hola.y+=10
}
}




