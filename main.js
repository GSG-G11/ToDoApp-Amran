let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".tasks-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");


window.onload = function () {
    theInput.focus();
};


theAddButton.onclick = function(){
    if(theInput.value === ""){
        console.log("ee");
    }else{
        let noTasksMessage = document.querySelector(".no-tasks-messege");
        if(document.body.contains(document.querySelector(".no-tasks-messege"))){
            noTasksMessage.remove();
        }

        let mainSpan = document.createElement("span");
        let deleteElement = document.createElement("span");
        let text = document.createTextNode(theInput.value);
        let deleteText = document.createTextNode("Delete");


        mainSpan.appendChild(text);
        mainSpan.className = "task-box";
        deleteElement.appendChild(deleteText);
        deleteElement.className = "delete";

        mainSpan.appendChild(deleteElement);
        tasksContainer.appendChild(mainSpan);

        theInput.value = "";
        theInput.focus();

        calcTasks();
        

    }
};

document.addEventListener("click", function(a){
    if(a.target.className == "delete"){
        a.target.parentNode.remove();
        if(tasksContainer.childElementCount==0){
            noTasks();
        }
    }

    if(a.target.classList.contains("task-box")){
        a.target.classList.toggle("finished");  
    }

    calcTasks();
});

function noTasks(){
    let msgSpan = document.createElement("span");
    let msgText = document.createTextNode("No tasks to show");
    msgSpan.appendChild(msgText);
    msgSpan.className = "no-tasks-messege";
    tasksContainer.append(msgSpan);
}

function calcTasks(){
    //Calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;
    //Calculate completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;

}
