import express from 'express';
import TodosController from '../controllers/TodosController';
import TodosServices from '../service/TodosServices';


const router = express.Router()

router.get('/', TodosController.home);
router.get('/todos', TodosController.find);
router.get('/todos/:id', TodosController.findId);
router.post('/todos', TodosController.pushData);
router.delete('/todos/:id', TodosController.deleteData);
router.patch('/todos/:id', TodosController.updateData);


export default router;