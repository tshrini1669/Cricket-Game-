var bat,ball,batImage,ballImage;
var bound1,bound2,bound3,bound4;
var score;
var score=0;
var BallGroup;

function preload(){
  batImage=loadImage("bat2.png");
  ballImage=loadImage("ball2.png");
}

function setup(){
  createCanvas(1200,500);
  bat=createSprite(70,209,10,10);
  bat.addImage(batImage);
  bat.scale=0.3;
  //bounds
  bound1=createSprite(400,97,750,5)
  bound1.shapeColor="white"
  bound2=createSprite(772,198,5,200);
  bound2.shapeColor="white";
  bound3=createSprite(400,300,750,5);
  bound3.shapeColor="white";
  bound4=createSprite(28,198,5,200);
  bound4.shapeColor="white";

  ball=createSprite(760,200,20,10);
 
  ball.addImage(ballImage);
  ball.scale=0.2;
 
  BallGroup=new Group();
  score = 0;
}

function draw(){
  background("green")
 /// bat.x=mouseX;
 // bat.y=mouseY;

if(keyDown("UP_ARROW")){
  bat.velocityY=-2;
}
if(keyDown("DOWN_ARROW")){
  bat.velocityY=2;
}
if(keyDown("space")){
  serveball();
}
if(bat.isTouching(ball)){
  ball.x=760;
  ball.y=200;
  ball.velocityY=0;
  ball.velocityX=0;
  score=score+1;
}
if(score===10){
  stroke("white");
  textSize(30);
  text("Hurray! You have Won the match. To play again reload the game,Thanks",20,450);
}
if(ball.isTouching(bound4)){
  score=score-1;
}
stroke("white");
textSize(25);
text("Press Space  bar to serve the ball",500,50);
 bat.collide(bound1);
 bat.collide(bound2);
 bat.collide(bound3);
 bat.collide(bound4);
 ball.bounceOff(bound1);
 ball.bounceOff(bound2);
 ball.bounceOff(bound3);
 ball.bounceOff(bound4);
 stroke("white");
 textSize(20);
 fill("white");
 text("Score: "+ score, 120,20);        
 //spawnBall();
  drawSprites();
}

function serveball(){
  ball.velocityY=Math.round(random(-2,3)) 
  ball.velocityX=-5
}

