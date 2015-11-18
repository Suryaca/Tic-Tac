//Player Template
var Player = function(name,dice)
{
  this.name = name;
  this.dice = dice;
};

// Object to take the parameters and create a Board with tiles
//window.onload() = function(rows = 3, columns = 3)
window.onload = function(){
alert("hi");
  this.rows = 3;
	this.cols = 4;
  //function to draw tiles
  //this.drawTiles(){
		for(var i = 0; i< rows;row++){
			for(var j = 0; j< cols; cols++){
          div = document.createElement('div');
          div.classname = 'tile'

			}
		}
	//}
};
