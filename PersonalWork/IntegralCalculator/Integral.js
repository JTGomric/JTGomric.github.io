var numRectangles = 1000;
var width = Math.PI/numRectangles;

var height = new Array();

y=0;
for(var x = 0;x < numRectangles;x++)
{
  height[x]=Math.sin(y);

  y+= width;
}
  var divArray = new Array();

  // and give it some content

  //var att3 = document.createAttribute("background-color");
  //att3.value="red";

  //newDiv.setAttribute("style","width:200px;height:" + 200 + "px;background-color:red");
  //newDiv.setAttributeNode(att3);
  //newDiv.innerHTML = "a";
  // add the text node to the newly created div



//var myDiv = document.creatElement('div');
//document.body.appendChild(myDiv);


var totalArea = 0;

for(var j = 0;j<height.length;j++)
{

  totalArea += height[j]*width;
  divArray[j] = document.createElement("div");
  divArray[j].setAttribute("style","width:" + width*300 +"px;height:" + height[j]*100 + "px;background-color:red");
  document.body.appendChild(divArray[j]);
}

var result = document.getElementById("area");
result.textContent = totalArea;