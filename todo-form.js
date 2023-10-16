const todoBar = document.getElementById("todo-bar");
const addButton = document.getElementById("add-button");
const todos = document.querySelector(".todos");

function onAddToDos(event) {
    event.preventDefault();
    const todo = todoBar.value;
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
