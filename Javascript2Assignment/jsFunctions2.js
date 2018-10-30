var range = 10;

var num1 = Math.round(Math.random()*range);
var num2 = Math.round(Math.random()*range);

function doThatMath(x,y)
{
  var results = new Array();

  results[0] = x + y;
  results[1] = x - y;
  results[2] = x * y;
  results[3] = x / y;

  return results;
}

var h1 = document.getElementById("sum");
var h2 = document.getElementById("difference");
var h3 = document.getElementById("product");
var h4 = document.getElementById("quotient");

h1.textContent = doThatMath(num1,num2)[0];
h2.textContent = doThatMath(num1,num2)[1];
h3.textContent = doThatMath(num1,num2)[2];
h4.textContent = doThatMath(num1,num2)[3];
