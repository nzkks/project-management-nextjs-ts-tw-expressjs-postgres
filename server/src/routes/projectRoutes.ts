import { Router } from 'express';

import { createProject, getProjectById, getProjects } from '../controllers/projectController';

const router = Router();

router.get('/', getProjects);
router.get('/:projectId', getProjectById);
router.post('/', createProject);

export default router;
