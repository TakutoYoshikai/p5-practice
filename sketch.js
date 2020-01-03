var colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "cyan",
  "purple",
  "brown",
];

var CircleClass = function () {
  this.x = 0;
  this.y = 0;
  this.r = 0;
  this.color = "white";
  this.display = false;
}

var RectClass = function() {
  this.x = 0;
  this.y = 0;
  this.width = 0;
  this.height = 0;
  this.color = "white";
  this.display = false;
}

var numbers = [];
for (var i = 0; i < 10; i++) {
  numbers.push("" + i);
}

var circles = [];
var rects = [];
var sounds = [];

function setup() {
  sounds.push(
    loadSound("sounds/coin.mp3"),
    loadSound("sounds/powerup.mp3"),
  )
  createCanvas(800, 800);
}

function draw() {
  background(255);
  rects.forEach(function(rec) {
    if (rec.display) {
      fill(rec.color);
      rect(rec.x - (rec.width / 2), rec.y - (rec.height / 2), rec.width, rec.height);
      rec.width += 2;
      rec.height += 2;
      if (rec.width > 150) {
        rec.display = false;
      }
    }
  });
  rects = rects.filter(function(rec) {
    return rec.display;
  });
  circles.forEach(function(cir) {
    if (cir.display) {
      fill(cir.color);
      ellipse(cir.x, cir.y, 2 * cir.r);
      cir.r += 2;
      if (cir.r > 150) {
        cir.display = false;
      }
    }
  });
  circles = circles.filter(function(cir) {
    return cir.display;
  });
}

function keyPressed() {
  if (key in numbers) {
    showRect();
  } else {
    showEllipse();
  }
}

function randomColor() {
  var r = Math.floor(Math.random() * colors.length);
  return colors[r];
}

function showRect() {
  var rec = new RectClass();
  var x = Math.floor(Math.random() * windowWidth);
  var y = Math.floor(Math.random() * windowHeight);
  var color = randomColor();
  rec.x = x;
  rec.y = y;
  rec.width = 2;
  rec.height = 2;
  rec.color = color;
  rec.display = true;
  rects.push(rec);
  sounds[0].play();
}
function showEllipse() {
  var cir = new CircleClass();
  var x = Math.floor(Math.random() * windowWidth);
  var y = Math.floor(Math.random() * windowHeight);
  var color = randomColor();
  cir.x = x;
  cir.y = y;
  cir.color = color;
  cir.r = 1;
  cir.display = true;
  circles.push(cir);
  sounds[1].play();
  
}
