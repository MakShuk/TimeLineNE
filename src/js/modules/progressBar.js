function progressBar(taskObj, selectorProgressBar) {
  const initProgressEl = (color, percentage) => {
    return `<div class="progress-bar bg-gradient ${color}" role="progressbar" aria-valuenow="48" aria-valuemin="0" aria-valuemax="100" style="width: ${percentage}%;"></div>`;
  };

  const setDataEl = (elSelector, data, replacement = true) => {
    let el = document.querySelector(elSelector);
    if (el.nodeName == 'INPUT') {
      replacement ? (el.value = data) : (el.value += data);
    }
    replacement ? (el.innerHTML = data) : (el.innerHTML += data);
  };

  const percentageOfTime = (cloneTaskObj, id) => {
    let fullTime = 0;
    let taskTime = 0;
    cloneTaskObj.current.forEach((e) => {
      if (e.taskProgress) {
        fullTime += e.taskTime;
      }
      if (e.taskId === id) {
        taskTime = e.taskTime;
      }
    });
    return Math.round((taskTime / fullTime) * 100);
  };

  const initProgressBar = (taskObj) => {
    setDataEl(selectorProgressBar, '', true);
    let cloneTaskObj = JSON.parse(JSON.stringify(taskObj));
    cloneTaskObj.current.sort((a, b) =>
      a['taskProgress'] > b['taskProgress'] ? 1 : -1
    );
    console.log(cloneTaskObj);
    cloneTaskObj.current.forEach((e) => {
      if (e.taskProgress) {
        document.querySelector(selectorProgressBar).innerHTML += initProgressEl(
          e.taskColor,
          percentageOfTime(cloneTaskObj, e.taskId)
        );
      }
    });
  };

  initProgressBar(taskObj);
}

export default progressBar;
