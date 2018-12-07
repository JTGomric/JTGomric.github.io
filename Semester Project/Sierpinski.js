var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var canvasData = ctx.getImageData(0, 0, 800, 800);

ctx.translate(canvas.width/2,canvas.height/2);
ctx.strokeStyle = "#FF0000";
ctx.moveTo(0,0);

ctx.lineTo(20,20);


var defaultX = Math.cos((-30*Math.PI)/180)*200;
var defaultY = Math.sin((-30*Math.PI)/180)*200;

var pointX = defaultX;
var pointY = defaultY;

function drawPixel (x, y, r, g, b, a) {
    var index = (x + y * 800) * 4;

    canvasData.data[index + 0] = r;
    canvasData.data[index + 1] = g;
    canvasData.data[index + 2] = b;
    canvasData.data[index + 3] = a;
}


for(var i =0;i<100;i++)
  {
    var choice = Math.floor(Math.random()*3);
    if(choice == 0)
    {
      goTo(Math.cos((-30*Math.PI)/180)*200,Math.sin((-30*Math.PI)/180)*200,pointX,pointY);

    }
    else if(choice == 1)
    {
      goTo(Math.cos((90*Math.PI)/180)*200,Math.sin((90*Math.PI)/180)*200,pointX,pointY);
    }
    else
    {
      goTo(Math.cos((210*Math.PI)/180)*200,Math.sin((210*Math.PI)/180)*200,pointX,pointY);

    }
    console.log(choice);
  }
  drawPixel(400,200,255,0,0,255);
  drawPixel(200,0,255,0,0,255);
  drawPixel(600,0,255,0,0,255);
  updateCanvas();
function updateCanvas() {
    ctx.putImageData(canvasData, 0, 0);

}

function goTo(destinationX,destinationY, startX,startY){
  pointX = (destinationX-startX)/2;
  pointY = (destinationY-startY)/2;
  drawPixel(pointX,pointY,255,0,0,255);
}
//ctx.rect(500,250,50,50);

console.log("test");
