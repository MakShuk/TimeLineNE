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
      taskTime: 10,
      taskProgress: 1,
    },
    {
      taskId: doId(),
      taskContent: 'Таск 2',
      taskState: 'current',
      taskColor: 'bg-info',
      taskTime: 5,
      taskProgress: false,
    },
    {
      taskId: doId(),
      taskContent: 'Таск 3',
      taskState: 'current',
      taskColor: 'bg-success',
      taskTime: 15,
      taskProgress: false,
    },
    {
      taskId: doId(),
      taskContent: 'Таск 4',
      taskState: 'current',
      taskColor: 'bg-dark',
      taskTime: 15,
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
    this.current[index].taskProgress
      ? (this.current[index].taskProgress = false)
      : (this.current[index].taskProgress = this.lastNumber);
    this.lastNumber++;
  },
};

const sel = {
  progressIndicator: '.m_progressIndicator',
  progressBar: '.m_progressBar',
  taskList: '.m_taskList',
  taskListButton: '.m_taskListButton',
  timerStartButton: '.m_startTimerButton',
  timerTextArea: '.m_timerTextArea',
  taskAddTextArea: '.m_taskAreaInput',
};

export { tasks, sel };
