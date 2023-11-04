const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];
let openEditForm = null;

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
    const li = event.target.parentElement.parentElement.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function editToDo(event) {
    if (openEditForm) {
        openEditForm.remove();
        // 현재 열려 있는 폼을 닫음
    }
    const id = event.target.id;
    const li = event.target.parentElement.parentElement.parentElement;
    const data = event.target.parentElement.parentElement.children[0].innerText;
    const form = document.createElement("form");
    form.classList.add("todoedit-form");
    const input = document.createElement("input");
    input.classList.add("todoedit-form-value");
    input.value = data;
    const okButton = document.createElement("button");
    okButton.classList.add("todoedit-form-okbtn");
    okButton.type = "submit";
    okButton.value = "ok";
    okButton.textContent = "ok";
    const cancelButton = document.createElement("button");
    cancelButton.classList.add("todoedit-form-cancelbtn");
    cancelButton.type = "button";
    cancelButton.value = "cancel";
    cancelButton.textContent = "cancel";
    form.appendChild(input);
    form.appendChild(okButton);
    form.appendChild(cancelButton);
    li.appendChild(form);
    openEditForm = form;

    const editForm = document.querySelector(".todoedit-form");
    const editInput = document.querySelector(".todoedit-form-value");
    const editCancelBtn = document.querySelector(".todoedit-form-cancelbtn");

    editForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (data !== editInput.value) {
            completedEdit(event, editInput.value);
        } else {
            alert("Nothing has changed! 🧐");
        }
    });

    editCancelBtn.addEventListener("click", () => cancelEdit());

    function completedEdit(event, value) {
        toDoIndex = toDos.findIndex((todo) => todo.id === parseInt(id));
        toDos[toDoIndex].text = value;
        form.remove();
        li.remove();
        saveToDos();
        toDoList.innerHTML = ""; // 기존 UI 초기화
        toDos.forEach(paintTodo);
        openEditForm = null;
    }

    function cancelEdit() {
        form.remove();
        openEditForm = null;
    }
}

function paintTodo({ text: newTodo, id: newTodoId }) {
    const li = document.createElement("li");
    const div = document.createElement("div");
    div.className = "toDoDiv";
    li.className = "toDoList";
    li.id = newTodoId;
    li.appendChild(div);
    paintSpan(div, newTodo);
    paintButton(div, newTodoId);
    toDoList.appendChild(li);
}

function paintButton(div, newTodoId) {
    const buttonContainer = document.createElement("div");
    const deleteButton = document.createElement("button");
    const editButton = document.createElement("button");
    buttonContainer.className = "button-container";
    deleteButton.innerText = "❌";
    editButton.innerText = "✏️";
    editButton.id = newTodoId;
    deleteButton.addEventListener("click", deleteToDo);
    editButton.addEventListener("click", editToDo);
    buttonContainer.appendChild(editButton);
    buttonContainer.appendChild(deleteButton);
    div.appendChild(buttonContainer);
}

function paintSpan(div, newTodo) {
    const span = document.createElement("span");
    span.innerText = newTodo;
    div.appendChild(span);
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

//* get To dos...

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintTodo);
}
