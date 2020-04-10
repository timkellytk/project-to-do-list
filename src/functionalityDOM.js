import {allProjects, createProject, createToDo, selectActiveProject, clearActiveProjects} from './logic'
import {changeProject, refreshProjects, refreshTasks} from './loadDOM'
import {createProjectBtnListeners} from './listeners'

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
        createProjectBtnListeners
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
            createToDo(_task.value)
            refreshTasks();
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

    function _showForm() {
        _form.style.display = 'block';
    };
    function _hideForm() {
        _form.style.display = 'none';
    };
    function _showContent() {
        _content.style.display = 'block'
    }
    function _hideContent() {
        _content.style.display = 'none';
    };

    function show() {
        _showForm();
        _hideContent();
    };
    function hide() {
        _showContent();
        _hideForm();
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

function swapProjects(e) {
    clearActiveProjects();
    let index = e.target.dataset.value
    let project = allProjects[index]
    project.active = true
    changeProject()
    createProjectBtnListeners()
}

/* 
const editTask = (() => {
    btns = document.querySelectorAll('.utility-btn.edit-task');

    function show() {
        console.log('the show works for editTask')
    }

    return {
        btns,
        show,
    }
})();

editTask.btns.forEach((btn) => {
    btn.addEventListener('click', editTask.show)
});
 */
export {newProject, newTask, editProject, swapProjects}