import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './sass/main.scss';

import progressBar from './js/modules/progressBar';
import taskList from './js/modules/taskList';
import { tasks } from './dataInServer';
import { sel } from './dataInServer';
import taskListButtonAction from './js/modules/taskListButtonAction';
import timer from './js/modules/timer';


 


 taskList(tasks, sel.taskList);
 progressBar(tasks, sel.progressBar);
 taskListButtonAction(tasks, sel.taskListButton, ()=>{ progressBar(tasks, sel.progressBar);});

 timer(sel.timerTextArea, sel.timerStartButton);