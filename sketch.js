var car;
var wall;

var carWeight;
var carSpeed;

var deformation;

function setup() {
  createCanvas(1600,400);
   
  wall = createSprite(1500,200,60,400);
  wall.shapeColor = (80,80,80);

  car = new Car(carWeight, carSpeed);
  
  carWeight = Math.round(random(400,1500));
  carSpeed =  Math.round(random(30,95)); 
}

function draw() {
  background("red");


  car.velocityX = carSpeed;

  deformation = 0.5*carWeight*carSpeed*carSpeed/22500

  if(car.collide(wall)){
    car.velocityX = 0;
    if(deformation<100){
      car.shapeColor = (0,225,0);
    }
    if(deformation<180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}
