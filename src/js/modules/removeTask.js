function removeTask(tasksObj, taskListClass, taskRemoveClass, taskListFn, progressBarFn) {
  const delegationToChild = (Selector, event, childElAndSelector, ...fun) => {
    let el = document.querySelector(Selector);
    el.addEventListener(event, (e) => {
      if (e.target && e.target.matches(childElAndSelector)) {
        fun.forEach((i) => i(e));
      }
    });
  };
 
const remove  = (e) => {
   const id = e.target.getAttribute('remove-id');
   tasksObj.delTask(id);
   taskListFn()
   progressBarFn()
}

delegationToChild(taskListClass, 'click', taskRemoveClass, remove);



}

export default removeTask;
