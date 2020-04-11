// Factory functions
const allProjects = [];
const createProject = (name, description) => {
    clearActiveProjects();
    allProjects.push({
        name,
        description,
        toDoItems: [], 
        active: true,
    });
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
}

// Select functions
function selectActiveProject() {
    let activeProjectArray = allProjects.filter(project => project.active === true)
    return activeProjectArray[0];
}
function clearActiveProjects() {
    allProjects.forEach((obj) => {
        obj.active = false;
    });
}

function swapProject(index) {
    clearActiveProjects();
    let project = allProjects[index]
    project.active = true
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
}

function completeTask(index) {
    let array = selectActiveToDoArray();
    array = array[index]
    if (array.complete === false) {
        array.complete = true
    } else {
        array.complete = false
    }
 }

function selectActiveToDoArray() {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeToDoArray = activeProject[0].toDoItems;
    return activeToDoArray;
}
function selectActiveToDo(){
    let activeProject = allProjects.filter(project => project.active === true);
    let activeToDoArray = activeProject[0].toDoItems;
    let activeToDo = activeToDoArray.filter(toDo => toDo.active === true);
    return activeToDo[0];
}

/* 
Things I need to do:
- Show the edit task form when you click the pen or when you click the text
- Delete the task when you click the rubbish icon
- Add a date picker to the form
*/

export {allProjects, createProject, createToDo, selectActiveProject, clearActiveProjects, selectActiveToDoArray, deleteProject, swapProject, completeTask}