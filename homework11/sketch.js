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


//blinking varible
var i = 0

    function setup()
        {
            createCanvas(800, 600);
            //get a random speed when starting
            squareXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            squareYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            circleXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            circleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
        }
          
    function draw() 
        {
            background(238, 247, 235);
            fill(83, 173, 50);
            
            //top border
            rect(0,0,width, 20);
            //left border
            rect(0,0,20, height);
            //bottom border
            rect(0,height-20, width, 20);
            //right upper border
            rect(width-20, 0, 20, height-70);

            //exit message
            textSize(15);
            fill(250, 5, 5)
            text("This way out!", width-115, height-80);

            //character
            circle(characterX, characterY, 30);

            // handle the keys
            if(keyIsDown(w))
            {
                characterY -= 7;   
            }
            if(keyIsDown(s))
            {
                characterY += 7;   
            }
            if(keyIsDown(a))
            {
                characterX -= 7;   
            }
            if(keyIsDown(d))
            {
                characterX += 7;   
            }
            //obstacle 1
            fill(252, 215, 5);
            //shape of obstacle 1
            square(squareX, squareY, 25);

            //start with random speed for square obstacle
            squareXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 5)) + 1);
            squareYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * 2)) + 1);
           

            //move the obstacle
            squareX += squareXspeed;
            squareY += squareYspeed;

            if(squareX > width)
            {
                squareX = 0;
            }
            if(squareX < 0)
            {
                squareX = width;
            }
            if(squareY > height)
            {
                squareY = 0;
            }
            if(squareY < 0)
            {
                squareY = height;
            }
            //obstacle 2
            fill(5, 26, 252);
            //shape of obstacle 2
            circle(circleX, circleY, 45);

            //random speed for circle obstacle
            cirlceXspeed = Math.floor(Math.random() * (Math.floor(Math.random() * -8)) + 1);
            circleYspeed = Math.floor(Math.random() * (Math.floor(Math.random() * -6)) + 1);

            //move the circle
            circleX += circleXspeed;
            circleY += circleYspeed;

            if(circleX > width)
            {
                circleX = 0;
            }
            if(circleX < 0)
            {
                circleX = width;
            }
            if(circleY > height)
            {
                circleY = 0;
            }
            if(circleY < 0)
            {
                circleY = height;
            }
            
            fill(24,200,29);
            circle(x,y,diameter);
            if(x <= 800)
            {
                x+=10;
            }
            else if(x > 800)
            {
            x = 50;
            }  
            else if(x > 200 )
            {
                x+=5;
            }
            
            if(y <= 600)
            {
                y+=3;
            }
            else if(y > 600)
            {
                y = 50;
            }  
            else if(y > 200)
            {
                y+=1;
            }
            //if character leaves the exit
            if(characterX > width && characterY > height-50)
            {
                i = i + 1
                if (i % 30 === 0)
                {
                    fill(3, 252, 215);
                    stroke(30);
                    textSize(100);
                    text("You Win!", width/2-200, height/2-10);
                }
                else
                {
                    fill(238, 247, 235)
                }
            }    

                //mouse click shape
            fill(132, 3, 252);
            ellipse(mouseShapeX, mouseShapeY, 100, 50);
            }
            
            function mouseClicked()
            {
                mouseShapeX = mouseX;
                mouseShapeY = mouseY;
            }
          
        