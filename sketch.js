const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//var drop1;
var umbrella;
var thunder1,thunder2;
var maxDrops=100;
var drops;

function preload(){
    thunder1=loadImage("Images/thunderbolt/1.png");
    thunder2=loadImage("Images/thunderbolt/2.png");
}

function setup(){
    var canvas = createCanvas(500,600);
    engine = Engine.create();
    world = engine.world;
//drop1=new Drops(200,200,20,20)
umbrella=new Umbrella(200,400,400,400);
   Engine.run(engine);
}

function draw(){
    background(0);
    for(var i=0;i<maxDrops;i++){
      drops.push(new createDrop(random(0,400),random(0,400)));
    }
    Engine.update(engine);
//drop1.display();
umbrella.display();


}