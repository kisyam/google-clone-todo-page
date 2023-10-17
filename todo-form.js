const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

function paintTodo(newTodo) {
    console.log("hi");
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function onAddToDos(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    console.log(newTodo);
    toDoInput.value = "";
    paintTodo(newTodo);
}

toDoForm.addEventListener("submit", onAddToDos);
