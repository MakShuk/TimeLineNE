import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './sass/main.scss';

import progressBar from './js/modules/progressBar';
import taskList from './js/modules/taskList';
import { tasks } from './dataInServer';
import { elClass } from './dataInServer';
import taskListButtonAction from './js/modules/taskListButtonAction';
import timer from './js/modules/timer';
import updateFullTaskTime from './js/modules/updateFullTaskTime'
import taskAdd from './js/modules/taskAdd'

 taskList(tasks, elClass.taskList);
 progressBar(tasks, elClass.progressBar, ()=>{updateFullTaskTime(tasks, elClass.timerTextArea)});
 taskListButtonAction(tasks, elClass.taskListButton, ()=>{progressBar(tasks, elClass.progressBar, () => {
   updateFullTaskTime(tasks, elClass.timerTextArea);
 });});
 timer(tasks, elClass.timerTextArea, elClass.timerStartButton);
 taskAdd(
   tasks,
   elClass.taskAddTextArea,
   elClass.taskAddButton,
   elClass.taskAddModalTitle,
   elClass.taskColorList,
   elClass.taskAddColors,
   elClass.taskAddModalButton,
   elClass.taskTimeCheckInput
 );
 

