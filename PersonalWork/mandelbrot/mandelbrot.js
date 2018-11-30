var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var xr = ctx.canvas.width;
var yr = ctx.canvas.height;

var a = 0;
var b = 0;
var ca = 0;
var cb = 0;
var n = 0;

var aa = 0;
var bb = 0;

ctx.strokeStyle = "#FF0000";


function mapRange (value, a, b, c, d) {
    // first map value from (a..b) to (0..1)
    value = (value - a) / (b - a);
    // then map it from (0..1) to (c..d) and return it
    return c + value * (d - c);
}

for(var x = 0; x<canvas.width;x++){
  for(var y = 0;y<canvas.height;y++){

     a = mapRange(x,0,800,-400,400);
     b = mapRange(y,0,800,-400,400);
     a = mapRange(a,-400,400,-0.9,-0.7);
     b = mapRange(b,-400,400,0.3,0);
     ca = a;
     cb = b;

     n = 0;


    while(n < 100){
       aa = (a*a)-(b*b);
       bb = 2*a*b;


      a = aa + ca;
      b = bb + cb;

      if(Math.abs(a+b)>16){
        break;
      }
      n++;
    }

    if(n === 100){
      ctx.moveTo(x,y);
      ctx.rect(x,y,1,1);
    }



  }

}
  ctx.stroke();
