const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const button = document.querySelector(".button");

function paintTodo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.appendChild(span);
    span.innerText = newTodo;
    toDoList.appendChild(li);
}

function onAddToDos(event) {
    event.preventDefault();
    console.log(event.target.tagName);
    console.log("this:", this.tagName);
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    paintTodo(newTodo);
}

button.onclick = (event) => {
    console.log("event.target.tagName:", event.target.tagName);
    console.log("this:", this.tagName);
};

// button.onmouseenter = () => {
//     alert("I find you!!!");
// };

// button.onmouseleave = () => {
//     alert("See you!!");
// };

toDoForm.addEventListener("submit", onAddToDos);
