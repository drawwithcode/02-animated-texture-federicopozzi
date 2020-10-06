const colorPalette = ["peachpuff", "aqua", "crimson", "coral"];
const colorPalette2 = ["lime", "MistyRose", "PaleGoldenrod", "Peru"];
function setup() {
  createCanvas(windowWidth,windowHeight);
  frameRate(24);
}

function draw() {
  background("black");

const a = mouseX+mouseY;
  for(var x=10; x<=windowWidth; x+=100) {
    for(var y=20; y<=windowHeight; y+=100) {

      push();
      translate(x,y);
      rotate(a/200);
      // fill('aqua');
      noFill();
      strokeWeight(1);
      let col = random(colorPalette);
      stroke(col)
      rect(10,20,20,20);
      pop();
    }
  }

  for(var x=30; x<=windowWidth; x+=100) {
    for(var y=50; y<=windowHeight; y+=100) {

      push();
      translate(x,y);
      rotate(-a/200);
      noFill();
      strokeWeight(1);
      let col = random(colorPalette2);
      stroke(col)
      circle(10,20,40);
      pop();
    }
  }

}
