//self Assighnment (Thanks giving break Assighnment)

var todo = [];
var item = prompt('Enter ur todo item');
console.log(todo);
console.log(item);

if (isValid(item)) {
        addTodo(item);
        checkIfMore();
  }
function isValid(item) {
         if ( item !== null ){
              if ( item.trim() !== '' && !parseInt(item) ){
                       console.log(item);
                       return true;
               }else{
                 alert('invalid input');
                 return false;
               }
    console.log( item.trim() );
               }else{
                 alert ('invalid input');
                 return false;
               }
    console.log(item);
}

function addTodo(Item) {
         todo.push(item);
  }
