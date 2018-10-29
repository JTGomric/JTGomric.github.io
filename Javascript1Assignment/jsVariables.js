var randomElements = new Array();

randomElements[0] = "item1";
randomElements[1] = "item2";
randomElements[2] = "item3";
randomElements[3] = "item4";
randomElements[4] = "item5";
randomElements[5] = "item6";

var el1 = document.getElementById("first");
var el2 = document.getElementById("second");
var el3 = document.getElementById("third");
var el4 = document.getElementById("fourth");

el1.textContent = randomElements[Math.round(Math.random()*6)];
el2.textContent = randomElements[Math.round(Math.random()*6)];
el3.textContent = randomElements[Math.round(Math.random()*6)];
el4.textContent = randomElements[Math.round(Math.random()*6)];
