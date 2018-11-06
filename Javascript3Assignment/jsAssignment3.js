function Game(hn ,vn){
  this.homeName = hn;
  this.homeScore = Math.floor(Math.random()*20+70);
  this.visitorName = vn;
  this.visitorScore = Math.floor(Math.random()*20+70);

  this.getSummary = function(){
    return [this.homeName,this.homeScore,this.visitorName,this.visitorScore];
  }
}

var gameList = new Array();

gameList[0] = new Game("Cardinals","Cubs");
gameList[1] = new Game("SLUH","CBC");
gameList[2] = new Game("West","East");
gameList[3] = new Game("Althoff","Mater Dei");
gameList[4] = new Game("Jaguars","Rams");
gameList[5] = new Game("Vikings","Raiders");

var elList = new Array();
elList[0] = document.getElementById("game1");
elList[1] = document.getElementById("game2");
elList[2] = document.getElementById("game3");
elList[3] = document.getElementById("game4");
elList[4] = document.getElementById("game5");
elList[5] = document.getElementById("game6");



for(var i = 0;i<6;i++)
{
  elList[i].textContent = gameList[i].getSummary();
}
