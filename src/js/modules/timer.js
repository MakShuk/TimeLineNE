function timer(taskObj, timerTextAreaClass, startTimerButtonClass) {
  let endtime;
  let timeInterval;
  let pause = 0;

  const startButton = document.querySelector(startTimerButtonClass);

  const getTimeRemaining = (endtime) => {
    let days, hours, minutes, seconds;

    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = hours = minutes = seconds = 0;
    } else {
      (days = Math.floor(t / (1000 * 60 * 60 * 24))),
        (hours = Math.floor((t / (1000 * 60 * 60)) % 24)),
        (minutes = Math.floor((t / 1000 / 60) % 60)),
        (seconds = Math.floor((t / 1000) % 60));
    }
    return {
      total: t,
      days: days,
      hourse: hours,
      minets: minutes,
      second: seconds,
    };
  };

  const getZero = (num) => {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  };

  function plusMinutes(min) {
    let date = new Date();
    date.setDate(date.getDate());
    date.setHours(date.getHours());
    date.setMinutes(date.getMinutes() + min);
    return date;
  }

  const updateCloke = (endtime) => {
    const timer = document.querySelector(timerTextAreaClass);
    let t = getTimeRemaining(endtime);
    timer.innerHTML = `${getZero(t.minets)} : ${getZero(t.second)}`;
    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  };

  let timerStatus = 'firstStart';

  startButton.addEventListener('click', () => {
    if (timerStatus == 'firstStart') {
      endtime = plusMinutes(taskObj.fullTime);
      timeInterval = setInterval(() => {
        updateCloke(endtime);
      }, 1000);
      timerStatus = 'pause';
      startButton.innerHTML = 'Pause';
    } else if (timerStatus == 'pause') {
      pause = Date.parse(endtime) - Date.parse(new Date());
      clearInterval(timeInterval);
      statusbar;
      timerStatus = 'start';
      startButton.innerHTML = 'Start';
    } else {
      endtime = new Date(
        new Date().setMilliseconds(new Date().getMilliseconds() + pause + 600)
      );
      timeInterval = setInterval(() => {
        updateCloke(endtime);
      }, 1000);
      timerStatus = 'pause';
      startButton.innerHTML = 'Pause';
    }
  });
}

export default timer;
