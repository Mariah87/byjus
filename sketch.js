
function preload(){
  //imagens pré-carregadas
  
    trex_running = loadAnimation("Runner-1.png", "Runner-2.png", "bomb.png");
    trex_collided = loadImage("Runner_collided.png");

    groundImage = loadImage("path.png")
}


function setup(){
  createCanvas(400,400);
  //crie sprite aqui
  runner = createSprite(50,160,20,50);
  runner.addAnimation("running", runner_running);
  runner.scale = 0.5;
  
  //criar um sprite ground (chão)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",path.png);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite (200,190,400,10);w
  invisibleGround.visible = false;

}

function draw() 
{

  drawSprites();

  background(0);
  if (keyDown("RIGHT_ARROW")
  
    runner.velocityY = -10;
  }

    runner.velocityY = runner.velocityY + 0.8

    if (ground.x < 0) 
  {
    ground.x = ground.width / 2;
  }

  runner.collide(invisibleGround);
 
}

