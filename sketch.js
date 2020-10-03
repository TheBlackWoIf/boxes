const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world,ground0,box1,box2;

function setup() {
  var Canvas = createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

  box1 = new box(200,300,50,50);
  box2 = new box(240,100,50,50);
  ground0 = new ground(200,390,400,20);
  /*
  var ground_options = {
    isStatic: true
  }

  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);

  var ball_options = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,100,20,ball_options);
  World.add(world,ball);

 console.log(ground);
 console.log(ground.type);
 console.log(ground.position.x);
 console.log(ground.position.y);
*/
} 

function draw() {
  background(0,0,0);  

  Engine.update(engine);

  box1.display();
  box2.display();
  ground0.display();
/*
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  */
}
