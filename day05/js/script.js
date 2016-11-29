//alert('test');

//create 3 variables 1st name, middle name, last name
// IIFE  Immediately invoked function executable
// (  function myName(){
//        var firstname = "Vasanthi";
//        var midname = "R";
//        var lastname = "Gurani";
//
// console.log(firstname);
// }()  );
//
// function getNums(){
//     var a = parseInt( prompt('pick a number') );
//     var b = parseInt( prompt('pick another number') );
//     console.log('the answer is ' +doMath(a,b) );
// }
//
// function doMath(num2,num1){
//      console.log('within do math '+num1);
//      console.log('within do math '+num2);
//      return num1 + num2;
// }
// getNums();


//challenge
//Write two functions
//first a declaration accepting 1 parameter
//second an expression invoking immediately
//the expression calls the declaration passing the argument
//create a variable asking the user for their fav movie
//pass in this variable through declaration calls
//finally the declaration alerts a concatination of the string n parameter

// function dec(mov){
//        var msg = "My fav movie is: ";
//        alert(msg + mov);
////      return msg + mov;
// }
// var exp = function(){
//     var favMov = prompt('what is your fav movie?');
//     dec(favMov);
////   alert( dec(favMov) );
// }();
//
//
//
// function dec(mov){
//        var msg = "My fav movie is: ";
//        return msg + mov;
// }
// var exp = function(){
//     var favMov = prompt('what is your fav movie?');
//     alert( dec(favMov) );
// }();

//LOOPS
//for loop
//while
//do/while

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

var monsters = ['mon1','mon2','mon3','mon4','mon5'];
var strength = [20,30,40,50,100];

for(var j = 0; j < monsters.length; j++){
     console.log( monsters[j] + 'has a strength of ' + strength[j] + 'points');
}

//while
var text = '';
var i = 0;
while(i < 10){
     console.log(i);
     i++;
}
