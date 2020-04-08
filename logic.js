// Factory functions
const allProjects = [];
const createProject = (name) => {
    editAllProjectsInactive();
    allProjects.push({
        name,
        toDoItems: [], 
        active: true,
    });
}
const createToDo = (name, description, dueDate, priority, notes) => {
    let activeProject = allProjects.filter(project => project.active === true);
    let toDoArray = activeProject[0].toDoItems;
    toDoArray.push({
        name, 
        description,
        dueDate,
        priority,
        notes,
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
    let activeToDo = toDoArray.filter(toDo => toDo.active === true);
    return activeToDo[0];
}

// Active functions



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
    toDo[0].name = name;
}
function editToDoDescription(description) {
    let toDo = selectActiveToDo();
    toDo[0].description = description;
}
function editToDoDueDate(dueDate) {
    let toDo = selectActiveToDo();
    toDo[0].dueDate = dueDate;
}
function editToDoPriority(priority) {
    let toDo = selectActiveToDo();
    toDo[0].priority = priority;
}
function editToDoNotes(notes) {
    let toDo = selectActiveToDo();
    toDo[0].notes = notes;
}

// Test variables
createProject('default1')
createToDo('Complete my washing', 'Get that good job ye', '1st June 2019', 'High', 'Notes...')
createProject('default2')
createToDo('Complete my exercise', 'Get that good job ye', '1st June 2019', 'High', 'Notes...')
createProject('default3')
createToDo('Complete The Odin Project', 'Get that good job ye', '1st June 2019', 'High', 'Notes...')

/* 
Missing code logic
- Delete a project
- Delete a to-do
- Edit a project name
- Edit a to-do details
*/