// Factory functions
const allProjects = [];
const createProject = (name, description) => {
    setAllProjectsInactive();
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
        active: true,
        complete: false,
    });
}

// Select functions
function selectActiveProject() {
    let activeProjectArray = allProjects.filter(project => project.active === true)
    return activeProjectArray[0];
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

// Active functions
function setAllProjectsInactive() {
    allProjects.forEach((obj) => {
        obj.active = false;
    });
}

// Project functions
function deleteProject() {
    let activeProject = selectActiveProject();
    let index = allProjects.indexOf(activeProject);
    allProjects.splice(index, 1)
}
function editProjectName(name) {
    let activeProject = selectActiveProject();
    activeProject.name = name;
}
function editAllProjectsInactive() {
    allProjects.forEach((obj) => {
        obj.active = false;
    });
}

// To do functions
function deleteToDo() {
    let toDoArray = selectActiveToDoArray();
    let toDo = selectActiveToDo();
    let index = toDoArray.indexOf(toDo)
    toDoArray.splice(index, 1)
}
function editToDoName(name) {
    let toDo = selectActiveToDo();
    toDo.name = name;
}
function editToDoDueDate(dueDate) {
    let toDo = selectActiveToDo();
    toDo.dueDate = dueDate;
}

export {allProjects, createProject, createToDo}