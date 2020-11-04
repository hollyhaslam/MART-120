// character beginning position
var characterX = 30;
var characterY = 30;
//movement keys defined
var w = 87;
var s = 83;
var a = 65;
var d = 68;
//floating square x and y
var squareX = 40;
var squareY = 60;
var squareXspeed;
var squareYspeed;
//floating circle x and y
var circleX = 400;
var circleY = 300;
var circleXspeed;
var circleYspeed;
//floating circle 2 x and y
var x = 50
var y = 50
var diameter = 125
//ellispe created when mouse clicked
var mouseShapeX;
var mouseShapeY;

function setup() {
  createCanvas(800, 600);
  //get a random speed when starting
  squareXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  squareYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  circleXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  circleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);


}

function draw() {
  background(217, 212, 208);

  createBorderExit();

  createCharacter();

  characterMovement();

  createObstacles();

  moveYellowSquare();

  moveBlueCircle();
  
  moveGreenCircle();
  
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

function createCharacter() {
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

function createObstacles() {
  //obstacle yellow square
  fill(252, 215, 5);
  square(squareX, squareY, 25);
  //obstacle green circle
  fill(24, 200, 29);
  circle(x, y, diameter);
  //obstacle blue circle
  fill(20, 26, 252);
  circle(circleX, circleY, 45);
}

function moveYellowSquare() {
  //start with random speed for square obstacle
  squareXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
  squareYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);

  //move the yellow square
  squareX += squareXspeed;
  squareY += squareYspeed;

  if (squareX > width) {
    squareX = 0;
  }
  if (squareX < 0) {
    squareX = width;
  }
  if (squareY > height) {
    squareY = 0;
  }
  if (squareY < 0) {
    squareY = height;
  }

}

function moveBlueCircle() {
  //random speed for blue circle 
  cirlceXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * -8)) + 1);
  circleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * -6)) + 1);

  //move the blue circle
  circleX += circleXspeed;
  circleY += circleYspeed;

  if (circleX > width) {
    circleX = 0;
  }
  if (circleX < 0) {
    circleX = width;
  }
  if (circleY > height) {
    circleY = 0;
  }
  if (circleY < 0) {
    circleY = height;
  }
}

function moveGreenCircle() {
  //move the green circle
  if (x <= 800) {
    x += 10;
  } else if (x > 800) {
    x = 50;
  } else if (x > 200) {
    x += 5;
  }

  if (y <= 600) {
    y += 3;
  } else if (y > 600) {
    y = 50;
  } else if (y > 200) {
    y += 1;
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
  ellipse(mouseShapeX, mouseShapeY, 100, 50);
}

function mouseClicked() {
  mouseShapeX = mouseX;
  mouseShapeY = mouseY;
}
