import { Router } from 'express';

import { getTasks, createTask, updateTaskStatus, getTasksByUserId } from '../controllers/taskController';

const router = Router();

router.get('/', getTasks);
router.post('/', createTask);
router.patch('/:taskId/status', updateTaskStatus);
router.get('/user/:userId', getTasksByUserId);

export default router;
