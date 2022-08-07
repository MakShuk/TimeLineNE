import { tasks } from '../../dataInServer';

function taskAdd(
  taskObj,
  taskAddTextAreaClass,
  taskAddButtonClass,
  taskAddModalTitleClass,
  taskColorListClass,
  taskAddColors,
  taskAddModalButton,
  taskTimeCheckInput,
  taskListRender
) {
  const inputEl = document.querySelector(taskAddTextAreaClass);
  const buttonEl = document.querySelector(taskAddButtonClass);
  const moadalTitleEl = document.querySelector(taskAddModalTitleClass);
  const taskColorList = document.querySelector(taskColorListClass);
  const taskAddButton = document.querySelector(taskAddModalButton);
  let selectColorValue = false;

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
        textChange(taskAddTextAreaEl, moadalTitleEl);
      }
    });
  };

  const initColorListEl = (colorClass, taskAddColors) => {
    return `<div  tabindex="0" color=${colorClass} class="${taskAddColors.slice(
      1
    )}  ${colorClass} col-4 m-2"></div>`;
  };

  const initColotList = (colorObj, taskObj, taskColorListEl, taskAddColors) => {
    let cloneColorObj = JSON.parse(JSON.stringify(colorObj));
    taskColorListEl.innerHTML = '';
    taskObj.current.forEach((el) => {
      cloneColorObj = cloneColorObj.filter((item) => item !== el.taskColor);
    });
    cloneColorObj.forEach((el) => {
      taskColorListEl.innerHTML += initColorListEl(el, taskAddColors);
    });
    document.querySelectorAll(taskAddColors).forEach(el => 
      {el.addEventListener('focus', ()=>{el.click()})});
  };

  const resetStyle = (elementsClass, property, valueProperty) => {
    const el = document.querySelectorAll(elementsClass);
    el.forEach((e) => {
      e.style[property] = valueProperty;
    });
  };

  const delegationToChild = (Selector, event, childElAndSelector, ...fun) => {
    let el = document.querySelector(Selector);
    el.addEventListener(event, (e) => {
      if (e.target && e.target.matches(childElAndSelector)) {
        fun.forEach((i) => i(e));
      }
    });
  };

  const selectColor = (e) => {
    e.target.style.transform = 'scale(1.2)';
    selectColorValue = e.target.getAttribute('color');
  };

  const togleSelectChek = (taskTimeCheckInputClass) => {
    let value = false;
    let el = document.querySelectorAll(taskTimeCheckInputClass);
    el.forEach((e) => {
      if (e.checked) {
        value =
          e.parentNode.lastChild.previousElementSibling.getAttribute('value');
      }
    });
    return value;
  };

  const addTask = (taskAddButton) => {
    let taskTextContent = '';
    taskAddButton.addEventListener('click', () => {
      taskTextContent = moadalTitleEl.textContent;
      if (
        taskTextContent &&
        togleSelectChek(taskTimeCheckInput) &&
        selectColorValue
      ) {
        tasks.addTask(
          taskTextContent,
          selectColorValue,
          +togleSelectChek(taskTimeCheckInput)
        );
        taskListRender();
        taskAddButton.parentNode.firstChild.nextSibling.click();
      }
    });
  };

  delegationToChild(
    taskColorListClass,
    'click',
    taskAddColors,
    () => {
      resetStyle(taskAddColors, 'transform', 'scale(1)');
    },
    selectColor
  );

  buttonEl.addEventListener('click', () => {
    initColotList(color, taskObj, taskColorList, taskAddColors);
    selectColorValue = false;
    inputEl.value = '';
  });




  testInput(inputEl, buttonEl, moadalTitleEl);
  addTask(taskAddButton);
}

export default taskAdd;
