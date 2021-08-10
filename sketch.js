
var ballon, balloonImage1, balloonImage2;
var Position;
var hball;
var database, height;

function preload(){
  bg = loadImage("images/Bg.png")
  balloonImage1 = loadAnimation("images/Hab3.png")
  balloonImage2 = loadAnimation("images/Hab3.png","images/Hab4.png")
}

function setup() {
  database = firebase.database();
  createCanvas(1500,700);
  balloon = createSprite(400, 200, 50, 50);
  balloon.addAnimation("Hab",balloonImage1);
  balloon.scale =0.7
    var balloonPosition = database.ref('balloon/height');
    balloonPosition.on("value",readposition,showerror);

}

function draw() {
  background(bg); 
  
  if(keyDown(LEFT_ARROW)){
    updateheight(-10,0);
    balloon.addAnimation("Hab",balloonImage2)
 }
 else if(keyDown(RIGHT_ARROW)){
     updateheight(10,0);
     balloon.addAnimation("Hab",balloonImage2)
 } 
 else if(keyDown(UP_ARROW)){
    updateheight(0,-10);
    balloon.addAnimation("Hab",balloonImage2)
 }
 else if(keyDown(DOWN_ARROW)){
     updateheight(0,+10);
     balloon.addAnimation("Hab",balloonImage2)
 }
 
  drawSprites();
  textSize(40)
  fill("black")
  text("Perss Your Arrow Keys to Move The Hot Air Balloon.", 500,350)
}

function updateheight(x,y){
  database.ref('balloon/height').set({
      'x' : height.x + x,
      'y' : height.y + y
  })
  
}

function readposition(data){
height = data.val();
balloon.x = height.x
balloon.y = height.y
}

function showerror(){
  console.log("error in writing to the dashbord");
}
