function progressBar(taskObj) {
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

  const percentageOfTime = (taskObj, id) => {
    let fullTime = 0;
    let taskTime = 0;
    Object.keys().forEach((key) => {
      if (taskObj[key].taskProgress) {
        fullTime += taskObj[key].taskTime;
      }
      if (taskObj[key].taskId === id) {
        taskTime = taskObj[key].taskTime;
      }
    });
    return Math.round((taskTime / fullTime) * 100);
  };

  const initProgressBar = (taskObj) => {
    setDataEl(sel.progressBar, '', true);
    let clone = JSON.parse(JSON.stringify(taskObj));
    clone.sort((a, b) => (a['taskProgress'] > b['taskProgress'] ? 1 : -1));
    Object.keys(clone).forEach((key) => {
      if (clone[key].taskProgress) {
        sel.getElbySeclector('progressBar').innerHTML += initProgressEl(
          clone[key].taskColor,
          percentageOfTime(clone, clone[key].taskId)
        );
      }
    }); 
  };

  initProgressBar(taskObj.current);
}

export default progressBar;
