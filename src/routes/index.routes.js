import { Router } from 'express'
import { renderTasks , createTask ,taskDelete, renderTasksEdit , editTask , taskToggleDone} from '../controllers/tasks.controller'

const router = Router();

router.get('/', renderTasks);
router.get('/toggleDone/:id', taskToggleDone)
router.get('/edit/:id', renderTasksEdit);
router.get('/delete/:id', taskDelete);

//post
router.post('/tasks/add', createTask);
router.post('/edit/:id', editTask);


export default router;