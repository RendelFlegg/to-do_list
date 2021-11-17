function getTaskName() {
    return document.getElementById("input-task").value;
}

function deleteTask(task) {
    return task.parentElement.remove();
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
        button.addEventListener("click", function () {deleteTask(this)}, false);
        // button.addEventListener("click", function () {
        //     return this.parentElement.remove();
        // }, false);
        li.appendChild(label);
        li.appendChild(span);
        li.appendChild(button);
        return li;
    }
}

const taskList = document.getElementById("task-list");

document.getElementById("add-task-button").addEventListener("click", function() {
    taskList.appendChild(createTask(getTaskName()));
    document.getElementById("input-task").value = "";
});
