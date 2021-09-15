// Code for the to-do list tracker

// variable declarations
// button- only add button as the others will be created and added through the add function
const addButton = document.getElementById('todoAdder');
addButton.addEventListener('click', addToDo);

// the two lists used, ul already sketched out in the html
const todos = document.getElementById('todoList');
const dones = document.getElementById('doneList');

// functions

// add tasks to the main to-do list
function addToDo() {
  // create the todo list item
  let listItem = document.createElement('li');
  // create the parts that will make up the list item
  let newToDo = document.getElementById('todoInput').value + ' ';
  let doneButton = document.createElement('button');
  doneButton.innerText = 'Done';
  let deleteButton = document.createElement('button');
  deleteButton.innerText = 'Delete';
  // attach the parts to the list item
  listItem.appendChild(document.createTextNode(newToDo));
  listItem.appendChild(doneButton);
  listItem.appendChild(deleteButton);
  // add the list item to the todo ul
  todos.appendChild(listItem);

  // I can also add the code for the other functions as I have it already - let me know if needed.
}
