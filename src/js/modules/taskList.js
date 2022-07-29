function taskList(taskObj, selectorTaskList) {
  const initEl = (taskContent, taskColor, taskProgress, taskId) => {
    return `<div class="row py-1 border-bottom">
             <div class="col-8 text-center">${taskContent}</div>
            <div class="col-2">action</div>
            <button id="${taskId}" type="button" class="m_taskListButton col-2 btn text-white ${taskColor}">${
      taskProgress ? '-' : '+'
    }</button>
          </div>`;
  };

  const initList = () => {
    let taskList = document.querySelector(selectorTaskList);
    taskObj.current.forEach((el) => {
      taskList.innerHTML += initEl(
        el.taskContent,
        el.taskColor,
        el.taskProgress,
        el.taskId
      );
    });
  };

  initList();
}

export default taskList;
