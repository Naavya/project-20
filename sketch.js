var car,wall
var speed,weight

function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 10, 10);
  wall=createSprite(1500,200,10,height/2)
  car.shapeColor="red"
  speed=random(5,10)
  speed2=random(-5,-10)
  weight=random(400,1500)
}

function draw() {
  background(0);
  
  car.velocityX=speed 
   if(wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX=0
     var deformation=0.5*weight*speed*speed/22509
     
     if(deformation<100){
       car.shapeColor="yellow"
       
     }
   }

  drawSprites();
}