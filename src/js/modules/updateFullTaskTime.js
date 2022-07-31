function updateFullTaskTime(tasksObj, fullTimeCalss) {

    const getZero = (num) => {
      if (num >= 0 && num < 10) {
        return `0${num}`;
      } else {
        return num;
      }
    };

  let fullTime = document.querySelector(fullTimeCalss);
  fullTime.innerHTML = `${getZero(tasksObj.fullTime)} : 00`;
}

export default updateFullTaskTime;