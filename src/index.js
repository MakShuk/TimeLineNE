import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './sass/main.scss';

import progressBar from './js/modules/progressBar';
import taskList from './js/modules/taskList';
import { elClass } from './dataInServer';
import taskListButtonAction from './js/modules/taskListButtonAction';
import timer from './js/modules/timer';
import updateFullTaskTime from './js/modules/updateFullTaskTime';
import taskAdd from './js/modules/taskAdd';
import removeTask from './js/modules/removeTask'
import { tasks, getSaveData, save } from './js/services/db';



getSaveData();

const taskListFn = () => {
  taskList(tasks, elClass.taskList);
};
const progressBarFn = () => {
  progressBar(tasks, elClass.progressBar, () => {
    updateFullTaskTime(tasks, elClass.timerTextArea);
  });
};

progressBarFn();
taskListFn();
taskListButtonAction(
  tasks,
  elClass.taskListButton,
  elClass.taskList,
  progressBarFn
);
timer(tasks, elClass.timerTextArea, elClass.timerStartButton);
taskAdd(
  tasks,
  elClass.taskAddTextArea,
  elClass.taskAddButton,
  elClass.taskAddModalTitle,
  elClass.taskColorList,
  elClass.taskAddColors,
  elClass.taskAddModalButton,
  elClass.taskTimeCheckInput,
  taskListFn,
  save
);
removeTask(
  tasks,
  elClass.taskList,
  elClass.taksRemoveButtton,
  taskListFn,
  progressBarFn,
  save
);




