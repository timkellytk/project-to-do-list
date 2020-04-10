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
function selectActiveToDoArray() {
    let activeProject = allProjects.filter(project => project.active === true);
    let activeToDoArray = activeProject[0].toDoItems;
    return activeToDoArray[0];
}
function selectActiveToDo(){
    let activeProject = allProjects.filter(project => project.active === true);
    let activeToDoArray = activeProject[0].toDoItems;
    let activeToDo = activeToDoArray.filter(toDo => toDo.active === true);
    return activeToDo[0];
}

export {allProjects, createProject, createToDo, selectActiveProject, clearActiveProjects}