const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from localStorage
//LocalStorage se saved tasks ko load kar rahe hain:
let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
renderTasks();/*localStorage mein pehle se jo tasks save hain, unhe wapas array mein convert kar rahe hain using JSON.parse()
Agar kuch bhi saved nahi hai, toh empty array [] use kar rahe hain.*/


//Add Task ka function:
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  const newTask = { text: taskText, completed: false };
  tasks.push(newTask);
  saveTasks();
  renderTasks();
  taskInput.value = "";
}

// Save karne ka function:
function saveTasks() {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = task.text;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

    const doneBtn = document.createElement('button');
    doneBtn.textContent = "✓";
    doneBtn.style.marginLeft = "10px";
    doneBtn.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = "🗑";
    deleteBtn.style.marginLeft = "5px";
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

addTaskBtn.addEventListener('click', addTask);
