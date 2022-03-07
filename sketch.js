
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
  
	var rock_options = 
	{
	  restitution : 0.85,
	  //frictionAir : 0.05
	}
  
	var ball_options = {
	  restitution : 0.80,
	  frictionAir : 0.01
	}
  
	var ground_options = {
	  isStatic : true
	}
	var g2_options = {
		isStatic : true
	}
	wall = Bodies.rectangle(24,150,205,10,ground_options);
	World.add(world,wall);
  
	ball = Bodies.circle(100,40,20,ball_options);
	World.add(world,ball);
  
	rock = Bodies.circle(300,10,10,rock_options);
	World.add(world,rock);
  
	ground = Bodies.rectangle(200,250,200,40,ground_options);
	World.add(world,ground);
	
	g2 = Bodies.rectangle(250,300,200,40,g2_options);
	World.add(world,g2);

	rectMode(CENTER);
	ellipseMode(RADIUS);
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  
  Engine.update(engine);
 
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
   
  ellipse(rock.position.x,rock.position.y,20);
 
  rect(wall.position.x,wall.position.y,200,10);
}



