import {deleteProject, swapProject, completeTask} from './logic'
import {pageRefresh, changeProject} from './loadDOM'
import {newProject, newTask, editProject, editTask} from './functionalityDOM'

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
            swapProject(e.target.dataset.value);
            changeProject();
        })
    });

    let deleteProjectBtns = document.querySelectorAll('.utility-btn.delete-project')
    deleteProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            deleteProject(e.target.parentNode.dataset.value)
            pageRefresh();
        })
    })
}

function createTaskBtnListeners() {
    let form = document.querySelectorAll('.edit-task-form')
    
    let checkbox = document.querySelectorAll('.checkbox')
    checkbox.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            completeTask(dataValue)
            editTask.checkbox(btn);
        })
    })
    let taskName = document.querySelectorAll('.task-name')
    taskName.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            editTask.activateForm(dataValue)
        })
    })
    let deleteTaskBtns = document.querySelectorAll('.utility-btn.delete-task')
    deleteTaskBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e.target)
        })
    })
    let editTaskBtns = document.querySelectorAll('.utility-btn.edit-task')
    editTaskBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log(e.target)
        })
    })
}

export {createProjectBtnListeners, createTaskBtnListeners}