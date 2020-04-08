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
const toDoItem = (title, description) => {
    let activeProject = allProjects.filter(project => project.active == true)
    activeProject[0].toDoItems.push({
        title, 
        description,
    })
}

// Declaring test variables
project('default1')
toDoItem('Complete my washing', 'Get that good job ye')
project('default2')
toDoItem('Complete my exercise', 'Get that good job ye')
project('default3')
toDoItem('Complete The Odin Project', 'Get that good job ye')
