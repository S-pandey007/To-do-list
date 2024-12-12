let btn = document.querySelector("#add-btn");
let input = document.querySelector("#input-box");
let MainTaskContainer = document.querySelector("#task-container-list");

btn.addEventListener("click", function() {
    let text = input.value.trim();

    if (text === "") {
        alert("Please enter a task");
        return;
    }

    createTask(text);

    input.value = "";
    saveData();
});

function createTask(text, checked = false) {
    let taskDiv = document.createElement("div");
    let iconHolderDiv = document.createElement("div");
    let Checkicon = document.createElement("i");
    let Create_ul = document.createElement("ul");
    let Create_li = document.createElement("li");
    let CrossDiv = document.createElement("div");
    let Crossicon = document.createElement("i");

    taskDiv.setAttribute("class", "task-container");
    iconHolderDiv.setAttribute("id", "icon-holder");
    Checkicon.setAttribute("class", checked ? "fa-solid fa-circle-check" : "fa-regular fa-circle");
    Create_ul.setAttribute("id", "list-container");
    CrossDiv.setAttribute("id", "cross-icon");
    Crossicon.setAttribute("class", "fa-solid fa-xmark");

    taskDiv.appendChild(iconHolderDiv);
    iconHolderDiv.appendChild(Checkicon);
    taskDiv.appendChild(Create_ul);
    Create_ul.appendChild(Create_li);
    taskDiv.appendChild(CrossDiv);
    CrossDiv.appendChild(Crossicon);

    Create_li.textContent = text;
    if (checked) {
        Create_li.style.color = "#555";
        Create_li.style.textDecoration = "line-through";
    }

    MainTaskContainer.append(taskDiv);

    iconHolderDiv.addEventListener("click", function() {
        checked = !checked;
        Checkicon.setAttribute("class", checked ? "fa-solid fa-circle-check" : "fa-regular fa-circle");
        Create_li.style.color = checked ? "#555" : "black";
        Create_li.style.textDecoration = checked ? "line-through" : "none";
        saveData();
    });

    CrossDiv.addEventListener("click", function() {
        taskDiv.remove();
        saveData();
    });
}

function saveData() {
    let tasks = [];
    document.querySelectorAll(".task-container").forEach(taskDiv => {
        let text = taskDiv.querySelector("li").textContent;
        let checked = taskDiv.querySelector("i").classList.contains("fa-circle-check");
        tasks.push({ text, checked });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function showTask() {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (tasks) {
        tasks.forEach(task => createTask(task.text, task.checked));
    }
}

showTask();
