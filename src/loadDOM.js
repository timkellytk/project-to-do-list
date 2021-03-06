import Sortable from 'sortablejs';
import {allProjects} from './index'
import {createProjectBtnListeners, createToDoBtnListeners} from './listeners'

var allTasksContainer = document.getElementById('all-tasks');
var allProjectsContainer = document.getElementById('all-projects');
Sortable.create(allTasksContainer);
Sortable.create(allProjectsContainer);

function storeMyProjects() {
    window.localStorage.setItem('user', JSON.stringify(allProjects))
}

function pageLoad() {
    loadProjects();
    loadActiveProjectInfo();
    loadActiveToDos();
    createProjectBtnListeners();
    createToDoBtnListeners();
}

function pageRefresh() {
    refreshToDoList();
    refreshProjects();
}

function changeProject() {
    refreshProjects();
    refreshToDoList();
}

function refreshToDoList() {
    clearToDos();
    loadActiveToDos();
    createToDoBtnListeners();
}

function refreshProjects() {
    clearProjects();
    loadProjects();
    loadActiveProjectInfo();
    createProjectBtnListeners();
}

function loadProjects() {
    allProjects.forEach((project, index) => {
        const container = document.querySelector('#all-projects')
        const div = document.createElement('div')
        div.classList.add('project-text')
        div.classList.add('project-container')
        div.dataset.value = index
        if (project.active === true) {
            div.classList.add('active')
        }
        
        div.textContent = project.name
        const image = document.createElement('img')
        image.src = 'images/icons8-trash-1.svg'
        image.classList.add('utility-btn')
        image.classList.add('delete-project')

        div.appendChild(image)
        container.appendChild(div)
    })
}

function clearProjects() {
    const container = document.querySelector('#all-projects')
    container.innerHTML = '';
}

function loadActiveProjectInfo() {
    let activeProject = allProjects.filter((project) => project.active === true)
    let headingValue = activeProject[0].name
    let headingDescription = activeProject[0].description

    const heading = document.querySelector('#project-name');
    const inputHeading = document.querySelector('[name=edit-project-name]')
    const description = document.querySelector('#project-description')
    const inputDescripton = document.querySelector('[name=edit-project-description')
    
    heading.textContent = headingValue
    inputHeading.value = headingValue
    description.textContent = headingDescription
    inputDescripton.value = headingDescription
}

function loadToDos(task, index) {
    const contentContainer = document.querySelector('#all-tasks')

        const toDo = document.createElement('div')
        toDo.classList.add('to-do')
        toDo.dataset.value = index

            const toDoContainer = document.createElement('div')
            toDoContainer.classList.add('task-container')
            
                const left = document.createElement('div')
                left.classList.add('horizontal-flex')

                    const checkbox = document.createElement('div')
                    checkbox.classList.add('checkbox')
                    if (task.complete === true) {
                        checkbox.classList.add('complete')
                    }

                    const name = document.createElement('div')
                    name.textContent = task.name
                    name.classList.add('task-name')

                left.appendChild(checkbox)
                left.appendChild(name)

                const right = document.createElement('div')
                right.classList.add('horizontal-flex')

                    const date = document.createElement('div')
                    date.classList.add('date-text')
                    
                    var moment = require('moment');
                    let dueDate = moment(task.dueDate, "YYYY-MM-DD").fromNow()
                    if (dueDate != 'Invalid date') {
                        date.textContent = dueDate
                    }

                    const editIcon = document.createElement('img')
                    editIcon.classList.add('utility-btn')
                    editIcon.classList.add('edit-task')
                    editIcon.src = 'images/pen.svg'

                    const deleteIcon = document.createElement('img')
                    deleteIcon.classList.add('utility-btn')
                    deleteIcon.classList.add('delete-task')
                    deleteIcon.src = 'images/icons8-trash-1.svg'

                right.appendChild(date)
                right.appendChild(editIcon)
                right.appendChild(deleteIcon)

            toDoContainer.appendChild(left)
            toDoContainer.appendChild(right)

            const toDoForm = document.createElement('div')
            toDoForm.classList.add('w-form')
            toDoForm.classList.add('edit-task-form')

                const form = document.createElement('form')
                form.classList.add('flex-form')
                form.setAttribute('onSubmit', 'return false')

                    const inputName = document.createElement('input')
                    inputName.classList.add('w-input')
                    inputName.classList.add('edit-task')
                    inputName.classList.add('name')
                    inputName.setAttribute("type", "text")
                    inputName.value = task.name

                    const inputDate = document.createElement('input')
                    inputDate.classList.add('w-input')
                    inputDate.classList.add('edit-task')
                    inputDate.classList.add('date')
                    inputDate.setAttribute("type", "date")
                    inputDate.value = task.dueDate

                    const containerBtns = document.createElement('div')
                    containerBtns.classList.add('horizontal-flex')

                        const submitBtn = document.createElement('input')
                        submitBtn.classList.add('w-button')
                        submitBtn.classList.add('submit-btn')
                        submitBtn.classList.add('edit-task')
                        submitBtn.setAttribute("type", "button")
                        submitBtn.value = "Submit"

                        const cancelBtn = document.createElement('div')
                        cancelBtn.classList.add('cancel-btn')
                        cancelBtn.classList.add('edit-task')
                        cancelBtn.textContent = "Cancel"

                    containerBtns.appendChild(submitBtn)
                    containerBtns.appendChild(cancelBtn)

                form.appendChild(inputName)
                form.appendChild(inputDate)
                form.appendChild(containerBtns)

            toDoForm.appendChild(form)

        toDo.appendChild(toDoContainer)
        toDo.appendChild(toDoForm)
    contentContainer.appendChild(toDo)
}

function loadActiveToDos() {
    allProjects.forEach((project) => {
        project.toDoItems.forEach((task, index) => {
            if (project.active === true){
                loadToDos(task, index);
            }
        })
    })
}

function clearToDos() {
    const contentContainer = document.querySelector('#all-tasks')
    contentContainer.innerHTML = '';
}

export {pageLoad, storeMyProjects, pageRefresh, changeProject, refreshProjects, refreshToDoList} 