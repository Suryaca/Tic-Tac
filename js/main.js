//Player Template
var Player = function(name,dice)
{
  this.name = name;
  this.dice = dice;
};
var Tile = funtion(row,cols);{
  this.rows = rows;
  this.cols = cols;
}
// Object to take the parameters and create a Board with tiles
var Board = function(){
  this.tiles = [];
  this.init = function(){ //function to initialize the board
    for(i=0;i<row;i++)
      for(j=0;j<cols;j++)
        this.tiles.push(new Tile(i,j));
  };
  this.drawBoard = function(){ //function to Draw the board with tiles on HTML
  for(var i = 0; i< this.tiles.length; i++){
      tileDiv = document.createElement('div'); //creating div element
      tileDiv.className = 'tile'; //setting class name
      tileDiv.addEventListener('click', function(event){ // adding event listener
      document.body.appendChild(tileDiv)
      }
    };
  };
};
