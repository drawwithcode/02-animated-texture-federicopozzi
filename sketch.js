
function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(0,20);

  for(var x=10; x<=windowWidth; x+=100) {
    for(var y=20; y<=windowHeight; y+=100) {

      push();
      translate(x,y);
      rotate(random(frameCount/20));
      // fill('aqua');
      noFill();
      strokeWeight(1);
      stroke("aqua")
      rect(10,20,20,20);
      pop();
    }
  }

  for(var x=30; x<=windowWidth; x+=100) {
    for(var y=50; y<=windowHeight; y+=100) {

      push();
      translate(x,y);
      rotate(-frameCount/20);
      noFill();
      strokeWeight(1);
      stroke("lime")
      circle(10,20,40);
      pop();
    }
  }
}
