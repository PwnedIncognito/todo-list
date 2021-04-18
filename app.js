
// Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

// Functions
function addTodo(event) {
  event.preventDefault();
  // Todo Div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Todo Li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoDiv.appendChild(newTodo);
  // Checkmark Button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn");
  todoDiv.appendChild(completedButton);
  // Remove Button
  const removeButton = document.createElement("button");
  removeButton.innerHTML = '<i class="fas fa-trash"></i>';
  removeButton.classList.add("remove-btn");
  todoDiv.appendChild(removeButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  const item = event.target;
  // Delete Todo
  if (item.classList[0] === "remove-btn") {
    const todo = item.parentElement;
    // Animation
    todo.classList.add("fall");
    todo.addEventListener("transitionend", function() {
      todo.remove();
    });
  }
  // Check-marked
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
