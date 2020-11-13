// character beginning position
var characterX = 30;
var characterY = 30;
//movement keys defined
var w = 87;
var s = 83;
var a = 65;
var d = 68;
//floating square x and y
var squareX = [];
var squareY = [];
var squareXspeed = [];
var squareYspeed = [];
//floating circle x and y
var circleX = [];
var circleY = [];
var circleXspeed = [];
var circleYspeed = [];
//floating circle 2 x and y

var diameters = [];
//ellispe created when mouse clicked
var mouseShapeX;
var mouseShapeY;


function setup() {
  createCanvas(800, 600);
for (var i = 0; i < 15; i++){
  //get a random speed when starting
  squareXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  squareYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  circleXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  circleYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  
  //get a random number between 0 and number listed
  squareX[i] = getRandomNumber(800)
  squareY[i] = getRandomNumber(600);
  
  diameters[i] = getRandomNumber(50);
  circleX[i] = getRandomNumber(800);
  circleY[i] = getRandomNumber(600); 
}
  
  
  createCharacter(30, 30);
 
}

function draw() {
  background(217, 212, 208);
  
  drawCharacter();
  //call create borders function
  createBorderExit();
  
  //call character movement
  characterMovement();
  //obstacle yellow square
  
  //draw shape
  for (var i = 0; i < squareX.length; i++){
     
      drawSquare(i);

      moveSquare(i);
  
      drawCircle(i);
      
      moveCircle(i);
  }
      
   
  winMessage();
  
  drawOvalOnClick();
}
function createBorderExit() {
  fill(252, 107, 3)
  //top border
  rect(0, 0, width, 20);
  //left border
  rect(0, 0, 20, height);
  //bottom border
  rect(0, height - 20, width, 20);
  //right upper border
  rect(width - 20, 0, 20, height - 70);
  //exit message
  textSize(15);
  fill(250, 5, 5)
  text("This way out!", width - 115, height - 80);
}
      
function createCharacter(x, y){
      characterX = x
      characterY = y
}
      
function drawCharacter(){
  fill(250, 5, 5)
  circle(characterX, characterY, 30);
}

function characterMovement() {
  // handle the keys
  if (keyIsDown(w)) {
    characterY -= 7;
  }
  if (keyIsDown(s)) {
    characterY += 7;
  }
  if (keyIsDown(a)) {
    characterX -= 7;
  }
  if (keyIsDown(d)) {
    characterX += 7;
  }
}


function winMessage(){
  //if character leaves the exit
  if (characterX > width && characterY > height - 50) {
    fill(0);
    stroke(5);
    textSize(100)
    text("You Win!", width / 2 - 200, height / 2 - 10);
  }
}
function drawOvalOnClick(){
  //mouse click shape
  fill(132, 3, 252);
  ellipse(mouseShapeX, mouseShapeY, 75, 50);
  
}

function mousePressed() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
function getRandomNumber(number) {
  return Math.floor(Math.random() * number) + 10;
}
function drawSquare(i){
    fill(252, 215, 5);
   square(squareX[i], squareY[i], diameters[i]);
}
function drawCircle(i){
  fill(20, 26, 252);
  circle(circleX[i], circleY[i], diameters[i]);

}
function moveSquare(i){
  //start with random speed for square obstacle
        squareXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        squareYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);

        //move the squares
        squareX[i] += squareXspeed[i];
        squareY[i] += squareYspeed[i];
        //check if square goes past borders
        if (squareX[i] > width) {
          squareX[i] = 0;
        }
        if (squareX[i] < 0) {
          squareX[i] = width;
        }
        if (squareY[i] > height) {
          squareY[i] = 0;
        }
        if (squareY[i] < 0) {
          squareY[i] = height;
        }
}
function moveCircle(i){
      circleXspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * -8)) + 1);
      circleYspeed[i] = Math.floor(Math.random() * (Math.floor(Math.random() * -6)) + 1);
      //move the circles
      circleX[i] += circleXspeed[i];
      circleY[i] += circleYspeed[i];

      if (circleX[i] > width) {
          circleX[i] = 0;
      }
      if (circleX[i] < 0) {
          circleX[i] = width;
      }
      if (circleY[i] > height) {
          circleY[i] = 0;
      }   
      if (circleY[i] < 0) {
          circleY[i] = height;
      }
}
      