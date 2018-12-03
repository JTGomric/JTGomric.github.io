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

var realMax = document.getElementById("realMax");
var imagMax = document.getElementById("imagMax");
var realMin = document.getElementById("realMin");
var imagMin = document.getElementById("imagMin");


function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * 800) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}

drawPixel(250,250,0,255,0,255);
drawPixel(250,255,0,255,0,255);
drawPixel(250,260,0,255,0,255);
updateCanvas();
function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);
}




function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

function iterate(maxX,minX,maxY,minY,maxIterations){
for(var x = 0; x<800;x++){
  for(var y = 0;y<800;y++){
    //console.log(maxX + ", " + minX + ", " + maxY + ", " + minY)
     a = mapRange(x,0,800,-400,400);
     b = mapRange(y,0,800,-400,400);
     a = mapRange(a,-400,400,minX,maxX);
     b = mapRange(b,-400,400,minY,maxY);
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


      drawPixel(x, y, (n*1000)%255, 0, 0, 255);




  }

}
  updateCanvas();
}



//Draw handler
//function test() {
  //ctx.clearRect(0,0,canvas.width,canvas.height);

//}
