import {allProjects} from './index'
import {storeMyProjects} from './loadDOM'

const createProject = (name, description) => {
    _clearActiveProjects();
    allProjects.push({
        name,
        description,
        toDoItems: [], 
        active: true,
    });
    createToDo('Example task', '2020-08-09')
    storeMyProjects();
}

function updateProject(name, description) {
    console.log(allProjects)
    let activeProject = _selectActiveProject();
    activeProject.name = name
    activeProject.description = description
    storeMyProjects();
}

function swapProject(index) {
    _clearActiveProjects();
    let project = allProjects[index]
    project.active = true
    storeMyProjects();
}

function deleteProject(index) {
    if (allProjects.length > 1) {
        allProjects.splice(index, 1);
        function lastProject() { return (allProjects.length - 1) }
        let lastIndex = lastProject()
        allProjects[lastIndex].active = true
        storeMyProjects();
    } else {
        alert('You need atleast one project to store your to-do-list')
    }
}

const createToDo = (name, dueDate) => {
    let activeProject = allProjects.filter(project => project.active === true);
    let toDoArray = activeProject[0].toDoItems;
    toDoArray.push({
        name, 
        dueDate,
        active: false,
        complete: false,
    });
    storeMyProjects();
}

function completeToDo(index) {
    let array = _selectActiveToDoList();
    let task = array[index]
    if (task.complete === false) {
        task.complete = true
    } else {
        task.complete = false
    }
    storeMyProjects();
}

function updateToDo(index, name, dueDate) {
    let activeToDoArray = _selectActiveToDoList();
    let activeToDo = activeToDoArray[index]
    activeToDo.name = name
    activeToDo.dueDate = dueDate
    storeMyProjects();
}

function deleteToDo(index){
    let array = _selectActiveToDoList();
    array.splice(index, 1)
    storeMyProjects();
}

function _selectActiveProject() {
    let activeProjectArray = allProjects.filter(project => project.active === true)
    return activeProjectArray[0];
}

function _clearActiveProjects() {
    allProjects.forEach((obj) => {
        obj.active = false;
    });
}
function _selectActiveToDoList() {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeToDoArray = activeProject[0].toDoItems;
    return activeToDoArray;
}

export {createProject, createToDo, updateProject, deleteProject, swapProject, completeToDo, updateToDo, deleteToDo}