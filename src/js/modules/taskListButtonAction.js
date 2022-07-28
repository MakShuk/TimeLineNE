function taskListButtonAction(tasksObj, buttonsSelector, fnProgressBar,) {
  let buttons = document.querySelectorAll(buttonsSelector);
  buttons.forEach((button) => {
    button.addEventListener('click', (el) => {
      tasksObj.current.forEach((taskEl, index) => {
        if (taskEl.taskId === el.target.id) {
          tasksObj.setTaskProgress(index);
          fnProgressBar();
         button.innerHTML = `${taskEl.taskProgress ? '+' : '-'}`;
        }
      });
    });
  });
}

export default taskListButtonAction;