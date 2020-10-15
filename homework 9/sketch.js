function setup() {
   createCanvas(700, 800);
 }
 
 function draw() {
   background(220);
 
   noStroke();
   
   fill(51, 130, 121);
   triangle(350, 600, 500, 800, 200, 800);
 
 
   fill(242, 234, 206);
   ellipse(350, 400, 400, 600);
   
   fill(255, 254, 252);
   ellipse(270, 350, 90, 40);
   ellipse(430, 350, 90, 40);
   fill(102, 167, 189);
   circle(270, 350, 40);
   circle(430, 350, 40);
   
   fill(10, 10, 10);
   circle(430, 350, 12);
   circle(270, 350, 12);
 
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
   triangle(400, 60, 480, 100, 300, 270);
   
   noStroke();
   fill(245, 153, 132);
   arc(350, 540, 160, 100, 6.5, HALF_PI + HALF_PI, );
   ellipse(311, 540, 82, 20);
   ellipse(382, 551, 97, 30);
 
   noFill();
   stroke(158, 150, 149);
   strokeWeight(2);
   curve(350, 450, 271, 545, 426, 555, 350, 420);
 
   noFill();
   stroke(237, 219, 192);
   bezier(350, 500, 450, 530, 350, 375, 350, 350);
 
   fill(102, 167, 189);
   textSize(20);
   textAlign(RIGHT, BASELINE);
   text("Holly Haslam", 600, 770);
 
  
   }