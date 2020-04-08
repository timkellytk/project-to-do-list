// Creating projects logic
const allProjects = [];
const project = (name) => {
    resetProjectsInactive();
    allProjects.push({
        name,
        toDoItems: [], 
        active: true,
    });
}
function resetProjectsInactive() {
    allProjects.forEach((obj) => {
        obj.active = false;
    })
}
const toDoItem = (title, description, dueDate, priority, notes) => {
    let activeProject = allProjects.filter(project => project.active == true)
    activeProject[0].toDoItems.push({
        title, 
        description,
        dueDate,
        priority,
        notes,
        complete: false,
    })
}

// Declaring test variables
project('default1')
toDoItem('Complete my washing', 'Get that good job ye', '1st June 2019', 'High', 'Notes...')
project('default2')
toDoItem('Complete my exercise', 'Get that good job ye', '1st June 2019', 'High', 'Notes...')
project('default3')
toDoItem('Complete The Odin Project', 'Get that good job ye', '1st June 2019', 'High', 'Notes...')
