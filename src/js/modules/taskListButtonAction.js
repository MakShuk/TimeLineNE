function taskListButtonAction(
  tasksObj,
  buttonsSelector,
  classTaksList,
  fnProgressBar
) {
  

  const delegationToChild = (
    classNamePerent,
    event,
    childElAndSelector,
    ...fun
  ) => {
    let el = document.querySelector(classNamePerent);
    el.addEventListener(event, (el) => {
      if (el.target && el.target.matches(childElAndSelector)) {
        fun.forEach((e) => e(el));
      }
    });
  };

  const taskButtonAction = (el) => {
    tasksObj.current.forEach((taskEl, index) => {
      if (taskEl.taskId === el.target.id) {
        tasksObj.setTaskProgress(index);
        fnProgressBar(); 

        el.target.innerHTML = `${taskEl.taskProgress ? '-' : '+'}`;

      }
    });
  };

  delegationToChild(classTaksList, 'click', buttonsSelector, taskButtonAction);
}

export default taskListButtonAction;
