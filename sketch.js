var car;
var wall;

var carWeight;
var carSpeed;

var deformation;

function setup() {
  createCanvas(1600,400);
   
  wall = createSprite(1500,200,60,400);
  wall.shapeColor = (80,80,80);

  carWeight = Math.round(random(400,1500));
  carSpeed =  Math.round(random(30,95)); 
  
  car = new Car(carWeight, carSpeed);
}

function draw() {
  background("red");

  deformation = 0.5*carWeight*carSpeed*carSpeed/22500

  if(car.sprite.collide(wall)){
    car.velocityX = 0;
    if(deformation<100){
      car.sprite.shapeColor = color(0,255,0);
    }
    if(deformation<180 && deformation > 100){
      car.sprite.shapeColor = color(230,230,0);
    }
    if(deformation>180){
      car.sprite.shapeColor = color(255,0,0);
    }
  }

  drawSprites();
}
