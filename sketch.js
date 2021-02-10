
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

const Constraint=Matter.Constraint;
var  stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy,tree;


function preload(){
	boy=loadImage("Plucking mangoes/boy.png");
	tree=loadImage("Plucking mangoes/tree.png")
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(30,30,30); 

	mango1=new mango(600,375,30);
  mango2=new mango(650,375,30);
	mango3=new mango(700,375,30);
	
	mango5=new mango(550,450,30);
	mango6=new mango(600,450,30);
	mango7=new mango(650,450,30);
	mango8=new mango(700,450,30);
	mango9=new mango(750,450,30);
	

	
	groundObject=new ground(width/2,600,width,20);
	launcherObject=new launcher(stoneObj.body,{x:235,y:420})
 
	
	Engine.run(engine);
 
}

function draw() {

  background(230);
  
  textSize(25);
  text("Press Space to get a second Chance to Play!!",50 ,50);
  image(boy ,200,340,200,300);
  image(tree,500,340,300,300);
  

  
  stoneObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  
  mango5.display();
  mango6.display();
 mango7.display();
  mango8.display();
  mango9.display();
  
  stoneObj.display();

  groundObject.display();
  launcherObject.display();
  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);
  detectCollision(stoneObj,mango9);
  
}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
}	

function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(stoneObj.body, {x:235, y:420}) 
	  launcherObject.attach(stoneObj.body);
	}
  }

  function detectCollision(lstone,lmango){
	
  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
 
  	if(distance<=lmango.r+lstone.r)
    {
      
  	  Matter.Body.setStatic(lmango.body,false);
    }

  }