import {createProject, createToDo, selectActiveProject, selectActiveToDoList} from './logic'
import {changeProject, refreshProjects, refreshToDoList} from './loadDOM'

const newProject = (() => {
    const addBtn = document.querySelector('#add-project');
    const cancelBtn = document.querySelector('.cancel-btn.project-create');
    const submitBtn = document.querySelector('.submit-btn.project-create');
    const _form = document.querySelector('.new-project-block');
    const _name = document.querySelector('[name = new-project-name]');
    const _description = document.querySelector('[name = new-project-description]');

    function show() {
        _form.style.display = 'flex';
    };
    function hide() {
        _form.style.display = 'none';
        _clear();
    };
    function _clear() {
        _name.value = '';
        _description.value = '';
    };
    function _submit() {
        createProject(_name.value, _description.value);
        changeProject();
    };

    function create() {
        if (_name.value !== '') {
            _submit();
            _clear();
            hide();
        } else {
            alert('Please add a name for your project');
        }
    };

    return {
      show,
      hide,
      create,
      addBtn,
      cancelBtn,
      submitBtn,
    };
})();

const newTask = (() => {
    const addBtn = document.querySelector('#add-task')
    const cancelBtn = document.querySelector('.cancel-btn.task-create')
    const submitBtn = document.querySelector('.submit-btn.task-create')
    const _form = document.querySelector('.create-task')
    const _task = document.querySelector('[name = new-task]');
    const _date = document.querySelector('[name = new-date]')

    function _showForm() {
        _form.style.display = 'block' 
    };
    function _hideForm() {
        _form.style.display = 'none' 
    }
    function _showAddBtn() {
        addBtn.style.display = 'block'
    }
    function _hideAddBtn() {
        addBtn.style.display = 'none'
    }
    function _clearTask() {
        _task.value = '';
    }

    function show() {
        _showForm();
        _hideAddBtn();
    }
    function hide() {
        _showAddBtn();
        _hideForm();
        _clearTask();
    }

    function create() {
        if(_task.value !== '') {
            createToDo(_task.value, _date.value)
            refreshToDoList();
            _clearTask();
            hide();
        } else {
            alert('Please enter a name for your task')
        }
    }

    return {
        show,
        hide,
        create,
        addBtn,
        cancelBtn,
        submitBtn,
    };
})();

const editProject = (() => {
    const editBtn = document.querySelector('.edit-project-info');
    const cancelBtn = document.querySelector('.cancel-btn.edit-project')
    const submitBtn = document.querySelector('.submit-btn.edit-project')
    
    const _content = document.querySelector('.project-info-display');
    const _name = document.querySelector('[name = edit-project-name]');
    const _description = document.querySelector('[name = edit-project-description]');
    const _form = document.querySelector('.edit-project-form');

    function show() {
        _form.style.display = 'block';
        _content.style.display = 'none';
    };
    function hide() {
        _content.style.display = 'block'
        _form.style.display = 'none';
    }
    function submit() {
        let activeProject = selectActiveProject();
        activeProject.name = _name.value
        activeProject.description = _description.value
        refreshProjects();
        hide();
    }
    
    return {
        editBtn,
        cancelBtn,
        submitBtn,
        show,
        hide,
        submit,
    }
})();

const editTask = (() => {
    function checkbox(btn) {
        btn.classList.toggle('complete')
    }
    function activateForm(index) {
        const _tasks = document.querySelectorAll('.task-container')
        const _forms = document.querySelectorAll('.edit-task-form')

        _tasks[index].style.display = 'none'
        _forms[index].style.display = 'block'
    }
    function deactivateForm(index) {
        const _tasks = document.querySelectorAll('.task-container')
        const _forms = document.querySelectorAll('.edit-task-form')

        _tasks[index].style.display = 'flex'
        _forms[index].style.display = 'none'
    }
    function submitForm(index) {
        let activeToDoArray = selectActiveToDoList();
        let activeToDo = activeToDoArray[index]

        let inputName = document.querySelectorAll('.edit-task.name')
        let inputDate = document.querySelectorAll('.edit-task.date')

        activeToDo.name = inputName[index].value
        activeToDo.dueDate = inputDate[index].value
    }
    return {
        checkbox,
        activateForm,
        deactivateForm,
        submitForm,
    }
})();

export {newProject, newTask, editProject, editTask}