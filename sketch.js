var car, speed, weight;
var wall, iwall;


function setup() {
  createCanvas(800,400);

  //creating car
  car = createSprite(50, 200, 30, 30);
  car.shapeColor = "white";
 
  //creating wall
  wall = createSprite(700, 200, 30, 120);
  wall.shapeColor = "blue";

  //giving speed and weight
  speed = random(55,90);
  weight = random(400,1500);

}



function draw() {
  background("black");  

  //giving velocity
  if(keyDown("space")){
    car.velocityX = speed;
  }

  if(car.overlap(wall)){
   
    //stopping car
    car.velocityX = 0;

   var deformation = 0.5 * weight * speed * speed/22500;
   if(deformation > 180){

   car.shapeColor = "red";
   }

   if(deformation < 180 && deformation > 100){

    car.shapeColor = "yellow";
   }


   if(deformation < 100){

    car.shapeColor = "green";
   }
  }

  drawSprites();
}