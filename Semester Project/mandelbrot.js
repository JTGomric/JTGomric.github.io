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
var rMax;
var rMin;
var iMax;
var iMin;

var rect = canvas.getBoundingClientRect();

function getXCrds(e){
  xDiv.textContent = "Real Coordinate: " + mapRange(mapRange((e.clientX-rect.left),0,800,-400,400),-400,400,Number(rMin),Number(rMax));
}
function getYCrds(e){
  yDiv.textContent = "Imaginary Coordinate: " + mapRange(mapRange((e.clientY-rect.top),0,800,-400,400),-400,400,Number(iMax),Number(iMin));
}





canvas.addEventListener('mousemove',getXCrds,false);
canvas.addEventListener('mousemove',getYCrds,false);




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




function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}



function iterate(){
  //console.log(document.getElementById("realMax").value + ", " + document.getElementById("realMin").value + ", " + document.getElementById("imagMax").value + ", " + document.getElementById("imagMin").value);
  rMax = document.getElementById("realMax").value;
  rMin = document.getElementById("realMin").value;
  iMax = document.getElementById("imagMax").value;
  iMin = document.getElementById("imagMin").value;
  var maxIterations = Number(document.getElementById("iterations").value);

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



//Draw handler
//function test() {
  //ctx.clearRect(0,0,canvas.width,canvas.height);

//}
