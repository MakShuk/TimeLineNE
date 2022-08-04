function taskAdd(
  taskObj,
  taskAddTextAreaClass,
  taskAddButtonClass,
  taskAddModalTitleClass,
  taskColorListClass
) {
  const inputEl = document.querySelector(taskAddTextAreaClass);
  const buttonEl = document.querySelector(taskAddButtonClass);
  const moadalTitleEl = document.querySelector(taskAddModalTitleClass);
  const taskColorList = document.querySelector(taskColorListClass);

  let color = [
    'bg-primary',
    'bg-secondary',
    'bg-success',
    'bg-danger',
    'bg-warning',
    'bg-info',
    'bg-dark',
  ];

  const textChange = (inputEl, moadalTitleEl) => {
    console.log(inputEl.value);
    moadalTitleEl.innerHTML = inputEl.value;
  };

  const testInput = (taskAddTextAreaEl, taskAddButtonEl, moadalTitleEl) => {
    taskAddTextAreaEl.addEventListener('input', () => {
      if (!taskAddTextAreaEl.value.length) {
        taskAddTextAreaEl.classList.add('is-invalid');
        taskAddButtonEl.disabled = true;
      } else {
        taskAddTextAreaEl.classList.remove('is-invalid');
        taskAddButtonEl.disabled = false;
        console.log(moadalTitleEl);
        textChange(taskAddTextAreaEl, moadalTitleEl);
      }
    });
  };

  const initColorListEl = (colorClass) => {
    return `<div class="m_colors ${colorClass} col-4 m-2"></div>`;
  };

  const initColotList = (colorObj, taskObj, taskColorListEl) => {
    let cloneColorObj = JSON.parse(JSON.stringify(colorObj));
    taskObj.current.forEach((el) => {
      cloneColorObj = cloneColorObj.filter((item) => item !== el.taskColor);
    });
    console.log(cloneColorObj);
    cloneColorObj.forEach((el) => {
      taskColorListEl.innerHTML += initColorListEl(el);
    });
  };
  

  initColotList(color, taskObj, taskColorList);
  testInput(inputEl, buttonEl, moadalTitleEl);
}

export default taskAdd;
