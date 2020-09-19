const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var FD, BF;

function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  FD = new Stage(100, 100, 200, 50);
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  
  drawSprites();
}