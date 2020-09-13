var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// var posx = helicopterSprite.x;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite = Bodies.rectangle(0,380,800,50);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	fill ("white");
	ground = Bodies.rectangle(400, 690, 800, 50 , {isStatic:true});
	 World.add(world, ground);
	//  ground.shapeColor = "white";


	Engine.run(engine);


  
}


function draw() {
  rectMode(CENTER);


  background(0);
  Engine.update(engine);



  rect(ground.position.x,ground.position.y,800,50);

  	packageSprite.x= packageBody.position.x;
	packageSprite.y= packageBody.position.y;

	// packageBody.position.x = helicopterSprite.x;
	// packageBody.position.y = helicopterSprite.y;




  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:false});
	World.add(world, packageBody);

	
	packageSprite.x= packageBody.position.x ;
	packageSprite.y= packageBody.position.y ;

	// packageBody.position.x = helicopterSprite.x;
	// packageBody.position.y = helicopterSprite.y;




	

	drawSprites();
    
  }
}



