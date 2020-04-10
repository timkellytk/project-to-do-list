import {pageLoad} from './loadDOM'
import {newProject, newTask, editProject} from './functionalityDOM'

// Load DOM layer
pageLoad()
createProjectBtnListeners();

// Add static event listeners
newProject.addBtn.addEventListener('click', newProject.show);
newProject.cancelBtn.addEventListener('click', newProject.hide);
newProject.submitBtn.addEventListener('click', () => {
    newProject.create();
    createProjectBtnListeners();
}); 

newTask.addBtn.addEventListener('click', newTask.show)
newTask.cancelBtn.addEventListener('click', newTask.hide)
newTask.submitBtn.addEventListener('click', newTask.create)

editProject.editBtn.addEventListener('click', editProject.show)
editProject.cancelBtn.addEventListener('click', editProject.hide)
editProject.submitBtn.addEventListener('click', editProject.submit)

// Add dynamic event listeners
function createProjectBtnListeners() {
    let projectBtns = document.querySelectorAll('.project-text.project-container')
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => console.log(e.target.dataset.value))
    });
}

/* 
What I need to create:
- Add data-value = x for each project
- Use this data-value to swap the active projects
- Use this data-value to delete projects

*/