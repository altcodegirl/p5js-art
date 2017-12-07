
function draw()
{
  background(backgroundColor);

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
    backgroundColor = color(random(255), random(255), random(255));
  }
}
