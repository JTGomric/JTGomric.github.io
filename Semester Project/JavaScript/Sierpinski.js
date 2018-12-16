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

var update = document.getElementById("add");
var reset = document.getElementById("reset");

add.style.cursor = "pointer";
reset.style.cursor = "pointer";

//default values
document.getElementById("iterations").value = 200;
document.getElementById("sideNum").value = 3;
document.getElementById("moveAmount").value = 2;

var choice;
var first = false;

function callIterate(){
  for(var i = 0;i<Number(sideNum.value);i++){
    var angle = interiorAngle(Number(sideNum.value)) * (i+1);
    if(sideNum.value == 3){
      angle += 30;
    }
    if(sideNum.value == 5){
      angle += 18;
    }
    xCorners[i] = Math.cos(angle*(Math.PI/180))*400;
    yCorners[i] = Math.sin(angle*(Math.PI/180))*400;
  }
  iterate(Number(document.getElementById("iterations").value));
  display();
}

function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

function resetFrame(){
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

function display(){
    for(var i = 0;i<xCoords.length;i++)
    {
      xCoords[i] = mapRange(xCoords[i],Math.min(...xCorners),Math.max(...xCorners),0,800);
      yCoords[i] = mapRange(yCoords[i],Math.min(...yCorners),Math.max(...yCorners),0,800);
      drawPixel(Math.round(xCoords[i]),Math.round(yCoords[i]),255,0,0,255);

    }
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
        pX = (pX+(xCorners[choice]))/(Number(r.value));
        pY = (pY+(yCorners[choice]))/(Number(r.value));

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

//table stuff
var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");

row1.style.cursor = "pointer";
row2.style.cursor = "pointer";
row3.style.cursor = "pointer";
row4.style.cursor = "pointer";

row1.addEventListener('click',inputRow1,false);
row2.addEventListener('click',inputRow2,false);
row3.addEventListener('click',inputRow3,false);
row4.addEventListener('click',inputRow4,false);

row1.addEventListener('mouseover',highlight1,false);
row2.addEventListener('mouseover',highlight2,false);
row3.addEventListener('mouseover',highlight3,false);
row4.addEventListener('mouseover',highlight4,false);

row1.addEventListener('mouseout',unhighlight1,false);
row2.addEventListener('mouseout',unhighlight2,false);
row3.addEventListener('mouseout',unhighlight3,false);
row4.addEventListener('mouseout',unhighlight4,false);

function inputRow1(){
  document.getElementById("sideNum").value = 3;
  document.getElementById("moveAmount").value = 2;
}
function inputRow2(){
  document.getElementById("sideNum").value = 5;
  document.getElementById("moveAmount").value = 2.6667;
}
function inputRow3(){
  document.getElementById("sideNum").value = 6;
  document.getElementById("moveAmount").value = 3;
}
function inputRow4(){
  document.getElementById("sideNum").value = 7;
  document.getElementById("moveAmount").value = 3.2;
}
function highlight1(){
  row1.style.backgroundColor = "#9f2653";
}
function highlight2(){
  row2.style.backgroundColor = "#9f2653";
}
function highlight3(){
  row3.style.backgroundColor = "#9f2653";
}
function highlight4(){
  row4.style.backgroundColor = "#9f2653";
}
function unhighlight1(){
  row1.style.backgroundColor = "#d92613";
}
function unhighlight2(){
  row2.style.backgroundColor = "#d92613";
}
function unhighlight3(){
  row3.style.backgroundColor = "#d92613";
}
function unhighlight4(){
  row4.style.backgroundColor = "#d92613";
}
