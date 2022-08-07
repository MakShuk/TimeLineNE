const doId = () => {
  return Math.random().toString(36).substring(2, 16);
};

let tasks = {
  lastNumber: 5,
  current: [
    {
      taskId: doId(),
      taskContent: 'Убрать стол',
      taskState: 'current',
      taskColor: 'bg-warning',
      taskTime: 3,
      taskProgress: 1,
    },
    {
      taskId: doId(),
      taskContent: 'Подготовить Немесулид',
      taskState: 'current',
      taskColor: 'bg-info',
      taskTime: 5,
      taskProgress: false,
    },
    {
      taskId: doId(),
      taskContent: 'Помазать ухо',
      taskState: 'current',
      taskColor: 'bg-success',
      taskTime: 2,
      taskProgress: false,
    },
    {
      taskId: doId(),
      taskContent: 'Постирать джинсы и кофту',
      taskState: 'current',
      taskColor: 'bg-dark',
      taskTime: 3,
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

  addTask(content, color, time){
    let newTask = {
      taskId: doId(),
      taskContent: content,
      taskState: 'current',
      taskColor: color,
      taskTime: time,
      taskProgress: false,
    };
    this.current = [...this.current, newTask]
  }
};

const elClass = {
  progressIndicator: '.m_progressIndicator',
  progressBar: '.m_progressBar',
  taskList: '.m_taskList',
  taskListButton: '.m_taskListButton',
  timerStartButton: '.m_startTimerButton',
  timerTextArea: '.m_timerTextArea',
  taskAddTextArea: '.m_taskAreaInput',
  taskAddButton: '.m_taskAddButton',
  taskAddModalTitle: '.m_taskAddModalTitle',
  taskColorList: '.m_taskColorList',
  taskAddColors: '.m_taskAddColors',
  taskAddModalButton: '.m_taskAddModalButton ',
  taskTimeCheckInput: '.taskTimeCheckInput',
  taksRemoveButtton: '.m_taksRemoveButtton',
};

export { tasks, elClass };
