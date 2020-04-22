//creating variables for all values and objects
var car,carWeight,carSpeed,wall
//creating variable for measuring deformation
var deformCount;
function setup() {
  //creating canvas
  createCanvas(1600,400);

  // creating sprite for car
  car=createSprite(200, 200, 50, 50);
  car.velocityX=4;

 //assingning car a random weight property 
  carWeight=random(400,1500);
  
  // assingning car a random speed property
  carSpeed=random(30,90);

//creating sprite for wall
  wall=createSprite(1500,200,60,400);

  //wall's color
  wall.shapeColor=color(80,80,80);
}

function draw() {
  if (car.isTouching(wall)) {   
    //calculating deformation
    deformCount=0.5*carWeight*carSpeed*carSpeed/22500;

   
    //making the car red if deformation is greater than 180
    if (deformCount>=180) {
      car.shapeColor=color(255,0,0);
    }
    //making the car yellow if deformation is between 80 and 180
    if (deformCount>100 && deformCount<180) {
      car.shapeColor=color(230,230,0);
    }
    //making the car green if deformation is lesser than 80
    if (deformCount<=100) {
      car.shapeColor=color(0,255,0);
    }
   
//making the car stop
    car.velocityX=0;
    
  }else{
    //making car white if not touching wall
    car.shapeColor=color(255,255,255);
  }
 //background black
  background(0); 
  
  //drawing sprites
  drawSprites();
}