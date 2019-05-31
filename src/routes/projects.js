import { Router } from 'express';
const router = Router();
import { createProject, getProject, getOneProject, deleteProject, updateProject } from '../controllers/project.controller';

// Rutas de Projects

router.get('/', getProject); // route para obtener todos los Projects
router.get('/:id', getOneProject); //route para obtener un project por id
router.post('/', createProject); //route para crear un nuevo project
router.put('/:id', updateProject); // route para actualiazar un project
router.delete('/:id', deleteProject); // route para eleiminar un project por id



export default router;