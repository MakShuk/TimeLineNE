function taskListButtonAction(tasksObj, buttonsSelector) {



  let buttons = document.querySelectorAll(buttonsSelector);
  buttons.forEach((button) => {
    button.addEventListener('click', (el) => {
      tasksObj.current.forEach((taskEl) => {
        if(taskEl.taskId === el.target.id) {
         console.log('Add');
        }
      })
    });
  });
}

export default taskListButtonAction;