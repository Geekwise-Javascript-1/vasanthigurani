console.log('this is a text message');
//alert('this is an alert box \intruding on your life');
//alert(1+2);


/*Confirm Box
var UserResp = confirm('Do you like raisins?');
console.log(UserResp);
*/

/*Prompt Box */
//var UserResp = prompt('what is your quest?');
//var UserResp = prompt('what is your fav num?');
//console.log(typeof (UserResp));// typeof prompt is string
//console.log(parseInt(UserResp));// if u give string as a input it says NaN

//user asks first name lastname age n place
//ask to confirm d place
//alert fst name n concatenate last name
//console log age

//1)
/*var Fn = prompt('Enter your Firstname?');
var ln = prompt('Enter your Lastname?');
var age = prompt('Enter your age?');
var place = prompt('Where are you from ?');
var quest = confirm('Are you from ' + place);
alert(Fn + ln);
console.log(age); */

/* Math Operations
var a = 5;
var b = 8;
var sum = a + b;
console.log(sum);

var difference = a - b;
console.log(difference);

var mul = a * b;
console.log(mul);

var div = a / b;
console.log(div);

var modulus = a % b;
console.log(modulus); //remainder*/

/* create a var ask a user(prompt) to pick any number
btn 1 - 100 multiply user num by 4 save to new var,
multiply the new num by 5 n save to another var
divide the result by the original num
from d new num sub 7 n alert the response */

/*var num = prompt('enter any number from 1 to 100');
var parsedNum = parseInt(num);
//console.log(num); // result is string since prompt output is string
console.log(parsedNum);// result is integer
var mul1 = parsedNum * 4;
console.log(mul1);
var mul2 = mul1 * 5;
console.log(mul2);
var div = mul2 / parsedNum;
console.log(div);
var sub = div - 7;
alert('This is the result ' + sub);
console.log(sub);
*/



//Math Object
/*var random = Math.random();//object.method
//console.log(random);

var roundNum = Math.round(3.393);
console.log(roundNum);

var floorNum = Math.floor(6.500);
console.log(floorNum);

var ceilNum = Math.ceil(6.500);
console.log(ceilNum); */

//Create a random num btn 1 - 100 n alert that num

/*var randomNum = Math.random();
console.log(randomNum);

randomNum = randomNum * 100;
console.log(randomNum);

randomNum = Math.ceil(randomNum);
console.log(randomNum);

alert(b);
