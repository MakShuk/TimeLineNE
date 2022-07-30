const doId = () => {
  return Math.random().toString(36).substring(2, 16);
};

let tasks = {
  lastNumber: 5,
  current: [
    {
      taskId: doId(),
      taskContent: 'Таск 1',
      taskState: 'current',
      taskColor: 'bg-warning',
      taskTime: 1,
      taskProgress: true,
    },
    {
      taskId: doId(),
      taskContent: 'Таск 2',
      taskState: 'current',
      taskColor: 'bg-info',
      taskTime: 2,
      taskProgress: false,
    },
    {
      taskId: doId(),
      taskContent: 'Таск 3',
      taskState: 'current',
      taskColor: 'bg-success',
      taskTime: 3,
      taskProgress: false,
    },
    {
      taskId: doId(),
      taskContent: 'Таск 4',
      taskState: 'current',
      taskColor: 'bg-dark',
      taskTime: 4,
      taskProgress: false,
    },
  ],
  done: [
    {
      //
      taskId: doId(),
      taskContent: 'Таск 3',
      taskState: 'done',
    },
  ],

  get fullTime() {
    let fullTime = 0;
    this.current.forEach((key) => {
      if (key.taskProgress) {
        fullTime += key.taskTime;
      }
    });
    return fullTime;
  },
  delTask(id) {
    this.current.forEach((el, i) => {
      if (el.taskId == id) {
        this.current.splice(i, 1);
      }
    });
  },
  setTaskProgress(index) {
    this.current[index].taskProgress = !this.current[index].taskProgress;
    this.current[index].taskTime = this.lastNumber
    this.lastNumber++
  },

};

const sel = {
  sectionTimeLine: '.m_timeLine',
  progressIndicator: '.m_progressIndicator',
  progressBar: '.m_progressBar',
  taskList: '.m_taskList',
  colorList: '.m_colorList',
  timeChoice: '.m_timуСhoice',
  btnModalAddTask: '.m_btnModalAddTask',
  taskListButton: '.m_taskListButton',
  timerStartButton: '.m_startTimerButton',
  timerTextArea: '.m_timerTextArea',
  getElbySeclector(key, oneOrAll = 'one') {
    if (oneOrAll == 'one') return document.querySelector(this[key]);
    if (oneOrAll == 'all') return document.querySelectorAll(this[key]);
  },
};

export { tasks, sel };
