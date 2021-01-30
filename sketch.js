const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground,box1;
var rain=[];
var umbrella;
var thunder;
var t1,t2,t3,t4;
var count=0; 

function preload(){
t1=loadImage("images/thunderbolt/1.png")
t2=loadImage("images/thunderbolt/2.png")
t3=loadImage("images/thunderbolt/3.png")
t4=loadImage("images/thunderbolt/4.png")
}
function setup(){
    var canvas = createCanvas(400,400);
    
    engine = Engine.create();//to create engine
    world = engine.world;//create world using engine
   ground=new Ground();
  umbrella=new Umbrella();
   //box2=new box(240,50,50,100);


}

function draw(){
    background(0);
    rain.push(new Rain(random(50,350),-10,3));
    Engine.update(engine);
 ground.display();
 for(var i=0;i<rain.length;i=i+1){
    rain[i].display();  
 }
  umbrella.display();
//box2.display();
  
var rand=Math.round(random(1,4));
if(frameCount%80===0){
    count=frameCount;
thunder=createSprite(random(10,370),random(0,30),10,10);
switch(rand){
case 1:thunder.addImage(t1);
break;
case 2:thunder.addImage(t2);
break;
case 3:thunder.addImage(t3);
break;
case 4:thunder.addImage(t4);
break;
default:break;
}
thunder.scale=random(0.3,0.6);
thunder.lifetime=10;
}
drawSprites();
}