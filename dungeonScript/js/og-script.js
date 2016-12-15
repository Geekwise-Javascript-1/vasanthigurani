var hero = {}; //empty object hero

//hero.name = prompt('what is your name hero');
//console.log(hero);

var monsters = [];
var monTypes = [ 'dragon','troll','wolf','homonculus','agre','bat','hipster'];

var tableHolder = document.getElementById('table');
var maze, cells, thisCell;




//Challenge

//open dungeonScript project folder and on script.js:
//create 4 function declarations
//call them: `moveNorth`, `moveEast`, `moveSouth`, `moveWest`
//console the direction that we're moving
//create a function expression called `grid`
//`grid` needs to accept 2 parameters
//call `grid` passing in 2 numbers (eg: 4, 4 or 8, 8)


function moveNorth(){
       console.log('moving North');
}
function moveEast(){
       console.log('moving east');
}
function moveSouth(){
       console.log('moving south');
}
function moveWest(){
       console.log('moving west');
}
 var grid = function(y, x){
   console.log(y);
   console.log(x);

   var totalCells = y * x;
   cells = [];
   var visited = [];


   for(var i = 0; i < y; i++){
         cells[i] = [];
         visited[i] = [];

         for(var j = 0; j < x; j++){
              cells[i][j] = [0,0,0,0];
              visited[i][j] = false;
     }

  }

   var currentCell = [ Math.floor(Math.random() * y),
     Math.floor(Math.random() * x) ];
     console.log('The starting cell: ' + currentCell +
                  '\n\r------\n\r');
    var path = [currentCell]    ;
    console.log('path: ' + path);
    visited[ currentCell[0]][ currentCell[1] ] = true;
    var numOfVisited = 1;

    while( numOfVisited < totalCells ){
        var possible = [
          [ currentCell[0]-1, currentCell[1], 0, 2 ],
          [ currentCell[0], currentCell[1]+1, 1, 3 ],
          [ currentCell[0]+1, currentCell[1], 2, 0 ],
          [ currentCell[0], currentCell[1]-1, 3, 1 ]
        ];

      var neighbors = [];
      console.log(' // check all 4 directions.');
      console.log(possible);
      console.log('\n\r//  Of the four sides,does a cell exist in each direction?');
      for (var k = 0; k < 4; k++)  {
        if(possible[k][0] > -1 &&
           possible[k][0] < y &&
           possible[k][1] > -1 &&
           possible[k][1] < x &&
           !visited[ possible[k][0]][ possible[k][1] ])
           {
               neighbors.push( possible[k] );
           }

        }
        console.log(neighbors);
        //numOfVisited++;
        if (neighbors.length) {
             var next = neighbors[Math.floor(Math.random() *
               neighbors.length)];
               console.log('\n\r// Of the available direction, randomly select one.\n\r// The selected cell to move is: '+next+'\n\r');


               cells[ currentCell[0] ] [ currentCell[1] ] [ next[2] ] = 1;
               console.log('cells[ currentCell[0] ] [currentCell[1] ] [ next[2] ]: cells ['+currentCell[0]+'] [ '+next[2]+' ] = 1');

               cells[ next[0] ] [ next[1] ] [ next[3] ] =1;
               console.log('cells[ next[0] ] [ next[1] ] [ next[3] ]: cells['+next[0]+'] ['+next[1]+'] ['+next[3]+']');

               visited[ next[0] ] [ next[1] ] = true;
               console.log('visited[ next[0] ] [ next[1] ]: visited['+next[0]+']['+next[1]+'] = true');

               numOfVisited++;
               currentCell = [ next[0], next[1] ];
               console.log('\n\rcurrentCell: ' + currentCell + '\n\r-------');
               path.push(currentCell);
               console.log('');

          }else{
              currentCell = path.pop();
              console.log('\n\r// No neighbors found. CurrentCell: ' +currentCell+ '\n\r');
        }

    }    // end of while loop.
gridBuilder();
}(8,8);

function gridBuilder(){
    maze = document.createElement('table');
    tableHolder.appendChild(maze);

    for( var i = 0; i < cells.length; i++){
        maze.insertRow(i);

        for( var j = 0; j < cells[i].length; j++ ){
             //console.log(maze);
             maze.firstChild.childNodes[i].insertCell(j);
             thisCell = maze.firstChild.childNodes[i].childNodes[j];

             for ( var k = 0; k < 4; k++ ){
                  switch(k){
                     case 0:
                        cells[i][j][k] ? thisCell.classList.remove('bt') : thisCell.classList.add('bt');
                        break;
                     case 1:
                         cells[i][j][k] ? thisCell.classList.remove('br') : thisCell.classList.add('br');
                         break;
                     case 2:
                         cells[i][j][k] ? thisCell.classList.remove('bb') : thisCell.classList.add('bb');
                         break;
                     case 3:
                         cells[i][j][k] ? thisCell.classList.remove('bl') : thisCell.classList.add('bl');
                         break;
                 }
             }
        }
    }
}


/*var gameInit = {};
gameStart();


addEventListener('keypress', function(e){
    console.log(e);
    e.preventDefault();
    if(e.charCode === 114){
        gameReset();
    }
});


function gameStart(){
    if(!localStorage.getItem('gameInit')){
        gameInit.name = prompt('What name doest thou answer to?');
        gameInit.xy = parseInt(prompt('Choose a number between 5 & 10.'));
        gameInit.lvl = 1;
        localStorage.setItem( 'gameInit', JSON.stringify(gameInit) );
    }else{
        gameInit = JSON.parse( localStorage.getItem('gameInit') );
    }
}

function gameReset(){
    gameInit = {};
    localStorage.removeItem('gameInit');
    gameStart();
}

function gameWin(){
    gameInit.xy++;
    gameInit.lvl++;
    localStorage.setItem( 'gameInit', JSON.stringify(gameInit) );
}


var grid = function(y, x){

}(gameInit.xy, gameInit.xy);
*/
