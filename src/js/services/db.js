const doId = () => {
  return Math.random().toString(36).substring(2, 16);
};

let tasks = {
  lastNumber: 5,
  current: [
   
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

  addTask(content, color, time) {
    let newTask = {
      taskId: doId(),
      taskContent: content,
      taskState: 'current',
      taskColor: color,
      taskTime: time,
      taskProgress: false,
    };
    this.current = [...this.current, newTask];
  },
};

const save = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks.current));
};


const getSaveData = () => {
tasks.current = JSON.parse(localStorage.getItem('tasks'));
}

export { tasks, save, getSaveData};
