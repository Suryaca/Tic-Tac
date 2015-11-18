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
	this.drawTiles()
	{ 
		for(var i = 0; i< rows;row++)
		{
			for(var j = 0; j< cols; cols++)
			{
				//Logic to draws tiles
			}
		}
	}
};

