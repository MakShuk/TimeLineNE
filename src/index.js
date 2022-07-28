import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './sass/main.scss';

import progressBar from './js/modules/progressBar';
import taskList from './js/modules/taskList';
import { tasks } from './dataInServer';
import { sel } from './dataInServer';
import taskListButtonAction from './js/modules/taskListButtonAction';


 


 taskList(tasks, sel.taskList);
 progressBar(tasks, sel.progressBar);
 taskListButtonAction(tasks, sel.taskListButton, ()=>{ progressBar(tasks, sel.progressBar);});