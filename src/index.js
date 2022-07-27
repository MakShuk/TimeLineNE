import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';
import './sass/main.scss';

import progressBar from './js/modules/progressBar';
import taskList from './js/modules/taskList';
import { tasks } from './dataInServer';
import { sel } from './dataInServer';


 


 taskList(tasks, sel.taskList)
 progressBar(tasks, sel.progressBar);