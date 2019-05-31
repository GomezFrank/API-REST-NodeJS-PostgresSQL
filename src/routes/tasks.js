import { Router } from 'express';
import { createTask, getTasks, deleteTask, updateTask, getOneTask, getTaskByProject } from '../controllers/task.controller';

const router = Router();

router.get('/', getTasks);
router.get('/:id', getOneTask)
router.post('/', createTask)
router.delete('/:id', deleteTask);
router.put('/:id', updateTask);
router.get('/project/:projectid', getTaskByProject);



export default router;