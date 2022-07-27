function taskList(taskObj, selectorTaskList) {
  const initEl = (taskContent, taskColor) => {
    return `<div class="row py-1 border-bottom">
             <div class="col-8 text-center">${taskContent}</div>
            <div class="col-2">action</div>
            <button type="button" class="col-2 btn ${taskColor}">-</button>
          </div>`;
  };

  const initList = () => {
    let taskList = document.querySelector(selectorTaskList);
    taskObj.current.forEach((el) => {
      taskList.innerHTML += initEl(el.taskContent, el.taskColor);
    });
  };

  initList();
}

export default taskList;
