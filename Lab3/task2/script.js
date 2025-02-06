function loadTasks(sortCompleted = false) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const taskList = document.getElementById("task-list");

    taskList.innerHTML = "";

    if (sortCompleted) {
        tasks.sort((a, b) => b.completed - a.completed);
    } else {
        tasks.sort((a, b) => a.completed - b.completed);
    }
    

    tasks.forEach((task) => {
        const li = createTaskElement(task.text, task.completed);
        taskList.appendChild(li);
    });
}

document.getElementById("sort-button").addEventListener("change", function() {
    loadTasks(this.checked);
});


function createTaskElement(text, completed = false) {
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;
    checkbox.onchange = function() {
        li.classList.toggle("completed", checkbox.checked);
        saveTasks();
    };

    const taskText = document.createElement("span");
    taskText.textContent = text;
    if (completed) {
        li.classList.add("completed");
    }

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "🗑";
    deleteButton.onmouseover = function() {
        deleteButton.textContent = "💥"
    };
    deleteButton.onmouseout = function() {
        deleteButton.textContent = "🗑"
    }
    deleteButton.onclick = function() {
        li.remove();
        saveTasks();
    };

    li.appendChild(checkbox);
    li.appendChild(taskText);
    li.appendChild(deleteButton);

    return li;
}

function addTask() {
    const inputBox = document.getElementById("input-box");
    const taskList = document.getElementById("task-list");

    if (inputBox.value.trim() !== "") {
        const li = createTaskElement(inputBox.value);
        taskList.appendChild(li);
        inputBox.value = "";
        saveTasks();
        addButton.style.display = 'none';
    }
}

function saveTasks() {
    const taskList = document.getElementById("task-list");
    const tasks = [];

    taskList.querySelectorAll("li").forEach((li) => {
        const text = li.querySelector("span").textContent;
        const completed = li.classList.contains("completed");
        tasks.push({text, completed});
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}


const addButton = document.getElementById("add-button");
const text = document.getElementById("input-box");

text.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        addTask();
    }
});

text.addEventListener('input', () => {
    addButton.style.display = text.value ? 'block' : 'none';
});



window.onload = () => loadTasks(false);