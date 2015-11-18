//Player Template
var Player = function(name,dice)
{
  this.name = name;
  this.dice = dice;
};
var Tile = function(row,cols){
  this.rows = rows;
  this.cols = cols;
};
// Object to take the parameters and create a Board with tiles
var Board = function(rows , cols){
  this.tiles = [];
  this.rows = rows;
  this.cols = cols;
  this.init = function(){ //function to initialize the board
    for(i=0;i<rows;i++)
      for(j=0;j<cols;j++)
        this.tiles.push(new Tile(i,j));
  };
  this.drawBoard = function(){ //function to Draw the board with tiles on HTML
    console.log()
  // for(var i = 0; i< this.tiles.length; i++){
  //     tileDiv = document.createElement('div'); //creating div element
  //     tileDiv.className = ('tile'); //setting class name
  //     tileDiv.innerHTML = '<span>' + "hi" + '</span>'
  //     tileDiv.addEventListener('click', function(event){
  //       document.body.appendChild(tileDiv);
  //     });
  // }
  // };
};
window.onload = function(){

  playerOne = new Player("Surya","X");
  playerTwo = new Player("Priya","O");
  board = new Board(3,3);
  board.drawBoard();

};
