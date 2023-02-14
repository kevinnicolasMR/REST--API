import {Router} from 'express'
const router = Router();
import {getTask,createTask, updateTask, deleteTask, getSingleTask} from '../controllers/tasks.controllers.js'

router.get('/tasks', getTask)
router.post('/tasks', createTask)
router.put('/tasks/:id',updateTask)
router.delete('/tasks/:id',deleteTask)
router.get('/tasks/:id',getSingleTask)


export default router;