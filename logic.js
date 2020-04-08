// Project logic
const allProjects = [];
const createProject = (name) => {
    resetAllProjectsInactive();
    allProjects.push({
        name,
        toDoItems: [], 
        active: true,
    });
}
function resetAllProjectsInactive() {
    allProjects.forEach((obj) => {
        obj.active = false;
    })
}
const createToDo = (title, description, dueDate, priority, notes) => {
    let activeProject = allProjects.filter(project => project.active === true)
    let toDoArray = activeProject[0].toDoItems
    toDoArray.push({
        title, 
        description,
        dueDate,
        priority,
        notes,
        complete: false,
    })
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