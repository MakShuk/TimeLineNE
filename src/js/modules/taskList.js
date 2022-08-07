function taskList(taskObj, selectorTaskList) {
  const initEl = (taskContent, taskColor, taskProgress, taskId, taskTime) => {
    return `<div class="row py-1 border-bottom">
            <div class="col-6 text-center">${taskContent}</div>
            <div class="col-2 text-center">${taskTime} min</div>
            <button remove-id="${taskId}" class="m_taksRemoveButtton btn col-2">remove</button>
            <button id="${taskId}" type="button" class="m_taskListButton col-2 btn text-white  ${taskColor}">${
      taskProgress ? '-' : '+'
    }</button>
          </>`;
  };

  const initList = () => {
    let taskList = document.querySelector(selectorTaskList);
    taskList.innerHTML = '';
    taskObj.current.forEach(
      ({ taskContent, taskColor, taskProgress, taskId, taskTime }) => {
        taskList.innerHTML += initEl(
          taskContent,
          taskColor,
          taskProgress,
          taskId,
          taskTime
        );
      }
    );
  };

  initList();
}

export default taskList;
