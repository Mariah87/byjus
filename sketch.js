var box;
function setup() {
 box = createSprite (200,200,20,20);
  createCanvas(400,400);
}

function draw() 
{
 if (keyIsdown (RIGHT_ARROW)){
   box.position.x = box.position.x +5;
 }
  drawSprites ();
  background("white");

}




