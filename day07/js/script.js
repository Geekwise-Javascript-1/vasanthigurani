(function(){
var todo = [];
var item = prompt('Enter ur first todo item.');

//console.log(item);
/*
Esc == null
cancel == null
ENter === ''
okay === ''
spaces

OKAY:
spaces.... item.... spaces
*/
if ( isValid(item) ){
    //console.log('it is valid');
    addTodo(item);
    checkIfMore();

}
function isValid(item){
        if(item !== null){
          if( item.trim() !== '' && !parseInt(item) ){
              console.log(item);
              return true;
          }else{
            alert('Invalid Input');
            return false;
          }
        //console.log( item.trim() );
        }else{
          alert('Invalid Input');
          return false;
    }
         //console.log(item);
}
function addTodo(item){
    todo.push(item);
}
function checkIfMore(){
      for(var moreTodo = true;moreTodo;){
        if(confirm('want to add more?')){
          askMore();
        }else{
          moreTodo = false;
          craftMsg();
        }
      }
}

function askMore(){
      var item = prompt('Enter another todo item');
      if( isValid(item)){
          addTodo(item);
      }
}

function craftMsg(){
     var msg = '';
     for(var i = 0; i < todo.length; i++){
       msg += '  - ' + todo[i] + '\n';
     }
     alert ('My list to purchase: ' + msg);
}
}());




/*(function(){

var createTodoList = function(){

var todo = [];
todo.push( prompt('what is ur first item on ur todo list?')  );
for(var moretodo = true; moretodo;){
   if( confirm('Any more items?') ){
     addTodoItem(todo);
   }else{
      moreTodo = false;
      printTodoList(todo);
    }
  }
}();
function addTodoItem(todoArr){
   todoArr.push( prompt('what is ur next todo item?') );
}
function printTodoList(todoArr){
     var msg = 'My list is : ';
     for(var i = 0; i < todoArr.length; i++){
         msg += ' - ' + todoArr[i] + '\n';
            }
  alert('My list of items to purchase: \n' + msg);
}
})();
*/
