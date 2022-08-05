function taskAdd(
  taskObj,
  taskAddTextAreaClass,
  taskAddButtonClass,
  taskAddModalTitleClass,
  taskColorListClass,
  taskAddColors,
  taskAddModalButton,
  taskTimeCheckInput
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
    return `<div  color=${colorClass} class="${taskAddColors.slice(
      1
    )}  ${colorClass} col-4 m-2"></div>`;
  };

  const initColotList = (colorObj, taskObj, taskColorListEl, taskAddColors) => {
    let cloneColorObj = JSON.parse(JSON.stringify(colorObj));
    taskObj.current.forEach((el) => {
      cloneColorObj = cloneColorObj.filter((item) => item !== el.taskColor);
    });
    cloneColorObj.forEach((el) => {
      taskColorListEl.innerHTML += initColorListEl(el, taskAddColors);
    });
  };

  const resetStyle = (elementsClass, property, valueProperty) => {
    const el = document.querySelectorAll(elementsClass);
    el.forEach((e) => {
      e.style[property] = valueProperty;
    });
  };

  const delegationToChild = (Selector, event, childElAndSelector, ...fun) =>
    // fun1,
    // fun2
    {
      let el = document.querySelector(Selector);
      el.addEventListener(event, (el) => {
        if (el.target && el.target.matches(childElAndSelector)) {
          fun.forEach((e) => e(el));
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
        console.log(
          `Название: ${taskTextContent} время: ${togleSelectChek(
            taskTimeCheckInput
          )} цвет: ${selectColorValue}`
        );
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
  initColotList(color, taskObj, taskColorList, taskAddColors);
  testInput(inputEl, buttonEl, moadalTitleEl);
  addTask(taskAddButton)
}

export default taskAdd;
