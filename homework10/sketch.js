var leftEyeX = 270
var rightEyeX = 430
var eyeY = 350

var redColor = 102
var greenColor = 167
var blueColor = 189

var lLipY = 540
var rLipY = 551

var eyeMovement = .2
var lipMovement = .05

var size = 25
var sizeMovement= .5
var count = 0

var nameX = 600
var nameY = 770
var nameMovement = 2



function setup() {
  createCanvas(700, 800);
  
}

function draw() {
  background(220);
  //title
  fill(1330);
  textSize(size);
  size+= sizeMovement;
  count++;
  if(count >5)
  {
    sizeMovement*= -1;
    count=0
  }
  text("My Digital Self", 200, 100)

  noStroke();
  
  // shirt
  fill(51, 130, 121);
  triangle(350, 600, 500, 800, 200, 800)

  // head
  fill(242, 234, 206);
  ellipse(350, 400, 400, 600);

  
  
  
  // eyes
  fill('white')
  ellipse(270, 350, 90, 40);
  ellipse(430, 350, 90, 40);
  // eyecolor
  fill(redColor, greenColor, blueColor);
  circle(leftEyeX, eyeY, 40);
  circle(rightEyeX, eyeY, 40);
  // pupil
  fill(10, 10, 10);
  circle(leftEyeX, eyeY, 12);
  circle(rightEyeX, eyeY, 12);
  
  leftEyeX +=eyeMovement;
  rightEyeX +=eyeMovement;
  if(leftEyeX >= 285 || leftEyeX  <=255 && rightEyeX >= 445 || rightEyeX <= 415)
  {
    eyeMovement*= -1; 
  }

  //hair
  fill(252, 252, 220);
  beginShape();
  vertex(450, 60);
  vertex(250, 290);
  vertex(230, 230);
  vertex(150, 700);
  vertex(90, 650);
  vertex(40, 475);
  vertex(100, 250);
  vertex(150, 130);
  vertex(250, 80);
  vertex(315, 45);
  vertex(350, 40);
  endShape(CLOSE);

  beginShape();
  vertex(430, 80);
  vertex(550, 525);
  vertex(540, 700);
  vertex(610, 650);
  vertex(630, 475);
  vertex(590, 300);
  vertex(540, 150);
  vertex(450, 60);
  endShape(CLOSE);
  triangle(400, 60, 480, 120, 300, 250)  
  
  //lips
  noStroke();
  fill(245, 153, 132);
  arc(350, 540, 160, 100, 6.5, HALF_PI + HALF_PI, );
  ellipse(311, lLipY, 82, 20);
  ellipse(382, rLipY, 97, 30);
  lLipY+=lipMovement;
  rLipY+=lipMovement;
 
  if(lLipY >= 545 || lLipY <= 530 && rLipY >=556 || rLipY <=546)
  {
    lipMovement*= -1
  }
  
  


  noFill();
  stroke(158, 150, 149);
  strokeWeight(2);
  curve(350, 450, 271, 545, 426, 555, 350, 420);

  noFill();
  stroke(237, 219, 192)
  bezier(350, 500, 450, 530, 350, 375, 350, 350)
  
  fill(102, 167, 189);
  textSize(20);
  textAlign(RIGHT, BASELINE);
  text("Holly Haslam", nameX, nameY);
  if(nameX>=630 || nameX<=110)
    {
      nameMovement*=-1
    }
  nameX += nameMovement
  nameY += nameMovement
}