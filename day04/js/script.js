// //alert('test');
//
// /*
// Function Declaration
// */
//
// function helloWorldDec(){
//    alert('Hello World');
// }
// //helloWorldDec();
//
// /*
// Function Expression
// */
// var helloWorldExp = function(){
//         alert('Hello World Again');
// };
// //helloWorldExp();
//
// /* the above exp can be called like this too---
// var helloWorldExp = function(){
//         alert('Hello World Again');
// }();
// */
//
// /*
// Hoisting  --Brings variable names and function declarations
//              to the top.
// */
// //Challenge//
// // write 3 fn declarations
// //1) greeting function - alert a greeting
// //calculate fn - alert mathematical operation
// //console a color array of 3 colors
//
// function greetingDec(){
//     alert('Good Morning');
// }
// greetingDec();
//
// function calculate(){
//   alert(1+2);
// }
// calculate();
//
//
// function color(){
// var color = ['red','yellow','blue'];
// console.log(color);
// }
// color();
//
//
// // write 3 fn expressions
// //1) greeting function - alert a greeting
// //calculate fn - alert mathematical operation
// //console a color array of 3 colors
//
// var greetingExp = function(){
//         alert('Have a good day');
// }();
//
//
// var calculateExp = function(){
//    alert(3-2);
// };
// calculateExp();
//
// var colorExp = function(){
// console.log(['red','yellow','blue']);
// };
//
// /*
// Parameters and Arguments
// */
// //parameter is a variable that is used in d fn dec
// function helloDec(name){
//      alert('hello ' + name);// name is a parameter when it is in declaration
// }
// helloDec('vasu');//vasu is an argument when we call in fn.
//
// var helloExp = function( first, last){
//   alert('hi ' + first + ' ' + last);
// };
//helloExp('vasu', 'gurani');


// Challenge
//write 3 fn declarations
// for greeting fn - pass in first n last names
//cal fn - pass in two numbers
//color fn - pass in 3 colors.
//Challenge
// write fn expressions
// for greeting fn - pass in first n last names
//cal fn - pass in two numbers
//color fn - pass in 3 colors.

// function greeting2( first, last){
//       alert('Good Morning' + ' ' + first + ' ' + last);
// }
// greeting2('vasu', 'gurani');
//
//
// function calculate(num1,num2){
//       alert( 2 + 4);
// }
// calculate(2,4);
//
//
// function color(c1,c2,c3){
// console.log(c1 + ' ' + c2 + ' ' + c3);
// }
// color('red','yellow','blue');
//
//
//
// var greetingExp = function( a, b){
//   alert('Good Morning ' + a + ' ' + b);
// }('!', '@');
//
//
// var calExp = function (x,y){
//   alert(x + y);
// };
// calExp(4,5);
//
// var colorExp = function(c1,c2,c3){
//   console.log(c1 + ' ' + c2 + ' ' + c3);
// }('pink','purple','white');


/*
* Function from a function
*/

// function hello(firstname){
//      var msg = 'hello, ' + firstname;
//      console.log(msg);
//      popup(msg);
// }
// function popup(x){
//    alert(x);
// }
// hello('vasu');


//write 3 fn declarations
//1) will expect a firstname and calls the 2nd function
//2)will expect ur firstname and concatenate to the lastname
//3)will alert out:"hello " and first/last name
// --------------------------------------------
// // function greeting(firstname){
// //     var x = 'Good morning, ' + firstname;
// //     console.log(x);
// //     popup(x);
// // }
// // function popup(y){
// //   alert(y);
// // }
// // greeting('vasu');
//
// function concatenate(firstname,lastname){
//    var name = firstname + lastname;
//    console.log(name);
//    popup(name);
// }
// function popup(a){
//   alert(a);
// }
// concatenate('Vasu','Gurani');
// //
// function concatenate(firstname,lastname){
//    var name = 'Hello ' + firstname + lastname;
//    console.log(name);
//    popup(name);
// }
// function popup(a){
//   alert(a);
// }
// concatenate('Vasu','Gurani');
// ------------------------------------------------

function fname(f){
    lname(f);
}
fname('vasu');

function lname(first){
    var name = first + 'gurani';
    pop(name);
}
function pop(msg){
    alert('hello ' + msg);

 }
