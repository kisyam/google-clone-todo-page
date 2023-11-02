const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintTodo({ text: newTodo, id: newTodoId }) {
    const li = document.createElement("li");
    li.className = "toDoList";
    li.id = newTodoId;
    paintSpan(li, newTodo);
    paintButton(li);
    toDoList.appendChild(li);
}

function paintButton(li) {
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    deleteButton.innerText = "❌";
    editButton.innerText = "✏️";
    deleteButton.addEventListener("click", deleteToDo);
    buttonContainer.appendChild(editButton); // 버튼을 div에 추가
    buttonContainer.appendChild(deleteButton);
    li.appendChild(buttonContainer);
}

function paintSpan(li, newTodo) {
    const span = document.createElement("span");
    span.innerText = newTodo;
    li.appendChild(span);
}

function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newToDoObj);
    paintTodo(newToDoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
