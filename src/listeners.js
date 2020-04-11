import {deleteProject, swapProject, completeToDo, deleteToDo} from './logic'
import {pageRefresh, refreshToDoList, changeProject} from './loadDOM'
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
editProject.submitBtn.addEventListener('click', () => {
        editProject.submit()
        editProject.hide()
    })

// Dynamic event listeners
function createProjectBtnListeners() {
    let projectBtns = document.querySelectorAll('.project-text.project-container')
    projectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (e.target.className === 'utility-btn delete-project') {
                
            } else {
                let dataValue = e.target.dataset.value
                swapProject(dataValue);
                changeProject();
            }
        })
    });

    let deleteProjectBtns = document.querySelectorAll('.utility-btn.delete-project')
    deleteProjectBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.dataset.value
            deleteProject(dataValue)
            pageRefresh();
        })
    })
}

function createToDoBtnListeners() {
    let form = document.querySelectorAll('.edit-task-form')
    
    let checkbox = document.querySelectorAll('.checkbox')
    checkbox.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            completeToDo(dataValue)
            editTask.checkbox(btn);
        })
    })
    let taskNames = document.querySelectorAll('.task-name')
    taskNames.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            editTask.activateForm(dataValue)
            editTaskBtnListeners(dataValue)
        })
    })

    let taskDueDates = document.querySelectorAll('.date-text')
    taskDueDates.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            editTask.activateForm(dataValue)
            editTaskBtnListeners(dataValue)
        })
    })

    let editTaskBtns = document.querySelectorAll('.utility-btn.edit-task')
    editTaskBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            editTask.activateForm(dataValue)
            editTaskBtnListeners(dataValue)        })
    })

    let deleteToDoBtns = document.querySelectorAll('.utility-btn.delete-task')
    deleteToDoBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            let dataValue = e.target.parentNode.parentNode.parentNode.dataset.value
            deleteToDo(dataValue);
            refreshToDoList();
        })
    })
}

function editTaskBtnListeners(index) {
    let editToDoForms = document.querySelectorAll('.edit-task-form')
    editToDoForms[index].style.display = 'block'

    let submitBtns = document.querySelectorAll('.submit-btn.edit-task')
    submitBtns[index].addEventListener('click', () => {
        editTask.submitForm(index)
        editTask.deactivateForm(index)
        refreshToDoList()
    })
    
    let cancelBtns = document.querySelectorAll('.cancel-btn.edit-task')
    cancelBtns[index].addEventListener('click', () => editTask.deactivateForm(index))
}

export {createProjectBtnListeners, createToDoBtnListeners}