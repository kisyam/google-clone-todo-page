const todoBar = document.getElementById("todo-bar");
const addButton = document.getElementById("add-button");
const todos = document.querySelector(".todos");

function paintTodo(newTodo) {}

function onAddToDos(event) {
    event.preventDefault();
    const newTodo = todoBar.value;
    paintTodo(newTodo);
    if (savedUsername === null) {
        handleLoginInput();
        return;
    }

    if (todo === "") {
        alert("fill in the to do...");
        return;
    } else {
        todoBar.value = "";
    }
}

addButton.addEventListener("click", onAddToDos);
