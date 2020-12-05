const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var rope1,rope2,rope3,rope4,rope5;
var bobDiameter = 70;

function setup() {
	createCanvas(windowWidth, windowHeight);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(width/2,height/2-100,400,20);
	bobObject1 = new Bob(width/2,height/2+100,35);
	bobObject2 = new Bob(width/2 - 15,height/2+100,35);
	bobObject3 = new Bob(width/2 - 30,height/2+100,35);
	bobObject4 = new Bob(width/2 + 15,height/2+100,35);
	bobObject5 = new Bob(width/2 + 30,height/2+100,35);
  rope1 = new Rope(bobObject3.body,roof.body,-bobDiameter*2,0);
  rope2 = new Rope(bobObject2.body,roof.body,-bobDiameter,0);
  rope3 = new Rope(bobObject1.body,roof.body,0,0);
  rope4 = new Rope(bobObject4.body,roof.body,bobDiameter,0)
  rope5 = new Rope(bobObject5.body,roof.body,bobDiameter*2,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  keyPressed();

  drawSprites();
 
}

function keyPressed() {
	if (keyDown(UP_ARROW)) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	   Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-0.03,y:0})
	} 
	
}



