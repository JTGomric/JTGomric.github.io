var xDiv = document.getElementById("xCrds");
var yDiv = document.getElementById("yCrds");



function getXCrds(e){
  xDiv.textContent = "X Coordinate: " + e.clientX;
}
function getYCrds(e){
  yDiv.textContent = "Y Coordinate: " + e.clientY;
}




function reset(e){
  if(e.keyCode == 67){
    xDiv.textContent = "X Coordinate: 0";
    yDiv.textContent = "Y Coordinate: 0";
  }
}
document.addEventListener('mousemove',getXCrds,false);
document.addEventListener('mousemove',getYCrds,false);
document.addEventListener('keydown',reset,false);
