//Player Template
var Player = function(name,dice)
{
  this.name = name;
  this.dice = dice;
};

// Object to take the parameters and create a Board with tiles
var Boards = function(rows , columns)
{
	this.rows = rows;
	this.cols = columns;
  //function to draw tiles
  this.drawTiles = function()
	{
		for(var i = 0; i< rows;row++){
			for(var j = 0; j< cols; cols++){
        div = document.createElement('div');
        div.classname = 'tile';
        document.body.appendChild(div);

			}
		}
	}
};
window.onload = function (){
  var board = new board();
  board.drawTiles;
}
