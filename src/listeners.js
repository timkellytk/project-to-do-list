import {newProject, newTask, editProject, swapProjects, deleteProjects} from './functionalityDOM'

// Static event listeners
newProject.addBtn.addEventListener('click', newProject.show);
newProject.cancelBtn.addEventListener('click', newProject.hide);
newProject.submitBtn.addEventListener('click', newProject.create); 

newTask.addBtn.addEventListener('click', newTask.show)
newTask.cancelBtn.addEventListener('click', newTask.hide)
newTask.submitBtn.addEventListener('click', newTask.create)

editProject.editBtn.addEventListener('click', editProject.show)
editProject.cancelBtn.addEventListener('click', editProject.hide)
editProject.submitBtn.addEventListener('click', editProject.submit)

// Dynamic event listeners
function createProjectBtnListeners() {
    let projectBtns = document.querySelectorAll('.project-text.project-container')
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            swapProjects(e.target.dataset.value);
        })
    });

    let deleteProjectBtns = document.querySelectorAll('.utility-btn.delete-project')
    deleteProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            deleteProjects(e.target.parentNode.dataset.value)
        })
    })
}

export {createProjectBtnListeners}