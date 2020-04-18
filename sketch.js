var car;
var wall;

var carWeight;
var carSpeed;

var deformation;

function setup() {
  createCanvas(1600,400);
   
  wall = createSprite(1500,200,60,1600);
  wall.shapeColor = (80,80,80);

  car = createSprite(200, 200, 70, 30);
  car.shapeColor = "white";
}

function draw() {
  background("red");

  carWeight = Math.round(random(400,1500));
  carSpeed =  Math.round(random(30,95)); 

  car.velocityX = carSpeed;

  deformation = 0.5*carWeight*carSpeed*carSpeed/22500

  if(car.isTouching(wall)){
    car.velocityX = 0;
    if(deformation<100){
      car.shapeColor = (0,225,0);
    }
    if(deformation<180 && deformation > 100){
      car.shapeColor = (230,230,0);
    }
    if(deformation>180){
      car.shapeColor = (255,0,0);
    }
  }

  drawSprites();
}