var r;
var backgroundColor;
var isOverRectangle;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundColor = color(255);
  fill(0);
  stroke(0);
  r = color (0);
}

function draw()
{
  background(backgroundColor);
	// display instructions for top bar
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("draw your mandala", 10, 15);

  // check if mouse is inside the rectangle
  // mouseX >= x && mouseX <= x+width && mouseY >= y && mouseY <= y+height
  if (mouseX >= 150 && mouseX <= 150+100 && mouseY >= 150 && mouseY <= 150+100)
  {
    isOverRectangle = true;
  } else {
    isOverRectangle = false;
  }

  // draw a rectangle
  rectMode(CORNER);
  stroke(0);
  strokeWeight(5);
  if(isOverRectangle == true)
  {
    fill(100);
    cursor(HAND);
  } else {
	fill(200);
	cursor(ARROW);
  }
  rect(150, 150, 100, 100);

}

function mousePressed()
{
  if(isOverRectangle == true)
  {
    backgroundColor = color(random(255));
  }
}

function mouseDragged()
{
 strokeWeight(1);
 stroke(r);
 line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed()
{
	if(key == 'r' || key == 'R')
	{
		r = color(255, 0, 0);
	}
}
