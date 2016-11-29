//scope of variables
function test(){



}




//for LOOPS
// var fruits = ['banana','mango','kiwi','apple','orange','grapes','berries'];
// console.log(fruits);
//
// for(var i = 0; i < fruits.length; i++){
//   console.log( fruits[i] );
// }


//challenge
//create two arrays
//call the first array monsters and assign 5 monsters
//call the second array strength and assign 5 numbers to that array
//create for loop to pick a corresponding monster and strength to form a msg
//e.g 'dragon has a strength of 100 points'
//console the result

// var monsters = ['mon1','mon2','mon3','mon4','mon5'];
// var strength = [20,30,40,50,100];
//
// for(var j = 0; j < monsters.length; j++){
//      console.log( monsters[j] + 'has a strength of '
//      + strength[j] + 'points');
// }

//challenge on monday night
// create 2 arrays
// call the 1st array 'monsters' and assign 5 monsters
// call te 2nd array 'strength' and assign 5 numbers
// create a WHILE loop to pick corresponding monster and strength to form a msg
// e.g. 'dragon has a strength of 100 points'
// console the result

var monsters = ['frienkinstiens','vampire','ghost','zombie','ghouls'];
var strength = [50,100,150,200,250];
var i = 0;
while(i < monsters.length){
     console.log( monsters[i] + ' has a strength of ' +
     strength[i] + ' points');
     i++;
}
