const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world,ground,box,ball,rope;
var box1,box2,box3,box4,box5,box6;

function setup() {
  createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(600, 600, 1200, 20);
  box1=new Box(700,500,30,40);
  box2=new Box(700,400,30,40);
  box3=new Box(700,300,30,40);
  box7=new Box(710,500,30,40);
  box8=new Box(710,400,30,40);
  box9=new Box(710,300,30,40);
  box4=new Box(720,500,30,40);
  box5=new Box(720,400,30,40);
  box6=new Box(720,300,30,40);
  
  ball = new Ball(200, 200);
   
  rope = new Rope(ball.body,{x:550,y:250});

}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();

  ball.display();
  rope.display();

}


function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}


