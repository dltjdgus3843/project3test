function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(81, 126, 148);
  randomSeed(0);
  
  let x, y, r;
  let delta = 100;
  
  let iceC = map(mouseX, 0, windowWidth, 0, 55);
  let sunLight = map(mouseY, 0, windowHeight, 0, 100);
  
  for (y=0; y<windowHeight; y+=delta) {
    for (x=0; x<windowWidth; x+=delta) {
      r = random(0, 1);
      if (r<1/3) {
        stroke(255);
        strokeWeight(1);
        fill(iceC+random(200,255));
        rect(x, y, delta, delta, 20);
      } else if (r>=1/3 && r<2/3) {
        stroke(255);
        strokeWeight(1);
        fill(100, 160, iceC+random(150,255));
        ellipse(x, y, delta, delta);
      } else {
        stroke(255, 255, 0, sunLight);
        strokeWeight(sunLight);
        fill(iceC+random(200,255), iceC+random(200,255), 0, 90);
        line(x, y, x+delta, y+delta);
      }
    }
  }
}




추가해야 할 사항
4 배경 색깔을 여러 개 만드는 건 어떨까? (mouseClick 함수로)