var b;
var w;
var

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  noStroke(0);
  b = color (0);
  w = color (255);
}

function draw()
{
//  display instructions for top bar
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("b for black, w for white", 10, 15);
}

function mouseDragged()
{
 strokeWeight(1);
 stroke(b);
 line(mouseX, mouseY, pmouseX, pmouseY);
}

function keyPressed(key == ' ')
{
	if(backgroundColor=0)
	{
    backgroundColor(255);
    fill(0);
	}
  else
	{
    backgroundColor(0);
    fill(255);
	}
}
