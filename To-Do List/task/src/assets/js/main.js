function getTaskName() {
    return document.getElementById("input-task").value;
}

function deleteTask(task) {
    task.parentElement.remove();
    toLocal();
}

function doneTask(task) {
    task.parentNode.parentElement.querySelector(".task").classList.toggle("done");
    toLocal()
}

function toLocal() {
    toDosList = taskList.innerHTML;
    localStorage.setItem('toDosList', toDosList);
}

function createTask(taskName) {
    if (taskName !== "") {
        let li = document.createElement("li");
        let label = document.createElement("label");
        let input = document.createElement("input");
        input.type = "checkbox";
        label.appendChild(input);
        let span = document.createElement("span");
        span.className = "task";
        span.textContent = taskName;
        let button = document.createElement("button");
        button.className = "delete-btn";
        li.appendChild(label);
        li.appendChild(span);
        li.appendChild(button);
        return li;
    }
}

function addTask() {
    taskList.appendChild(createTask(getTaskName()));
    document.getElementById("input-task").value = "";
    updateDelBtn();
    updateInput();
    toLocal();
}

function updateDelBtn() {
    Array.from(document.querySelectorAll(".delete-btn")).forEach(function(element) {
        element.addEventListener("click", function () {
            deleteTask(this);
        });
    });
}

function updateInput() {
    Array.from(taskList.querySelectorAll("input")).forEach(function(element) {
        element.addEventListener("click", function () {
            if (this.checked) {
                doneTask(this);
            } else {
                doneTask(this);
            }
        });
    });
}

const taskList = document.getElementById("task-list");
let toDosList;

document.getElementById("add-task-button").addEventListener("click", addTask);

if (localStorage.getItem("toDosList")) {
    taskList.innerHTML = localStorage.getItem("toDosList");
}

updateDelBtn()
updateInput()