/* Assignment 04: Finishing a Todo List App
 *
 * 
 *
 */


//
// Variables
//

// Constants
const appID = "app";
const headingText = "To do. To done. ✅";

// DOM Elements
let appContainer = document.getElementById(appID);

//
// Functions
//

// Add a heading to the app container
function inititialise() {
  // If anything is wrong with the app container then end
  if (!appContainer) {
    console.error("Error: Could not find app contianer");
    return;
  }

  // Create an h1 and add it to our app
  const h1 = document.createElement("h1");
  h1.innerText = headingText;
  appContainer.appendChild(h1);

  // Init complete
  console.log("App successfully initialised");
}

//
// Inits & Event Listeners
//
inititialise();


let todoListArray = [];
let todoItems = [];
let idCounter = 0;
//let todoListArray = [];
let todoForm = document.getElementById("form-todoEntry");
let todoList = document.getElementById("todo-item-list");
let todoInput = document.getElementById("todo-input-1");
let todoClearBtn = document.getElementById("clear-btn");

todoList.addEventListener("click", todoListClickHandler)

todoForm.addEventListener("submit", handleTodoForm);

function handleTodoForm(event) {

  event.preventDefault();

  addToDoItem(todoInput.value);

  // Clear the input
  todoForm.reset();

  // Draw the list
  renderData();
}


todoList.addEventListener("click", todoListClickHandler);

function todoListClickHandler(event){

  if (event.target.tagName === "BUTTON"){
    console.log("You clicked on a button");

    console.log("The data todo id", event.target.dataset.todoID)
    console.log("The data todo id", event.target.dataset.todoListId)
    if (event.target.className === "delete-btn"){
      var listIdToRemove = event.target.dataset.todoListId;


    var indexToRemove = event.target.dataset.todoID;
      removeToDoItem(todoItems[listIdToRemove].id);
    }
    else if (event.target.className === "mark-done-btn"){
      var listIdToMarkDone = event.target.dataset.todoListId;

    todoListArray.splice(indexToRemove,1)

      markToDoItemAsCompleted(todoItems[listIdToMarkDone].id);
    }
    renderData();

  }


}
// // Handle Submit Form
todoForm.addEventListener("submit", handleTodoForm);

function handleTodoForm(event) {

  // Prevent the default behavior of the form`
  event.preventDefault();

todoClearBtn.addEventListener("click", clearButtonClickHandler);

  // This is what you do in add to do app
  // addTodoItem(superHeroInput.value);

  todoListArray.push(todoInput.value);

  // Clear the input
  todoForm.reset();

  // Draw the list
function clearButtonClickHandler(event){
  clearCompletedTasks();
  renderData();
}


// Render the data to the page
function renderData() {

  console.log("Render Data", todoListArray);

  // Clear the list
  todoList.innerHTML = "Let's get those things done. Enter something you want done above";
  todoList.innerHTML = "";

  for (let i=0; i < todoListArray.length ; i++ ){
  for (let i=0; i < todoItems.length ; i++ ){
    let tempListItem = document.createElement("li");

    tempListItem.textContent = todoListArray[i];
    tempListItem.textContent = todoItems[i].text;

    let tempButton = document.createElement("button");

    tempButton.className = "mark-done-btn";
    tempButton.textContent = "Mark Done!";
    tempButton.dataset.todoID = i;
    tempButton.dataset.todoListId = i;

    tempListItem.prepend(tempButton);

    let tempButton2 = document.createElement("button");

    tempButton2.className = "delete-btn";
    tempButton2.textContent = "Delete!";
    tempButton2.dataset.todoID = i;
    tempButton2.dataset.todoListId = i;

    tempListItem.appendChild(tempButton2);

    todoList.appendChild(tempListItem);

  }
  //console.log(todoItems);
  //console.log(todoList);
}

/*  ------------------------------
 Todo Array Functions from Assignment 03
    ------------------------------    */

function addToDoItem(text) {
  // Implement the logic to add a task here

  let todo =
  {
    id: idCounter,
    text: text,
    completed: false,
  };

  todoItems.push(todo);

  idCounter = idCounter + 1;
}

function removeToDoItem(todoId) {

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].id == todoId) {
      for (let j = i; j < todoItems.length; j = j + 1)
      {
        todoItems[j] = todoItems[j+1];
      }
      todoItems.pop();
    }
  }

  //  let x = todoItems.splice(todoId,1);
}

function markToDoItemAsCompleted(todoId) {

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].id == todoId) {
      todoItems[i].completed = true;
    }
  }
 console.log("I tried to mark item done!")
}

function deleteToDoItem(todoId) {
  // Implement the logic to remove a task here

  let isAMatch = false;

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].id == todoId) {
      for (let j = i; j < todoItems.length; j = j + 1)
      {
        todoItems[j] = todoItems[j+1];
      }
      todoItems.pop();

      isAMatch = true;

      //const x = todoItems.splice(i,1);
    }    
  }
  return isAMatch;
}

function clearCompletedTasks() {
  // Implement the logic to clear completed tasks here

  let isAMatch = false;

  for (let i = 0; i < todoItems.length; i = i + 1) {
    if (todoItems[i].completed == true) {
      for (let j = i; j < todoItems.length; j = j + 1)
      {
        todoItems[j] = todoItems[j+1];
      }
      todoItems.pop();
      i = i - 1;

      //const x = todoItems.splice(i,1);
      //console.log(todoItems);
      isAMatch = true;
    }    
  }
  return isAMatch;
}