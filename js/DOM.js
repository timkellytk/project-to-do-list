// New project form
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
        console.log(_name.value);
        console.log(_description.value);
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

newProject.addBtn.addEventListener('click', newProject.show);
newProject.cancelBtn.addEventListener('click', newProject.hide);
newProject.submitBtn.addEventListener('click', newProject.create);

// Edit project form

const editProject = (() => {
    const editBtn = document.querySelector('.edit-project-info');
    const cancelBtn = document.querySelector('.cancel-btn.edit-project')
    const submitBtn = document.querySelector('.submit-btn.edit-project')
    const _content = document.querySelector('.project-info-display');
    const _name = document.querySelector('[name = project-name]');
    const _description = document.querySelector('[name = project-description]');
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
    function _clear() {
        _name.value = '';
        _description.value = '';
    }
    function submit() {
        console.log(_name.value);
        console.log(_description.value);
        hide();
        _clear();
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

editProject.editBtn.addEventListener('click', editProject.show)
editProject.cancelBtn.addEventListener('click', editProject.hide)
editProject.submitBtn.addEventListener('click', editProject.submit)

// New task form
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
            console.log(_task.value)
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

newTask.addBtn.addEventListener('click', newTask.show)
newTask.cancelBtn.addEventListener('click', newTask.hide)
newTask.submitBtn.addEventListener('click', newTask.create)

// Edit task form
const editTask = (() => {
    btns = document.querySelectorAll('.utility-btn.edit-task');

    function show() {
        console.log('the show works for editTask')
    }
    /* 
    I realised I need a data-value for each task in the to-do-list in the array.
    This way I can reference the appropriate form and such
    */
    return {
        btns,
        show,
    }
})();

editTask.btns.forEach((btn) => {
    btn.addEventListener('click', editTask.show)
});

// Delete task

