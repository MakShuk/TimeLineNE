function taskAdd(
  taskObj,
  taskAddTextAreaClass,
  taskAddButtonClass,
  taskAddModalTitleClass,
  taskColorListClass,
  taskAddColors
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

  const initColorListEl = (colorClass, taskAddColors) => {
    return `<div  color=${colorClass} class="${taskAddColors.slice(1)}  ${colorClass} col-4 m-2"></div>`;
  };

  const initColotList = (colorObj, taskObj, taskColorListEl, taskAddColors) => {
    let cloneColorObj = JSON.parse(JSON.stringify(colorObj));
    taskObj.current.forEach((el) => {
      cloneColorObj = cloneColorObj.filter((item) => item !== el.taskColor);
    });
    cloneColorObj.forEach((el) => {
      console.log(initColorListEl(el, taskAddColors));
      taskColorListEl.innerHTML += initColorListEl(el, taskAddColors);
    });
  };

  const delegationToChild = (Selector, event, childElAndSelector, fun) => {
    let el = document.querySelector(Selector);
    el.addEventListener(event, (el) => {
      if (el.target && el.target.matches(childElAndSelector)) {
        fun(el);
      }
    });
  };

  const test = (e) => {
    console.log(e.target.getAttribute('color'));
  };

  delegationToChild(taskColorListClass, 'click', taskAddColors, test);
  initColotList(color, taskObj, taskColorList, taskAddColors);
  testInput(inputEl, buttonEl, moadalTitleEl);
  console.log(taskAddColors);
}

export default taskAdd;
