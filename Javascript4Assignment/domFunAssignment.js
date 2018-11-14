var firstH1 = document.querySelector("h1.first");
firstH1.innerHTML = "<b><i>This is the first line of the web page.</i></b>";

var listItems = new Array();

listItems = document.getElementsByTagName("li");
listItems[0].parentNode.setAttribute("class","first");

var newLi = document.createElement("li");
var newText = document.createTextNode("any brief text you want");
newLi.appendChild(newText);
listItems[0].parentNode.appendChild(newLi);
