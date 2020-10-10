'use strict';

//array to store all objs
var allTasks = [];

//getting data form local storage
if (localStorage.getItem('Tasks')){
    var localStorageData =  JSON.parse(localStorage.getItem('Tasks'));
    console.log(localStorageData);

    for(var i = 0; i < localStorageData.length; i++){
        new Task(localStorageData[i].name , localStorageData[i].date); 
    }
}

//Constructor
function Task(name , date){
    this.name = name;
    this.date = date;
    allTasks.push(this);
}

//targeting the form 
var form = document.getElementById('form');
form.addEventListener('submit',addNewTask);

function addNewTask(event){
    event.preventDefault();

    var taskName = event.target.name.value;
    var taskDate = event.target.date.value;

    var newTask =  new Task(taskName , taskDate); 
    newTask.displayResults();

    localStorage.setItem('Tasks' , JSON.stringify(allTasks));
}

// list to display results
Task.prototype.displayResults = function(){
    var list = document.getElementById('list');
    var li = document.createElement('li');
    for(var i = 0; i < allTasks.length; i++){
        li.textContent = 'You have to: ' + this.name + ' before: ' + this.date;
        list.appendChild(li);
    }
}

//function to print the local storage data
function displayFromStorage(){
    for(var i = 0; i < allTasks.length; i++){
        allTasks[i].displayResults();
    }
}
displayFromStorage();
























// 'use strict';

// //all objects array
// var allTasks = [];

// //constructor
// function List(task , date){
//     this.task = task;
//     this.date = date;
//     allTasks.push(this);
// }

// //form
// var form = document.getElementById('form');
// form.addEventListener('submit' , addTask);

// function addTask(event){
//     event.preventDefault();

//     var taskName = event.target.task.value;
//     var taskDate = event.target.date.value;

//     var newObject = new List(taskName , taskDate);
//     listRender();

//     localStorage.setItem('All Task' , JSON.stringify(allTasks));
// }

// //list 
// function listRender(){
//     var parent = document.getElementById('listSection');
//     var list = document.createElement('ul');
//     parent.appendChild(list);
//     for(var i = 0; i < allTasks.length; i++){
//         var li = document.createElement('li');
//         list.appendChild(li);
//         // li.textContent = 'Task Number ' + (i+1) + ' ' + allTasks[i].task + ' ,and the due date is: ' + allTasks[i].date;
//         li.textContent = 'test test';
//     }
// }


