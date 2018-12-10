var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var canvasData = ctx.getImageData(0, 0, 800, 800);


var x1 = 400;
var y1 = 0;
var x2 = 0;
var y2 = 800;
var x3 = 800;
var y3 = 800;

var pX;
var pY;

var xCoords = new Array();
var yCoords = new Array();

drawPixel(x1,y1,0,0,255,255);
drawPixel(x2,y2,0,0,255,255);
drawPixel(x3,y3,0,0,255,255);


var choice;
var first = false;


iterate(1000000);
display();

function display(){
    for(var i = 0;i<xCoords.length;i++)
    {
      drawPixel(Math.round(xCoords[i]),Math.round(yCoords[i]),255,0,0,255);
    }

    updateCanvas();
}

function iterate(numIterations){
  for(var i =0;i<numIterations;i++)
  {
      choice = Math.floor(Math.random() * 3);

      if(first == false && choice == 0)
      {
        pX = x1;
        pY = y1;
        first = true;
      }
      else if(first == false && choice == 1)
      {
        pX = x2;
        pY = y2;
        first = true;
      }
      else if(first == false && choice == 2)
      {
        pX = x3;
        pY = y3;
        first = true;
      }
      else if(first == true && choice == 0)
      {
        pX = (pX+x1)/2;
        pY = (pY+y1)/2;

        xCoords[i] = pX;
        yCoords[i] = pY;
      }
      else if(first == true && choice == 1)
      {
        pX = (pX+x2)/2;
        pY = (pY+y2)/2;

        xCoords[i] = pX;
        yCoords[i] = pY;
      }
      else if(first == true && choice == 2)
      {
        pX = (pX+x3)/2;
        pY = (pY+y3)/2;

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
