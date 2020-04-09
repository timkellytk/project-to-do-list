// New project form
const newProject = (() => {
    const _div = document.querySelector('.new-project-block');
    const _name = document.querySelector('[name = new-project-name]');
    const _description = document.querySelector('[name = new-project-description]');
    function show() {
        _div.style.display = 'flex';
    };
    function hide() {
        _div.style.display = 'none';
    };
    function _submit() {
        console.log(_name.value);
        console.log(_description.value);
    };
    function _clear() {
        _name.value = '';
        _description.value = '';
    };
    function create() {
        if (_name.value !== '') {
            _submit();
            _clear();
            hide();
        } else {
            alert('You need to enter a name for your project');
        }
    };
    const addBtn = document.querySelector('#add-project');
    const cancelBtn = document.querySelector('.cancel-btn.project-create');
    const submitBtn = document.querySelector('.submit-btn.project-create');
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

const newTask = (() => {

})();
