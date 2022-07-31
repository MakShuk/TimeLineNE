import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './sass/main.scss';

import progressBar from './js/modules/progressBar';
import taskList from './js/modules/taskList';
import { tasks } from './dataInServer';
import { sel } from './dataInServer';
import taskListButtonAction from './js/modules/taskListButtonAction';
import timer from './js/modules/timer';
import updateFullTaskTime from './js/modules/updateFullTaskTime'


 


 taskList(tasks, sel.taskList);
 progressBar(tasks, sel.progressBar, ()=>{updateFullTaskTime(tasks, sel.timerTextArea)});
 taskListButtonAction(tasks, sel.taskListButton, ()=>{progressBar(tasks, sel.progressBar, () => {
   updateFullTaskTime(tasks, sel.timerTextArea);
 });});
 timer(tasks, sel.timerTextArea, sel.timerStartButton);
 