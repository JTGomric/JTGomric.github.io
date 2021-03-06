var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var xr = ctx.canvas.width;
var yr = ctx.canvas.height;
var canvasData = ctx.getImageData(0, 0, 800, 800);

var a = 0;
var b = 0;
var ca = 0;
var cb = 0;
var n = 0;
var aa = 0;
var bb = 0;

var xDiv = document.getElementById("xCrds");
var yDiv = document.getElementById("yCrds");
var displayX;
var displayY;

var rMax = document.getElementById("realMax");
var rMin = document.getElementById("realMin");
var iMax = document.getElementById("imagMax");
var iMin = document.getElementById("imagMin");

var maxIterations = document.getElementById("iterations");
var zoomFactor = document.getElementById("zoomFactor");
var numZoomed = 1;

var update = document.getElementById("update");
var reset = document.getElementById("reset");

update.style.cursor = "pointer";
reset.style.cursor = "pointer";

//Default settings
rMax.value = "2";
rMin.value = "-2";
iMax.value = "2";
iMin.value = "-2";
maxIterations.value = "40";
zoomFactor.value = "0.5";
iterate();

var rect = canvas.getBoundingClientRect();

canvas.addEventListener('mousemove',getXCrds,false);
canvas.addEventListener('mousemove',getYCrds,false);
canvas.addEventListener('click',zoom,false);

//Main rendering function
function iterate(){
  rMax = document.getElementById("realMax").value;
  rMin = document.getElementById("realMin").value;
  iMax = document.getElementById("imagMax").value;
  iMin = document.getElementById("imagMin").value;
  maxIterations = Number(document.getElementById("iterations").value);

for(var x = 0; x<800;x++){
  for(var y = 0;y<800;y++){

     a = mapRange(x,0,800,-400,400);
     b = mapRange(y,0,800,-400,400);
     a = mapRange(a,-400,400,Number(rMin),Number(rMax));
     b = mapRange(b,-400,400,Number(iMax),Number(iMin));

     ca = a;
     cb = b;

     n = 0;


    while(n < maxIterations){
       aa = (a*a)-(b*b);
       bb = 2*a*b;


      a = aa + ca;
      b = bb + cb;

      if(Math.abs(a+b)>16){
        break;
      }
      n++;
    }
    //alternate coloring option
    /*if(n != maxIterations)
      drawPixel(x, y, n*2.55, n,(n*5)%255, 255);
    else {
      drawPixel(x, y, 0, 0,0, 255);
    }*/
    if(n != maxIterations)
      drawPixel(x, y, mapRange(n,0,maxIterations,0,255), 0,0, 255);
    else
      drawPixel(x,y,0,0,0,255);
  }

}
  updateCanvas();
}
//displays real and imaginary coordinates of mouse cursor
function getXCrds(e){
  displayX = mapRange(mapRange((e.clientX-rect.left),0,800,-400,400),-400,400,Number(rMin),Number(rMax));
  xDiv.textContent = "Real Coordinate: " + displayX;
}
function getYCrds(e){
  displayY = mapRange(mapRange((e.clientY-rect.top),0,800,-400,400),-400,400,Number(iMax),Number(iMin));
  yDiv.textContent = "Imaginary Coordinate: " + displayY;
}

function zoom(e){

  if(e.button == 0){
    document.getElementById("realMax").value = (displayX + (1/(Number(zoomFactor.value)))/(numZoomed));
    document.getElementById("realMin").value = (displayX - (1/(Number(zoomFactor.value)))/(numZoomed));
    document.getElementById("imagMax").value = (displayY + (1/(Number(zoomFactor.value)))/(numZoomed));
    document.getElementById("imagMin").value = (displayY - (1/(Number(zoomFactor.value)))/(numZoomed));
    iterate();
    numZoomed += 1;
  }

}
function resetZoom(){
  numZoomed = 1;
  document.getElementById("realMax").value = 2;
  document.getElementById("realMin").value = -2;
  document.getElementById("imagMax").value = 2;
  document.getElementById("imagMin").value = -2;
  iterate();
}

function mapRange (value, a, b, c, d) {
    value = (value - a) / (b - a);
    return c + value * (d - c);
}

function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * 800) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}


function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}
