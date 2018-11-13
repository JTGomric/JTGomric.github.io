var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
//ctx.moveTo(0,0);
//ctx.lineTo(1000,600);

var xCrds = new Array();
var yCrds = new Array();

ctx.strokeStyle="#0000FF";

var sNum = 25;
ctx.lineWidth=0.01;
var angle = 180-(((sNum-2)*180)/sNum);
var holder = angle;

ctx.translate(500,300);
for(var i=0;i<sNum;i++)
{
  xCrds[i] = Math.cos((angle*Math.PI)/180)*300;
  yCrds[i] = Math.sin((angle*Math.PI)/180)*300;
  angle -= holder;

}

for(var i=0;i<sNum;i++)
{

  for(var z=0;z<sNum;z++)
  {
    ctx.moveTo(xCrds[i],yCrds[i]);
    ctx.lineTo(xCrds[z],yCrds[z]);
    ctx.stroke();
  }
}
