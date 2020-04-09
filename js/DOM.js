// New project form
const newProject = (() => {
    let _div = document.querySelector('.new-project-block');
    function show() {
        _div.style.display = 'flex';
    };
    function hide() {
        _div.style.display = 'none';
    };
    function _submit() {
        let name = document.querySelector('[name = new-project-name]');
        let description = document.querySelector('[name = new-project-description]');
        console.log(name.value);
        console.log(description.value);
    };
    function create() {
        _submit();
        hide();
    };
    let addBtn = document.querySelector('.add-project');
    let cancelBtn = document.querySelector('.cancel-btn.project-create');
    let submitBtn = document.querySelector('.submit-btn.project-create');
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
