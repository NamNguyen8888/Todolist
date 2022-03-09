import express from 'express';
import {
	GetAllTodo,
	GetTodo,
	getTodoPrioriry,
	getTodoSearch,
	UpdateTodo
} from '../controllers/Todo.js';
const router = express.Router();

router.get('/', GetAllTodo);
router.get('/search', getTodoSearch);
router.get('/prioriry', getTodoPrioriry);

router.post('/', GetTodo);
router.patch('/:id', UpdateTodo);

export default router;
