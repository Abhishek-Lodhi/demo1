// get references to HTML elements

const addTaskBtn=document.getElementById("addTaskBtn");
const taskInput=document.getElementById("taskInput");
const taskList=document.getElementById("taskList");

//function to add a task
function addTask()
{
    let taskText=taskInput.value.trim();// get the input text and remove the extra space
    if(taskText==="")
    {
        alert("Please enter a task!");
        return;
    }
    //Create a new list item
    let li=document.createElement("li");
    li.textContent=taskText;

    //Create "Done" button
    const doneBtn=document.createElement("button");
    doneBtn.textContent="done";
    doneBtn.style.marginLeft=("10px");
    doneBtn.addEventListener("click",()=>{
        li.style.textDecoration="line-through";
    });

    // Create Delete Button
    const deleteBtn=document.createElement("button");
    deleteBtn.textContent="delete";
    deleteBtn.style.marginLeft="5px";
    deleteBtn.addEventListener("click",()=>{
        taskList.removeChild(li);
    });

    //add button to the list item
    li.appendChild(doneBtn);
    li.appendChild(deleteBtn);


    //Add the task to the list
    taskList.appendChild(li);

    //clear the input
    taskInput.value="";
}
//Event listener for button click
addTaskBtn.addEventListener('click',addTask);