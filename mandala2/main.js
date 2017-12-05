var r;

 function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
  r = color (0);
}

function draw()
{
	noStroke();
	fill(200);
	rect(0, 0, width, 25);
	fill(0);
	text("press r for red", 10, 15);
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
