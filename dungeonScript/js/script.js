// var hero = {
//     name: 'Tim',
//     hp: 15
// }; //empty object hero

//hero.name = prompt('what is your name hero');
//console.log(hero);

//Challenge on dec 14
//onload  check to see if a hero exists
//no?
//prompt the user for their hero name, n save to local sessionStorage
//hardcode hero hp to equal 15 to local storage
//yes?
//greet the hero with d message, continue game
//output hero name

var greet = document.querySelector('header > span');

if ( !localStorage.getItem('hero') ){
     localStorage.setItem( 'hero', prompt('Hero name?') );
     localStorage.setItem( 'hp', 15);
     greet.textContent = 'Hello, Sir ' + localStorage.getItem('hero');
     alert('Greetings ' + localStorage.getItem('hero') + ' to DungeonScript.');
}else{
     greet.textContent = 'Welcome back, Sir ' + localStorage.getItem('hero');
}

var hero = {
    name: localStorage.getItem( 'hero' ),
    hp: localStorage.getItem( 'hp' )
  };
localStorage.setItem('heroObj', JSON.stringify(hero));
console.log( JSON.parse(localStorage.getItem( 'heroObj' )) );
console.log( typeof localStorage.getItem('hp') );


var monsters = [];
var monTypes = [ 'dragon','troll','wolf','homonculus','ogre','bat','hipster'];
var monster;
function Monster(name, hp){
      this.name = name,
      this.hp = hp
}
function generateMonsters(){
    var totMonsters = Math.round(Math.random() * 10);
    console.log( 'total monsters:' + totMonsters );

    for( var i = 0; i < totMonsters; i++){
        monsters[i] = new Monster();
        monsters[i].name = monTypes[ Math.floor(Math.random() * monTypes.length) ];
        monsters[i].hp = Math.ceil(Math.random() * 10);

      }
      console.log(monsters);
}
generateMonsters();

var tableHolder = document.getElementById('table');
var maze, cells, thisCell, exitCell;


var n = document.getElementById('n');
n.addEventListener( 'click', function(){
     //console.log('North');
     moveNorth();
});

var e = document.getElementById('e');
e.addEventListener('click', function(){
      moveEast();
});

var s = document.getElementById('s');
s.addEventListener('click', function(){
      moveSouth();
});

var w = document.getElementById('w');
w.addEventListener( 'click', function(){
    moveWest();
});


