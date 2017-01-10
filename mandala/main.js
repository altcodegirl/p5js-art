var diameter = 2;
var diameterStep = 0.5;
var centerX;
var centerY;
var numSlices = 12;
var maxNumSlices = 20;
var numPositions = 30;

var positions = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  centerX = width/2;
  centerY = height/2;

  shuffleNumSlices();

  fill(255);
  stroke(0, 0, 0, 0);
}

function draw() {
  // Add the latest position to the array
  positions.unshift({ x: mouseX, y: mouseY });

  translate(width/2, height/2);
  background(255);

  // For each slice
  for (var i = 0; i < numSlices; i++) {
    drawPoints(positions);
    rotate(360 / numSlices);
  }
}

function drawPoints(xs) {
  for (var i = xs.length - 1; i >= 0; i--) {
    var positions = xs[i];
    var x = positions.x;
    var y = positions.y;
    var dia = diameter + diameterStep * (numPositions - i);
    fill(1, 1, 1 * (1 - i / numPositions));
    ellipse(x - centerX, y - centerY, dia, dia);
  }
}

function shuffleNumSlices() {
  numSlices =  Math.ceil(Math.random() * (maxNumSlices - 1)) + 1;
}
