var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');

ctx.translate(canvas.width/2,canvas.height/2);
ctx.strokeStyle = "#FF0000";
ctx.moveTo(0,0);
ctx.fillRect(Math.cos((-30*Math.PI)/180)*200,Math.sin((-30*Math.PI)/180)*200,10,10);
ctx.fillRect(Math.cos((90*Math.PI)/180)*200,Math.sin((90*Math.PI)/180)*200,10,10);
ctx.fillRect(Math.cos((210*Math.PI)/180)*200,Math.sin((210*Math.PI)/180)*200,10,10);
//ctx.rect(500,250,50,50);
ctx.stroke();
console.log("test");
