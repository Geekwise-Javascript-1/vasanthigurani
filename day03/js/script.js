/*alert('Hi, this is an alert box');

var theDate = new Date();
console.log( theDate.getFullYear() );
console.log( theDate.getDate() );
console.log( theDate.getDay() );
console.log( theDate.getMonth() );
console.log( theDate.toLocaleString('us-en', {
                                           weekday: 'short',
                                           month: 'long',
                                          year: 'numeric'}) );// also try long
//https:goo.gl/obzAhL
// create a var for fn & prompt user
//create a var for ln &prompt user
//create a var for bday n prompt user(format:mm/dd/yyyy)
//alert "Matthew Higley's bday is saturday oct 2nd 1999"
*/

/*var fn = prompt('Enter your firstname ?');
var ln = prompt('Enter your lastname ?');
var theDate = new Date (prompt('Enter your birthday: mm/dd/yyyy ?'));
alert( fn + ' ' + ln + '\'s birthday is ' +
theDate.toLocaleString('us-en', {weekday: 'long'}) +
' ' +
theDate.toLocaleString('us-en', {month: 'long'}) +
' ' +
theDate.getDate() +
', ' +
theDate.getFullYear()
);
*/

/*
*
/* String object manipulation
*
*/
/*var firstname = prompt('Enter your name');
console.log( firstname.length );

console.log( firstname.indexOf('a'));
console.log( firstname.charAt(0));
console.log(firstname.charAt(firstname.length -1));

var lastname = prompt('Enter your last name');
console.log( firstname.concat(' ').concat(lastname));
var name = firstname.concat('').concat(lastname);
console.log( name.substring( 0,4) );
console.log( name.substring( 0, firstname.length ) );
console.log( firstname.toLowerCase());
console.log( lastname.toUpperCase() );
console.log( firstname.trim() );
*/


// prompt user for fn
//prompt user for ls
//capitalize only first letter of fn n ln
//alert the concatenated name

var firstname = prompt('enter your firstname');
var lastname = prompt('enter your lastname');
// console.log( firstname );
// console.log( lastname );
// //console.log( firstname.toUpperCase());
// firstname = firstname.toLowerCase();
// lastname = lastname.toLowerCase();

console.log( firstname );
console.log( lastname );


// console.log(firstname.charAt(0).toUpperCase() +
//                      firstname.substr( 1, firstname.length -1) );
// console.log( firstname.substring(1, firstname.length-1) );
// console.log( firstname.substr(1, firstname.length-1) );

firstname = firstname.charAt(0).toUpperCase() +
            firstname.substr( 1, firstname.length - 1);
lastname = lastname.charAt(0).toUpperCase() +
            lastname.substr( 1, lastname.length - 1);
alert(firstname.concat(' ').concat(lastname));
