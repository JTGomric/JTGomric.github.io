var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var canvasData = ctx.getImageData(0, 0, 800, 800);


var xCorners = new Array();
var yCorners = new Array();

var pX;
var pY;

var sideNum = document.getElementById("sideNum");
var r = document.getElementById("moveAmount");

var xCoords = new Array();
var yCoords = new Array();

document.getElementById("iterations").value = 50000;
document.getElementById("sideNum").value = 3;
document.getElementById("moveAmount").value = 2;

var timesClicked = 0;

function callIterate(){
  for(var i = 0;i<Number(sideNum.value);i++){
    var angle = interiorAngle(Number(sideNum.value)) * (i+1);
    if(sideNum.value == 3){
      angle += 30;
    }
    if(sideNum.value == 5){
      angle += 18;
    }
    xCorners[i] = mapRange(Math.cos(angle*(Math.PI/180))*400,-400,400,0,(800/(r.value-1)));
    yCorners[i] = mapRange(Math.sin(angle*(Math.PI/180))*400,-400,400,0,(800/(r.value-1)));

  }
  iterate(Number(document.getElementById("iterations").value));
  timesClicked += 1;
  display();
}

function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

function reset(){
  for(var i = 0;i<xCoords.length;i++){
    xCoords[i] = null;
    yCoords[i] = null;
  }
  for(var x = 0;x<800;x++){
    for(var y = 0;y<800;y++){
      drawPixel(x,y,0,0,0,255);
    }
  }
  updateCanvas();
}

function interiorAngle(sides){
  return 360/sides;
}

var choice;
var first = false;





function display(){
    for(var i = 0;i<xCoords.length;i++)
    {
      xCoords[i] = mapRange(xCoords[i],Math.min(...xCorners),Math.max(...xCorners),0,800);
      yCoords[i] = mapRange(yCoords[i],Math.min(...xCorners),Math.max(...yCorners),0,800);
      drawPixel(Math.round(xCoords[i]),Math.round(yCoords[i]),255,0,0,255);

    }

    console.log(Math.max(...xCorners));
    updateCanvas();
}

function iterate(numIterations){
  for(var i =0;i<numIterations;i++)
  {
      choice = Math.floor(Math.random() * (Number(sideNum.value)));
      //console.log("choice: " + choice);
      if(first == false)
      {
        pX = (xCorners[choice]);
        pY = (yCorners[choice]);

        first = true;
      }
      else
      {
        pX = (pX+(xCorners[choice]))/Number(r.value);
        pY = (pY+(yCorners[choice]))/Number(r.value);

        xCoords[i] = pX;
        yCoords[i] = pY;
      }
   }
}

function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}

function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * 800) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}