function moveNorth(){
       console.log('moving North');
       statusCell(thisCell, 'inactive' );
       thisCell = [ thisCell[0]-1, thisCell[1] ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}
function moveEast(){
       console.log('moving east');
       statusCell(thisCell, 'inactive');
       thisCell = [ thisCell[0], thisCell[1]+1 ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}
function moveSouth(){
       console.log('moving south');
       statusCell(thisCell, 'inactive');
       thisCell = [ thisCell[0]+1, thisCell[1] ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}
function moveWest(){
       console.log('moving west');
       statusCell(thisCell, 'inactive');
       thisCell = [ thisCell[0], thisCell[1]-1 ];
       statusCell(thisCell, 'active');
       checkWalls();
       encounter();
}

addEventListener('keydown', function(evt){
       console.log(evt);
       evt.preventDefault();
       if( (evt.keyCode === 87 || evt.keyCode === 38) && !n.disabled){
           moveNorth();
       }else if( (evt.keyCode === 68 || evt.keyCode === 39) && !e.disabled ){
            moveEast();
       }else if( (evt.keyCode === 83 || evt.keyCode === 40) && !s.disabled ){
            moveSouth();
       }else if( (evt.keyCode === 65 || evt.keyCode === 37) && !w.disabled){
           moveWest();
       }
});

 var grid = function(y,x){
     var totalCells = y * x;
     cells = [];
     var visited = [];

     for ( i = 0; i < y; i++){
       cells[i] = [];
       visited[i] = [];

          for ( j=0; j < x; j++ ){
              cells[i][j] = [ 0, 0, 0, 0];
              visited[i][j] = false;
          }
     }

     var currentCell = [ Math.floor(Math.random() * y), Math.floor(Math.random() * x)];
     var path = [ currentCell ];

     visited[currentCell[0]][currentCell[1]] = true;
     var numOfVisited = 1;

     while( numOfVisited < totalCells ){
        var possible = [
            [ currentCell[0]-1, currentCell[1], 0, 2 ],
            [ currentCell[0], currentCell[1]+1, 1, 3 ],
            [ currentCell[0]+1, currentCell[1], 2, 0 ],
            [ currentCell[0], currentCell[1]-1, 3, 1 ]
          ];

          var neighbors = [];

          for(var k = 0; k < 4; k++){
            if(

              possible[k][0] > -1 &&
              possible[k][0] < y &&
              possible[k][1] > -1 &&
              possible[k][1] < x &&
              !visited[ possible[k][0] ] [ possible[k][1] ]

            ){
               neighbors.push( possible[k] );
             }

        }

        if( neighbors.length ){
            var next = neighbors[ Math.floor(Math.random() * neighbors.length) ];
            cells[ currentCell[0] ][ currentCell[1] ][ next[2] ] = 1;
            cells[ next[0] ][ next[1] ][ next[3] ] = 1;
            visited[ next[0] ][ next[1] ] = true;

            numOfVisited++;
            currentCell = [ next[0], next[1] ];
            path.push(currentCell);
        }else{
           currentCell = path.pop();

        }
     }

gridStart(path);

}(8,8);

function gridStart(path){
    gridBuilder();

    console.log(path);
    thisCell = statusCell( path[0], 'active' );
    exitCell = statusCell( path[path.length - 1], 'finish' );
    checkWalls();

    //console.log(thisCell);
}

function statusCell(cell, status){
  if( maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.contains('exit')){
        alert('You Won!');
        location.reload();
  }
     switch(status){
         case 'active':
            maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('active');
            break;
         case 'inactive':
             maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.remove('active');
             maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('visited');
             break;
         case 'finish':
             maze.firstChild.childNodes[cell[0]].childNodes[cell[1]].classList.add('exit');
             break;
     }
     return cell;
}

function gridBuilder(){
      maze = document.createElement('table');
      tableHolder.appendChild(maze);
      //console.log(tableHolder);

      for( i = 0; i < cells.length; i++ ){
         maze.insertRow(i);

         for( j = 0; j < cells.length; j++ ){
            maze.firstChild.childNodes[i].insertCell(j);
            thisCell = maze.firstChild.childNodes[i].childNodes[j];
              //console.log(thisCell);

              for ( var k = 0; k < 4; k++ ){
                 switch(k)  {
                    case 0:
                      cells[i][j][k] ?
                      thisCell.classList.remove('bt') :
                      thisCell.classList.add('bt');
                      break;
                    case 1:
                        cells[i][j][k] ?
                        thisCell.classList.remove('br') :
                        thisCell.classList.add('br');
                        break;
                    case 2:
                        cells[i][j][k] ?
                        thisCell.classList.remove('bb') :
                        thisCell.classList.add('bb');
                        break;
                    case 3:
                        cells[i][j][k] ?
                        thisCell.classList.remove('bl') :
                        thisCell.classList.add('bl');
                        break;
                }
            }
        }
    }
}

function checkWalls(){
    var walls = cells[ thisCell[0] ][ thisCell[1] ];
    //console.log(walls);
    for( var i = 0; i < 4; i++ ){
        switch( i ){
           case 0:
              //console.log(walls[i]);
              walls[i] ? n.disabled = false : n.disabled = true;
              break;
           case 1:
              //console.log(walls[i]);
              walls[i] ? e.disabled = false : e.disabled = true;
              break;
           case 2:
               //console.log(walls[i]);
               walls[i] ? s.disabled = false : s.disabled = true;
               break;
           case 3:
                //console.log(walls[i]);
                walls[i] ? w.disabled = false : w.disabled = true;
                break;

        }
    }
}

function encounter(){
    console.log(monsters.length);
    console.log(cells.length);
    console.log(cells[0].length);

    //probability of having encountering
    //how many monsters
    //divide by
    //total number of cells

    var probEnc = Math.round(monsters.length / (cells.length * cells[0].length) * 100);
    console.log( probEnc + '% probability of encounters.' );

    var chanceEnc = Math.ceil(Math.random() * 100);
    console.log('chance of encounters: ' + chanceEnc);

    if(chanceEnc <= probEnc){
         console.log('You ran into a baddie!');

         monster = monsters.splice( Math.floor(Math.random * monsters.length), 1)[0];
        //  console.log(monster);
        //  console.log(monsters);
         alert('You have encountered ' + monster.name + '!!');
         battle(monster);
    }
}

function battle(player){
       console.log(player);
       console.log(hero);

       var takingDamage;
       if(player.name === hero.name){
            takingDamage = monster;
       }else{
          takingDamage = hero;
       }

       while(player.hp > 0 && takingDamage.hp > 0){
           console.log(player.name + ' has ' + player.hp);

           var hit = Math.ceil(player.hp / 3);
           takingDamage.hp -= hit;
           console.log(takingDamage.name + ' has taken ' + hit + ' damage!');
           checkIfAlive(takingDamage, hit);
       }
}

function checkIfAlive( takingDamage, hit){
     console.log(takingDamage.name);
     console.log(takingDamage.hp);

     if(takingDamage.hp <= 0){
         if(takingDamage.name === hero.name){
              alert('You are dead!!');
              location.reload();
         }else{
            alert('You have defeated the monster');
         }
     }else {
        if(takingDamage.name === hero.name){
             alert('You have taken ' + hit + ' damage from the combat!');
             battle(hero);
        }else {
            alert('You shot the ' + monster.name + ' for ' + hit + '!!');
            battle(monster);
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
