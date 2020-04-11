import {allProjects} from './index'
import {storeMyProjects} from './loadDOM'

const createProject = (name, description) => {
    clearActiveProjects();
    allProjects.push({
        name,
        description,
        toDoItems: [], 
        active: true,
    });
    createToDo('Example task', '2014-02-09')
    storeMyProjects();
}

function updateProject(name, description) {
    let activeProject = selectActiveProject();
    activeProject.name = name
    activeProject.description = description
    storeMyProjects();
}

function swapProject(index) {
    clearActiveProjects();
    let project = allProjects[index]
    project.active = true
    storeMyProjects();
}

function selectActiveProject() {
    let activeProjectArray = allProjects.filter(project => project.active === true)
    return activeProjectArray[0];
}

function clearActiveProjects() {
    allProjects.forEach((obj) => {
        obj.active = false;
    });
}

function deleteProject(index) {
    if (allProjects[index].active === true) {
        allProjects.splice(index, 1);

        function lastProject() {
            return (allProjects.length - 1)
        }
        let lastIndex = lastProject()
        allProjects[lastIndex].active = true
    } else {    
        allProjects.splice(index, 1);
    }
    storeMyProjects();
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
    let array = selectActiveToDoList();
    let task = array[index]
    if (task.complete === false) {
        task.complete = true
    } else {
        task.complete = false
    }
    storeMyProjects();
}

function deleteToDo(index){
    let array = selectActiveToDoList();
    array.splice(index, 1)
    storeMyProjects();
}

function selectActiveToDoList() {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeToDoArray = activeProject[0].toDoItems;
    return activeToDoArray;
}

export {createProject, createToDo, updateProject, selectActiveProject, clearActiveProjects, selectActiveToDoList, deleteProject, swapProject, completeToDo, deleteToDo}